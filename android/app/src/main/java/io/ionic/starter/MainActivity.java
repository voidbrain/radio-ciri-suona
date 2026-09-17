package io.ionic.starter;

import android.app.admin.DevicePolicyManager;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.os.UserManager;
import android.view.KeyEvent;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

  public static volatile boolean isKioskActive = true;

  // Enterprise administration parameters
  private DevicePolicyManager dpm;
  private ComponentName adminComponent;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initialize the enterprise policy services
    dpm = (DevicePolicyManager) getSystemService(Context.DEVICE_POLICY_SERVICE);
    adminComponent = new ComponentName(this, MyDeviceAdminReceiver.class);

    // Force screen layout configurations
    getWindow().addFlags(
      WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON |
        WindowManager.LayoutParams.FLAG_DISMISS_KEYGUARD |
        WindowManager.LayoutParams.FLAG_SHOW_WHEN_LOCKED |
        WindowManager.LayoutParams.FLAG_TURN_SCREEN_ON
    );

    this.bridge.getWebView().getSettings().setJavaScriptEnabled(true);

    // JAVASCRIPT BRIDGE HOOK
    this.bridge.getWebView().addJavascriptInterface(new Object() {
      @JavascriptInterface
      public void toggleButtons(final boolean active) {
        runOnUiThread(new Runnable() {
          @Override
          public void run() {
            MainActivity.isKioskActive = active;

            // Dynamically toggle enterprise locks based on modal pass state
            setEnterpriseRestrictions(active);
          }
        });
      }
    }, "AndroidKioskBridge");

    // Apply the enterprise lockout immediately on application bootup
    setEnterpriseRestrictions(true);
  }

  // --- NATIVE ENTERPRISE SECURITY POLICIES ---
  private void setEnterpriseRestrictions(boolean active) {
    try {
      if (dpm != null && dpm.isDeviceOwnerApp(getPackageName())) {
        if (active) {

          // Prevent users from rebooting the tablet into Safe Mode
          dpm.addUserRestriction(
            adminComponent,
            UserManager.DISALLOW_SAFE_BOOT
          );

        } else {

          // Lift the Safe Mode restriction when the correct code is keyed in
          dpm.clearUserRestriction(
            adminComponent,
            UserManager.DISALLOW_SAFE_BOOT
          );
        }
      }
    } catch (Exception e) {
      e.printStackTrace();
    }
  }

  // INTERCEPT VOLUME BUTTON PRESS
  @Override
  public boolean onKeyDown(int keyCode, KeyEvent event) {
    if (
      MainActivity.isKioskActive &&
        (
          keyCode == KeyEvent.KEYCODE_VOLUME_DOWN ||
            keyCode == KeyEvent.KEYCODE_VOLUME_UP
        )
    ) {
      return true;
    }

    return super.onKeyDown(keyCode, event);
  }

  // INTERCEPT VOLUME BUTTON RELEASE
  @Override
  public boolean onKeyUp(int keyCode, KeyEvent event) {
    if (
      MainActivity.isKioskActive &&
        (
          keyCode == KeyEvent.KEYCODE_VOLUME_DOWN ||
            keyCode == KeyEvent.KEYCODE_VOLUME_UP
        )
    ) {
      return true;
    }

    return super.onKeyUp(keyCode, event);
  }

  // AGGRESSIVE OVERLAY RE-FOCUS AND SHUTDOWN MENU COLLAPSE TRAP
  @Override
  public void onWindowFocusChanged(boolean hasFocus) {
    super.onWindowFocusChanged(hasFocus);

    if (!hasFocus && MainActivity.isKioskActive) {
      Intent closeDialogs = new Intent(Intent.ACTION_CLOSE_SYSTEM_DIALOGS);

      try {
        //noinspection MissingPermission
        sendBroadcast(closeDialogs);
      } catch (Exception e) {
        Intent forceFront = new Intent(this, MainActivity.class);
        forceFront.addFlags(
          Intent.FLAG_ACTIVITY_NEW_TASK |
            Intent.FLAG_ACTIVITY_REORDER_TO_FRONT |
            Intent.FLAG_ACTIVITY_SINGLE_TOP
        );
        startActivity(forceFront);
      }
    }
  }

  @Override
  public void onPause() {
    super.onPause();

    if (MainActivity.isKioskActive) {
      Intent relaunchIntent = new Intent(this, MainActivity.class);
      relaunchIntent.addFlags(
        Intent.FLAG_ACTIVITY_NEW_TASK |
          Intent.FLAG_ACTIVITY_REORDER_TO_FRONT |
          Intent.FLAG_ACTIVITY_SINGLE_TOP
      );
      startActivity(relaunchIntent);
    }
  }
}
