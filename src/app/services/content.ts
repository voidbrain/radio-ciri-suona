import { Injectable, signal } from '@angular/core';

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
}

@Injectable({
  providedIn: 'root',
})

export class Content {
  public readonly pages = signal<Page[]>([
    { id: 1,
      name: 'Cronaca e politica',
      path: '1 Cronaca e politica',
      description1: "Tra il 1976 e il 1979 l’Italia attraversò una fase di profonda instabilità politica e sociale. Nel 1976 terremoto del Friuli e il disastro ambientale di Seveso sconvolsero il Paese. Il movimento giovanile del ‘77 animò università e piazze con proteste, occupazioni e duri scontri con le forze dell’ordine. ",
      description2: "Il 1978 fu segnato dal rapimento e dall’assassinio di Aldo Moro da parte delle Brigate Rosse. Il presidente della repubblica Giovanni Leone fu costretto alle dimissioni e al suo posto fu eletto Sandro Pertini. Furono approvate importanti riforme sociali, come le leggi sull’aborto, sull’ordinamento penitenziario, sulla chiusura dei manicomi, sul servizio sanitario nazionale.",
      files: [
        { id: 1, path: "1 Il terremoto del Friuli- intervista a Gianni Rasera, 1976.mp3", title: 'Il terremoto del Friuli: intervista a Gianni Rasera, 1976', },
        { id: 2, path: "2 I problemi degli ammalati- interviste a degenti dell’ospedale di Treviso, 1976.mp3", title: 'I problemi degli ammalati: interviste a degenti dell’ospedale di Treviso, 1976', },
        { id: 3, path: "3 Lo sfratto di una famiglia a Collalto- intervista a Gianni Rasera, 1976.mp3", title: 'Lo sfratto di una famiglia a Collalto: intervista a Gianni Rasera, 1976' },
        { id: 4, path: '4 L’evasione dal carcere di Santa Bona- intervista a Livio Fantina, 1977.mp3', title: "L’evasione dal carcere di Santa Bona: intervista a Livio Fantina, 1977" },
        { id: 5, path: "5 “Stanno troppo bene!”- intervista a un cittadino sulla situazione delle carceri, 1977.mp3", title: "“Stanno troppo bene!”: intervista a un cittadino sulla situazione delle carceri, 1977" },
        { id: 6, path: "6 “Che i ragazzi si mettano a studiare!”- intervista a una casalinga, 1977.mp3", title: "“Che i ragazzi si mettano a studiare!”: intervista a una casalinga, 1977" },
        { id: 7, path: "7 La RAI TV di fronte ai fatti del ’77- intervista a un cittadino, 1977.mp3", title: "La RAI TV di fronte ai fatti del ’77: intervista a un cittadino, 1977" },
        { id: 8, path: "8 Il rapimento di Aldo Moro- discorso di Bruno Marton, 1978.mp3", title: "Il rapimento di Aldo Moro: discorso di Bruno Marton, 1978" },
        { id: 9, path: "9  L’assassinio di Peppino Impastato- collegamento con Radio Aut, 1978.mp3", title: "L’assassinio di Peppino Impastato: collegamento con Radio Aut, 1978" },
        { id: 10, path: "10 Le dimissioni di Giovanni Leone- interviste al sindaco Antonio Mazzarolli e a cittadini, 1978.mp3", title: "Le dimissioni di Giovanni Leone: interviste al sindaco Antonio Mazzarolli e a cittadini, 1978" }
    ] },

    { id: 2,
      name: 'Lavoro e sindacato',
      path: "2 Lavoro e sindacato",
      description1: "Negli anni ’70 il mondo del lavoro cambiò profondamente, tra conquiste e tensioni raccontate dalle radio libere. Le lotte dell’“autunno caldo” del 1969 portarono allo Statuto dei lavoratori, che introdusse nuovi diritti e le 150 ore di permesso per i lavoratori-studenti. ",
      description2: "Crebbero le piccole imprese, soprattutto nei distretti industriali, trasformando l’organizzazione del lavoro. La frammentazione in aziende di dimensioni ridotte rese però più difficile la presenza e l’organizzazione sindacale. I sindacati seguirono inoltre i rinnovi contrattuali, la tutela della salute sul lavoro e le lotte dei precari, difendendo la democrazia durante gli anni di piombo.",
      files: [
        { id: 1, path: "1 Maltrattamenti alle lavoratrici del Grissinificio Roberto- intervista a un sindacalista, 1977.mp3", title: 'Maltrattamenti alle lavoratrici del Grissinificio Roberto: intervista a un sindacalista, 1977', },
        { id: 2, path: "2 Maltrattamenti alle lavoratrici del Grissinificio Roberto- intervista a un’operaia, 1977.mp3", title: 'Maltrattamenti alle lavoratrici del Grissinificio Roberto: intervista a un’operaia, 1977', },
        { id: 3, path: "3 Lavoro un ex detenuto_ Intervista a favore, 1977.mp3", title: "Lavoro un ex detenuto? Intervista a favore, 1977" },
        { id: 4, path: "4 Lavoro a un ex detenuto_ Intervista contro, 1977.mp3", title: "Lavoro a un ex detenuto? Intervista contro, 1977" },
        { id: 5, path: "5 Rinnovo contrattuale nel settore gomma-plastica- intervista al sindacalista Dal Bello, 1977.mp3", title: "Rinnovo contrattuale nel settore gomma-plastica: intervista al sindacalista Dal Bello, 1977" },
        { id: 6, path: "6 Sciopero nazionale dei lavoratori tessili- intervista al sindacalista Michelin, 1977.mp3", title: "Sciopero nazionale dei lavoratori tessili: intervista al sindacalista Michelin, 1977"},
        { id: 7, path: "7 Nocività dell’ambiente di lavoro all’Appiani- servizio di Radio Treviso 103, 1977.mp3", title: "Nocività dell’ambiente di lavoro all’Appiani: servizio di Radio Treviso 103, 1977" },
        { id: 8, path: "8 Salute e malattia alla Sebring Industria Tognana- intervista a una componente del Consiglio di fabbrica, 1978.mp3", title: "Salute e malattia alla Sebring Industria Tognana: intervista a una componente del Consiglio di fabbrica, 1978" },
        { id: 9, path: "9 La cooperativa Distilleria delle Cantine Sociali Venete- intervista al sindacalista Gasparini, 1978.mp3", title: "La cooperativa Distilleria delle Cantine Sociali Venete: intervista al sindacalista Gasparini, 1978 " },
        { id: 10, path: "10 Lavoratori del circo- intervista a Moira Orfei, 1978.mp3", title: "Lavoratori del circo: intervista a Moira Orfei, 1978" }
    ] },
    { id: 3,
      name: 'Manifestazioni e movimenti di piazza',
      path: "3 Manifestazioni e movimenti di piazza",
      description1: "Nella seconda metà degli anni ’70 le piazze italiane diventano il luogo in cui si esprime il disagio di un’intera generazione. Sull’onda delle proteste del ’68, studenti, giovani operai, disoccupati, femministe e militanti della sinistra extraparlamentare chiedono nuovi diritti e contestano la società tradizionale, in particolare sui temi del corpo, della sessualità e della condizione femminile.",
      description2: "La tensione raggiunge il culmine con il movimento del ’77, segnato da cortei, occupazioni universitarie e scontri con le forze dell’ordine. L’11 marzo, a Bologna, lo studente Francesco Lorusso viene ucciso durante uno scontro con i carabinieri, provocando manifestazioni in tutto il Paese. Radio Alice diventa la voce del movimento, raccontando gli eventi in diretta.",
      files: [
        { id: 1, path: "1 Manifestazione “Riprendiamoci la città” a Mestre- slogan e canti, 1977.mp3", title: 'Manifestazione “Riprendiamoci la città” a Mestre: canti, 1977', },
        { id: 2, path: "2 Corteo per l’8 marzo a Treviso- una manifestante racconta e registra, 1977.mp3", title: 'Corteo per l’8 marzo a Treviso: una manifestante racconta e registra, 1977', },
        { id: 3, path: "3 Anticoncezionali per non abortire.mp3", title: "“Anticoncezionali per non abortire, aborto libero per non morire”: volantino del coordinamento collettivi femministi di Treviso, 1977", },
        { id: 4, path: "4 Contro l’aborto- volantino degli studenti cristiani di Treviso, 1977.mp3", title: 'Contro l’aborto: volantino degli studenti cristiani di Treviso, 1977', },
        { id: 5, path: "5 Manifestazione femminista a Treviso- interviste in piazza, 1977.mp3", title: 'Manifestazione femminista a Treviso: interviste in piazza, 1977', },
        { id: 6, path: "6 Slogan alla manifestazione femminista, 1977.mp3", title: 'Slogan alla manifestazione femminista, 1977', },
        { id: 7, path: "7 Commemorazione del 25 aprile- discorso di Tina Anselmi, 1977.mp3", title: 'Commemorazione del 25 aprile: discorso di Tina Anselmi, 1977', },
        { id: 8, path: "8 Repressione poliziesca di manifestazioni studentesche e sindacali, 1977.mp3", title: 'Repressione poliziesca di manifestazioni studentesche e sindacali, 1977' }
    ] },
    { id: 4,
      name: 'Protagonismo femminile',
      path: "4 Protagonismo femminile",
      description1: "Negli anni ’70 l’Italia vive una stagione decisiva per i diritti delle donne. Dopo la legge sul divorzio del 1970 e il referendum del 1974, la legge 194 del 1978 regolamenta l’interruzione volontaria di gravidanza, confermata dal referendum del 1981. I sindacati sostengono le lotte per la parità salariale, il peso del “doppio ruolo” e le mobilitazioni per l’aborto e la salute.",
      description2: "I collettivi femministi, diffusi dalle grandi città alle province, portano nel dibattito pubblico temi prima ignorati: corpo, sessualità, violenza domestica e lavoro non retribuito. Nascono gruppi di autocoscienza, consultori autogestiti, riviste e nuclei di attiviste anche nelle città venete.",
      files: [
        { id: 1, path: "1 Lavoratrici delle compagnie assicurative- intervista, 1977.mp3", title: 'Lavoratrici delle compagnie assicurative: intervista, 1977', },
        { id: 2, path: "2 Canti femministi- montaggio 1, 1977.mp3", title: 'Canti femministi: montaggio 1, 1977', },
        { id: 3, path: "3 Canti femministi- montaggio 2, 1977.mp3", title: 'Canti femministi: montaggio 2, 1977', },
        { id: 4, path: "4 Parla una vittima di violenza- intervista ad Antonia, s.d..mp3", title: 'Parla una vittima di violenza: intervista ad Antonia, s.d.', },
        { id: 5, path: "5 Presa di coscienza delle lavoratrici tessili- intervista a una sindacalista, 1977.mp3", title: 'Presa di coscienza delle lavoratrici tessili: intervista a una sindacalista, 1977', },
        { id: 6, path: "6 Il lavoro a domicilio e una cosa schifosa intervista a una donna 1977.mp3", title: '“Il lavoro a domicilio è una cosa schifosa”: intervista a una donna, 1977', },
        { id: 7, path: "7 Aborto in fabbrica- una denuncia, s.d.mp3", title: "Aborto in fabbrica: una denuncia, s.d" },
        { id: 8, path: "8 La legge sull’aborto intervento a Monastier e interviste a Castelfranco Veneto 1978.mp3", title: "La legge sull’aborto: intervento a Monastier e interviste a Castelfranco Veneto, 1978" }
    ] },
    { id: 5,
      name: 'Scuola e studenti',
      path: "5 Scuola e studenti",
      description1: "Negli anni ’70 la scuola italiana attraversa un processo di democratizzazione che supera gradualmente il modello gentiliano. Le riforme promuovono il diritto allo studio, l’aggiornamento dei docenti e una maggiore partecipazione. Nascono gli asili nido comunali, il tempo pieno e gli organi collegiali aperti a studenti e famiglie.",
      description2: "Gli studenti manifestano contro la Riforma Malfatti e contro l’autoritarismo di presidi e insegnanti. Le lotte coinvolgono anche i docenti precari, con proteste, blocchi degli scrutini e una crescente partecipazione dei genitori attraverso i decreti delegati.",
      files: [
        { id: 1, path: "1 Manifestazione studentesca contro la riforma della scuola slogan 1977.mp3", title: 'Manifestazione studentesca contro la riforma della scuola: slogan, 1977', },
        { id: 2, path: "2 Manifestazione studentesca dopo l omicidio di Lorusso a Bologna intervista a un insegnante 1977.mp3", title: 'Manifestazione studentesca dopo l’omicidio di Lorusso a Bologna: intervista a un insegnante, 1977', },
        { id: 3, path: "3 Dopo l arresto dello studente Luciano Mellinato assemblea all Istituto Giorgi di Treviso 1977.mp3", title: "Dopo l’arresto dello studente Luciano Mellinato: assemblea all’Istituto Giorgi di Treviso, 1977 "},
        { id: 4, path: "4 Genitori contro il preside della scuola media Stefanini una denuncia, 1977.mp3", title: "Genitori contro il preside della scuola media Stefanini: una denuncia, 1977"},
        { id: 5, path: "5 Esami di maturita interviste agli studenti dell’Istituto magistrale.mp3", title: "Esami di maturità: interviste agli studenti dell’Istituto magistrale "},
        { id: 6, path: "6 Esami di maturita interviste agli studenti, 1977.mp3", title: "Esami di maturità: interviste agli studenti, 1977 "},
        { id: 7, path: "7 Assemblea studentesca al liceo scientifico Da Vinci di Treviso, 1978.mp3", title: "Assemblea studentesca al liceo scientifico Da Vinci di Treviso, 1978" },
        { id: 8, path: "8 Esame di terza media intervista a un lavoratorestudente respinto, sd.mp3", title: "Esame di terza media: intervista a un lavoratore-studente respinto, s.d." }
    ] },
    { id: 6,
      name: "Musica e controcultura",
      path: "6 Musica e controcultura",
      description1: "La musica è centrale nelle radio libere, diventando il linguaggio con cui i giovani esprimevano ribellione e desiderio di cambiamento. Le emittenti diffondono rock, pop britannico, progressive, cantautorato, reggae e, dalla seconda metà degli anni ’70, punk e new wave, proponendo una programmazione alternativa a quella della RAI. Accanto agli artisti internazionali trovano spazio musicisti emergenti e repertori locali. Canzoni di protesta e brani alternativi accompagnano scioperi, dibattiti e trasmissioni dei collettivi di base. La nuova scuola mette al centro l’educazione all’ascolto, alla creatività e alla corporeità del bambino.",
      description2: "",
      files: [
        { id: 1, path: "1 Aborto di stato- registrazione della canzone del Canzoniere Femminista, 1975.mp3", title: "Aborto di stato: registrazione della canzone del Canzoniere Femminista, 1975" },
        { id: 2, path: "2 Baradel- registrazione della canzone di Enzo Maolucci, 1976.mp3", title: "Baradel: registrazione della canzone di Enzo Maolucci, 1976" },
        { id: 3, path: "3 Eugenio- registrazione di una canzone popolare, s.d..mp3", title: "Eugenio: registrazione di una canzone popolare, s.d." },
        { id: 4, path: "4 Educazione sonora nella scuola dell’infanzia- intervista all’insegnante Simonetta Plumari, 1977.mp3", title: "Educazione sonora nella scuola dell’infanzia: intervista all’insegnante Simonetta Plumari, 1977" },
        { id: 5, path: "5 Filastrocche e canzoncine- intervista all’insegnante Simonetta Plumari, 1977.mp3", title: "Filastrocche e canzoncine: intervista all’insegnante Simonetta Plumari, 1977" },
        { id: 6, path: "6 Musica e politica- intervista a Demetrio Stratos, 1978.mp3", title: "Musica e politica: intervista a Demetrio Stratos, 1978" },
        { id: 7, path: "7 Il punk inglese- intervista a Demetrio Stratos, 1978.mp3", title: "Il punk inglese: intervista a Demetrio Stratos, 1978"},
        { id: 8, path: "8 Chet Baker- esperienze in carcere, s.d..mp3", title: "Chet Baker: esperienze in carcere, s.d." },
        { id: 9, path: "9 Hippies- lettura del libro “Do it!” di Jerry Rubin con intermezzi musicali, s.d..mp3", title: "Hippies: lettura del libro “Do it!” di Jerry Rubin con intermezzi musicali, s.d." }
      ]
    }
  ]);
}
