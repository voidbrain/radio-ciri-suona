package io.ionic.starter;

import com.getcapacitor.BridgeActivity;

import android.os.Bundle;
import androidx.activity.OnBackPressedCallback;

public class MainActivity extends BridgeActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Register a callback to intercept and disable back gestures/buttons
    getOnBackPressedDispatcher().addCallback(this, new OnBackPressedCallback(true) {
      @Override
      public void handleOnBackPressed() {
        // Do absolutely nothing here to block the back gesture entirely
        // This keeps your kiosk application in the foreground
      }
    });
  }
}
