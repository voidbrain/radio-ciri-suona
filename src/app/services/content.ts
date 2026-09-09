import { Injectable, signal } from "@angular/core";

export interface Mp3File {
  id: number;
  title: string;
  path?: string;
}

export interface Page {
  id: number;
  name: string;
  path: string | null;
  description1: string;
  description2: string;
  files: Mp3File[];
  image: string | null;
}

@Injectable({
  providedIn: "root",
})

export class Content {
  public readonly pages = signal<Page[]>([
    { id: 1,
      name: "Cronaca e politica",
      image: "images/image1.png",
      path: "1 Cronaca e politica",
      description1: "Nella seconda metà degli anni ’70 l’Italia attraversa una fase di profonda instabilità politica e sociale. Nel 1976 il terremoto del Friuli e il disastro ambientale di Seveso sconvolgono il Paese. Il movimento giovanile del ’77 anima <b>università e piazze</b> con proteste, occupazioni e duri scontri con le forze dell’ordine. ",
      description2: "Il 1978 è segnato dal rapimento e dall’assassinio di <b>Aldo Moro</b> da parte delle Brigate Rosse. Negli stessi giorni la mafia uccide Peppino Impastato. Il presidente della repubblica Giovanni Leone è costretto alle dimissioni. Sono approvate importanti <b>riforme sociali</b>, come le leggi sull’aborto, sulla chiusura dei manicomi, sul servizio sanitario nazionale.",
      files: [
        { id: 1, path: "1 Il terremoto del Friuli- intervista a Gianni Rasera, 1976.mp3", title: "<span class='number'>1.</span> Il terremoto del Friuli: intervista a Gianni Rasera, 1976", },
        { id: 2, path: "2 I problemi degli ammalati- interviste a degenti dell’ospedale di Treviso, 1976.mp3", title: "<span class='number'>2.</span> I problemi degli ammalati: interviste a degenti dell’ospedale di Treviso, 1976", },
        { id: 3, path: "3 Lo sfratto di una famiglia a Collalto- intervista a Gianni Rasera, 1976.mp3", title: "<span class='number'>3.</span> Lo sfratto di una famiglia a Collalto: intervista a Gianni Rasera, 1976" },
        { id: 4, path: "4 L’evasione dal carcere di Santa Bona- intervista a Livio Fantina, 1977.mp3", title: "<span class='number'>4.</span> L’evasione dal carcere di Santa Bona: intervista a Livio Fantina, 1977" },
        { id: 5, path: "5 “Stanno troppo bene!”- intervista a un cittadino sulla situazione delle carceri, 1977.mp3", title: "<span class='number'>5.</span> “Stanno troppo bene!”: intervista a un cittadino sulla situazione delle carceri, 1977" },
        { id: 6, path: "6 “Che i ragazzi si mettano a studiare!”- intervista a una casalinga, 1977.mp3", title: "<span class='number'>6.</span> “Che i ragazzi si mettano a studiare!”: intervista a una casalinga, 1977" },
        { id: 7, path: "7 La RAI TV di fronte ai fatti del ’77- intervista a un cittadino, 1977.mp3", title: "<span class='number'>7.</span> La RAI TV di fronte ai fatti del ’77: intervista a un cittadino, 1977" },
        { id: 8, path: "8 Il rapimento di Aldo Moro- discorso di Bruno Marton, 1978.mp3", title: "<span class='number'>8.</span> Il rapimento di Aldo Moro: discorso di Bruno Marton, 1978" },
        { id: 9, path: "9  L’assassinio di Peppino Impastato- collegamento con Radio Aut, 1978.mp3", title: "<span class='number'>9.</span> L’assassinio di Peppino Impastato: collegamento con Radio Aut, 1978" },
        { id: 10, path: "10 Le dimissioni di Giovanni Leone- interviste al sindaco Antonio Mazzarolli e a cittadini, 1978.mp3", title: "<span class='number'>10</span>. Le dimissioni di Giovanni Leone: interviste al sindaco Antonio Mazzarolli e ai cittadini, 1978" }
    ] },

    { id: 2,
      name: "Lavoro e sindacato",
      image: "images/image2.png",
      path: "2 Lavoro e sindacato",
      description1: "Negli anni ’70 il mondo del lavoro cambia profondamente, tra conquiste e tensioni raccontate dalle radio libere. Le lotte dell’ “autunno caldo” del 1969 portano allo <b>Statuto dei lavoratori</b>, che introduce nuovi diritti e favorisce la sindacalizzazione nelle fabbriche.",
      description2: "Dopo il 1973 la grande industria entra in crisi, mentre crescono le <b>piccole imprese</b>, soprattutto nei distretti industriali, trasformando l’organizzazione del lavoro. La frammentazione in aziende di dimensioni ridotte rende più difficile la presenza e l’organizzazione sindacale. I sindacati seguono i rinnovi contrattuali, la tutela della <b>salute sul lavoro</b> e le lotte dei precari, difendendo la democrazia durante gli anni di piombo.",
      files: [
        { id: 1, path: "1 Maltrattamenti alle lavoratrici del Grissinificio Roberto- intervista a un sindacalista, 1977.mp3", title: "<span class='number'>1.</span> Maltrattamenti alle lavoratrici del Grissinificio Roberto: intervista a un sindacalista, 1977", },
        { id: 2, path: "2 Maltrattamenti alle lavoratrici del Grissinificio Roberto- intervista a un’operaia, 1977.mp3", title: "<span class='number'>2.</span> Maltrattamenti alle lavoratrici del Grissinificio Roberto: intervista a un’operaia, 1977", },
        { id: 3, path: "3 Lavoro un ex detenuto_ Intervista a favore, 1977.mp3", title: "<span class='number'>3.</span> Lavoro a un ex detenuto? Intervista a favore, 1977" },
        { id: 4, path: "4 Lavoro a un ex detenuto_ Intervista contro, 1977.mp3", title: "<span class='number'>4.</span> Lavoro a un ex detenuto? Intervista contro, 1977" },
        { id: 5, path: "5 Rinnovo contrattuale nel settore gomma-plastica- intervista al sindacalista Dal Bello, 1977.mp3", title: "<span class='number'>5.</span> Rinnovo contrattuale nel settore gomma-plastica: intervista al sindacalista Dal Bello, 1977" },
        { id: 6, path: "6 Sciopero nazionale dei lavoratori tessili- intervista al sindacalista Michelin, 1977.mp3", title: "<span class='number'>6.</span> Sciopero nazionale dei lavoratori tessili: intervista al sindacalista Michelin, 1977"},
        { id: 7, path: "7 Nocività dell’ambiente di lavoro all’Appiani- servizio di Radio Treviso 103, 1977.mp3", title: "<span class='number'>7.</span> Nocività dell’ambiente di lavoro all’Appiani: servizio di Radio Treviso 103, 1977" },
        { id: 8, path: "8 Salute e malattia alla Sebring Industria Tognana- intervista a una componente del Consiglio di fabbrica, 1978.mp3", title: "<span class='number'>8.</span> Salute e malattia alla Sebring Industria Tognana: intervista a una componente del Consiglio di fabbrica, 1978" },
        { id: 9, path: "9 La cooperativa Distilleria delle Cantine Sociali Venete- intervista al sindacalista Gasparini, 1978.mp3", title: "<span class='number'>9.</span> La cooperativa Distilleria delle Cantine Sociali Venete: intervista al sindacalista Gasparini, 1978" },
        { id: 10, path: "10 Lavoratori del circo- intervista a Moira Orfei, 1978.mp3", title: "<span class='number'>10</span>. Lavoratori del circo: intervista a Moira Orfei, 1979" }
    ] },
    { id: 3,
      name: "Manifestazioni e movimenti di piazza",
      image: "images/image6.png",
      path: "3 Manifestazioni e movimenti di piazza",
      description1: "Nella seconda metà degli anni ’70 le <b>piazze italiane</b> diventano il luogo in cui si esprime il disagio di un’intera generazione. Studenti, giovani operai, disoccupati, femministe e militanti della sinistra extraparlamentare chiedono nuovi diritti e contestano la società tradizionale, in particolare sui temi del corpo, della sessualità e della condizione femminile. ",
      description2: "La tensione raggiunge il culmine con il <b>movimento del ’77</b>, segnato da cortei, occupazioni universitarie e scontri con le forze dell’ordine. L’11 marzo, a Bologna, lo studente <b>Francesco Lorusso</b> viene ucciso durante uno scontro con i carabinieri, provocando manifestazioni in tutto il Paese. <b>Radio Alice</b> diventa la voce del movimento, raccontando gli eventi in diretta.",
      files: [
        { id: 1, path: "1 Manifestazione “Riprendiamoci la città” a Mestre- slogan e canti, 1977.mp3", title: "<span class='number'>1.</span> Manifestazione “Riprendiamoci la città” a Mestre: cori e slogan, 1977", },
        { id: 2, path: "2 Corteo per l’8 marzo a Treviso- una manifestante racconta e registra, 1977.mp3", title: "<span class='number'>2.</span> Corteo per l’8 marzo a Treviso: una manifestante racconta e registra, 1977", },
        { id: 3, path: "3 Anticoncezionali per non abortire.mp3", title: "<span class='number'>3.</span> “Anticoncezionali per non abortire, aborto libero per non morire”: volantino del coordinamento collettivi femministi di Treviso, 1977", },
        { id: 4, path: "4 Contro l’aborto- volantino degli studenti cristiani di Treviso, 1977.mp3", title: "<span class='number'>4.</span> Contro l’aborto: volantino degli studenti cristiani di Treviso, 1977", },
        { id: 5, path: "5 Manifestazione femminista a Treviso- interviste in piazza, 1977.mp3", title: "<span class='number'>5.</span> Manifestazione femminista a Treviso: interviste in piazza, 1977", },
        { id: 6, path: "6 Slogan alla manifestazione femminista, 1977.mp3", title: "<span class='number'>6.</span> Slogan alla manifestazione femminista, 1977", },
        { id: 7, path: "7 Commemorazione del 25 aprile- discorso di Tina Anselmi, 1977.mp3", title: "<span class='number'>7.</span> Commemorazione del 25 aprile: discorso di Tina Anselmi, 1977", },
        { id: 8, path: "8 Repressione poliziesca di manifestazioni studentesche e sindacali, 1977.mp3", title: "<span class='number'>8.</span> Repressione poliziesca di manifestazioni studentesche e sindacali, 1977" }
    ] },
    { id: 4,
      name: "Protagonismo femminile",
      image: "images/image7.png",
      path: "4 Protagonismo femminile",
      description1: "Negli anni ’70 l’Italia vive una stagione decisiva per i <b>diritti delle donne</b>. Dopo la legge sul divorzio del 1970 e il referendum del 1974, la legge 194 del 1978 regolamenta l’interruzione volontaria di gravidanza, confermata dal referendum del 1981. I sindacati sostengono le lotte per la <b>parità salariale</b> e le mobilitazioni per l’aborto e la salute. ",
      description2: "I <b>collettivi femministi</b>, diffusi dalle grandi città alle province, portano nel dibattito pubblico temi prima ignorati: corpo, sessualità, violenza di genere e lavoro domestico non retribuito. Nascono gruppi di autocoscienza, consultori autogestiti, riviste e nuclei di attiviste anche nelle città venete.",
      files: [
        { id: 1, path: "1 Lavoratrici delle compagnie assicurative- intervista, 1977.mp3", title: "<span class='number'>1.</span> Lavoratrici delle compagnie assicurative: intervista, 1977", },
        { id: 2, path: "2 Canti femministi- montaggio 1, 1977.mp3", title: "<span class='number'>2.</span> Canti femministi: montaggio 1, 1977", },
        { id: 3, path: "3 Canti femministi- montaggio 2, 1977.mp3", title: "<span class='number'>3.</span> Canti femministi: montaggio 2, 1977", },
        { id: 4, path: "4 Parla una vittima di violenza- intervista ad Antonia, s.d..mp3", title: "<span class='number'>4.</span> Parla una vittima di violenza: intervista ad Antonia, s.d.", },
        { id: 5, path: "5 Presa di coscienza delle lavoratrici tessili- intervista a una sindacalista, 1977.mp3", title: "<span class='number'>5.</span> Presa di coscienza delle lavoratrici tessili: intervista a una sindacalista, 1977", },
        { id: 6, path: "6 Il lavoro a domicilio e una cosa schifosa intervista a una donna 1977.mp3", title: "<span class='number'>6.</span> “Il lavoro a domicilio è una cosa schifosa”: intervista a una donna, 1977", },
        { id: 7, path: "7 Aborto in fabbrica- una denuncia, s.d.mp3", title: "<span class='number'>7.</span> Aborto in fabbrica: una denuncia, s.d" },
        { id: 8, path: "8 La legge sull’aborto intervento a Monastier e interviste a Castelfranco Veneto 1978.mp3", title: "<span class='number'>8.</span> La legge sull’aborto: intervento a Monastier e interviste a Castelfranco Veneto, 1978" }
    ] },
    { id: 5,
      name: "Scuola e studenti",
      image: "images/image8.png",
      path: "5 Scuola e studenti",
      description1: "Negli anni ’70 la scuola italiana attraversa un processo di democratizzazione che supera gradualmente i retaggi ereditati dal fascismo. Le riforme promuovono il <b>diritto allo studio</b>, l’aggiornamento dei docenti e una maggiore partecipazione. Nascono gli asili nido comunali, il tempo pieno e gli organi collegiali aperti a studenti e famiglie. Si diffondono esperienze di didattica attiva e la “<b>scuola delle 150 ore</b>” consente a centinaia di migliaia di lavoratori di completare la scuola dell’obbligo.",
      description2: "Gli studenti manifestano contro la <b>riforma Malfatti (1977)</b> e contro l’autoritarismo di presidi e insegnanti. Le lotte coinvolgono anche i <b>docenti precari</b>, con proteste e blocchi degli scrutini.",
      files: [
        { id: 1, path: "1 Manifestazione studentesca contro la riforma della scuola slogan 1977.mp3", title: "<span class='number'>1.</span> Manifestazione studentesca contro la riforma della scuola: cori e slogan, 1977", },
        { id: 2, path: "2 Manifestazione studentesca dopo l omicidio di Lorusso a Bologna intervista a un insegnante 1977.mp3", title: "<span class='number'>2.</span> Manifestazione studentesca dopo l’omicidio di Lorusso a Bologna: intervista a un insegnante, 1977 ", },
        { id: 3, path: "3 Dopo l arresto dello studente Luciano Mellinato assemblea all Istituto Giorgi di Treviso 1977.mp3", title: "<span class='number'>3.</span> Dopo l’arresto dello studente Luciano Mellinato: assemblea all’Istituto Giorgi di Treviso, 1977 "},
        { id: 4, path: "4 Genitori contro il preside della scuola media Stefanini una denuncia, 1977.mp3", title: "<span class='number'>4.</span> Genitori contro il preside della scuola media Stefanini di Treviso: una denuncia, 1977"},
        { id: 5, path: "5 Esami di maturita interviste agli studenti dell’Istituto magistrale.mp3", title: "<span class='number'>5.</span> Esami di maturità: interviste agli studenti, 1977"},
        { id: 6, path: "6 Esami di maturita interviste agli studenti, 1977.mp3", title: "<span class='number'>6.</span> Esami di maturità: altre interviste, 1977 "},
        { id: 7, path: "7 Assemblea studentesca al liceo scientifico Da Vinci di Treviso, 1978.mp3", title: "<span class='number'>7.</span> Assemblea studentesca al liceo scientifico Da Vinci di Treviso, 1978" },
        { id: 8, path: "8 Esame di terza media intervista a un lavoratorestudente respinto, sd.mp3", title: "<span class='number'>8.</span> Esame di terza media: intervista a un lavoratore-studente respinto, s.d." }
    ] },
    { id: 6,
      name: "Musica e controcultura",
      image: "images/image9.png",
      path: "6 Musica e controcultura",
      description1: "La musica è centrale nelle radio libere, diventando il linguaggio con cui i giovani esprimono <b>ribellione</b> e desiderio di cambiamento. Le emittenti diffondono rock, pop britannico, progressive, cantautorato, reggae e, dalla seconda metà degli anni ’70, <b>punk</b> e <b>new wave</b>, proponendo una programmazione alternativa a quella della RAI. Accanto agli artisti internazionali trovano spazio musicisti emergenti e repertori locali.",
      description2: "<b>Canzoni di protesta</b> e brani alternativi accompagnano scioperi, dibattiti e trasmissioni dei collettivi di base. La nuova scuola mette al centro l’educazione all’ascolto, alla creatività e alla corporeità delle bambine e dei bambini.",
      files: [
        { id: 1, path: "1 Aborto di stato- registrazione della canzone del Canzoniere Femminista, 1975.mp3", title: "<span class='number'>1.</span> Aborto di stato: registrazione della canzone del Canzoniere Femminista, 1975" },
        { id: 2, path: "2 Baradel- registrazione della canzone di Enzo Maolucci, 1976.mp3", title: "<span class='number'>2.</span> Baradel: registrazione della canzone di Enzo Maolucci, 1976" },
        { id: 3, path: "3 Eugenio- registrazione di una canzone popolare, s.d..mp3", title: "<span class='number'>3.</span> Eugenio: registrazione di una canzone popolare, s.d." },
        { id: 4, path: "4 Educazione sonora nella scuola dell’infanzia- intervista all’insegnante Simonetta Plumari, 1977.mp3", title: "<span class='number'>4.</span> Educazione sonora nella scuola dell’infanzia: intervista all’insegnante Simonetta Plumari, 1977" },
        { id: 5, path: "5 Filastrocche e canzoncine- intervista all’insegnante Simonetta Plumari, 1977.mp3", title: "<span class='number'>5.</span> Filastrocche e canzoncine: intervista all’insegnante Simonetta Plumari, 1977" },
        { id: 6, path: "6 Musica e politica- intervista a Demetrio Stratos, 1978.mp3", title: "<span class='number'>6.</span> Musica e politica: intervista a Demetrio Stratos, 1978" },
        { id: 7, path: "7 Il punk inglese- intervista a Demetrio Stratos, 1978.mp3", title: "<span class='number'>7.</span> Il punk inglese: intervista a Demetrio Stratos, 1978"},
        { id: 8, path: "8 Chet Baker- esperienze in carcere, s.d..mp3", title: "<span class='number'>8.</span> Chet Baker: esperienze in carcere, s.d." },
        { id: 9, path: "9 Hippies- lettura del libro “Do it!” di Jerry Rubin con intermezzi musicali, s.d..mp3", title: "<span class='number'>9.</span> Hippies: lettura del libro “Do it!” di Jerry Rubin con intermezzi musicali, s.d." }
      ]
    }
  ]);
  public readonly masterPage = signal<Page | null>({
    id: 0,
    name: "Radio CiRisuona - Un incontro tra memoria e ascolto ",
    path: null,
    description1: "Negli anni ’70 le radio libere aprirono in Italia uno spazio totalmente nuovo di partecipazione. Persone comuni presero la parola attraverso l’etere per raccontare direttamente il proprio territorio, il lavoro, le lotte sociali, i diritti, l’ambiente e la vita quotidiana delle comunità. ",
    description2: "La mostra <b>Radio CiRisuona</b> riporta oggi quelle voci storiche al presente. Non si tratta di un semplice recupero di vecchie registrazioni d’archivio, ma di un vero e proprio <b>incontro immersivo tra memoria e ascolto</b>, concepito come un’esperienza sonora in cui il passato torna a interrogare direttamente il nostro presente. Perché risuonare con il mondo non significa fare da eco a qualcosa di già sentito, ma entrare in una relazione viva, imprevedibile e trasformativa con ciò che ci circonda. Significa <b>ascoltare e lasciarsi cambiare</b>.",
    files: [],
    image: null
  });
}
