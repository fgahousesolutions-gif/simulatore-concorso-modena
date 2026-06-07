const QUESTIONS = [
  {
    "id": 1,
    "topic": "TUEL",
    "question": "Ai sensi dell'art. 3 del TUEL (D.Lgs. 267/2000), quale tra le seguenti autonomie NON è riconosciuta ai Comuni e alle Province?",
    "options": {
      "A": "Autonomia statutaria",
      "B": "Autonomia giurisdizionale",
      "C": "Autonomia finanziaria di entrata e di spesa",
      "D": "Autonomia organizzativa e amministrativa"
    },
    "correct": "B",
    "explanation": "L'autonomia giurisdizionale appartiene alla funzione giurisdizionale dello Stato. Gli enti locali hanno invece autonomia statutaria, normativa, organizzativa, amministrativa, impositiva e finanziaria.",
    "reference": "Art. 3 TUEL",
    "commonError": "Confondere l'autonomia degli enti locali con il potere di amministrare la giustizia."
  },
  {
    "id": 2,
    "topic": "TUEL",
    "question": "In base all'art. 6 del TUEL, con quale maggioranza deve essere deliberato lo Statuto comunale dal Consiglio?",
    "options": {
      "A": "Maggioranza semplice dei presenti in aula",
      "B": "Maggioranza dei due terzi dei consiglieri assegnati",
      "C": "Unanimità dei voti favorevoli",
      "D": "Maggioranza assoluta dei soli presenti al voto"
    },
    "correct": "B",
    "explanation": "Lo Statuto è deliberato con il voto favorevole dei due terzi dei consiglieri assegnati. Se tale maggioranza non si raggiunge, la votazione è ripetuta in sedute successive e serve per due volte la maggioranza assoluta dei consiglieri assegnati.",
    "reference": "Art. 6 TUEL",
    "commonError": "Dire genericamente maggioranza semplice: per lo Statuto la regola è rafforzata."
  },
  {
    "id": 3,
    "topic": "TUEL",
    "question": "Quale organo dell'ente locale ha la competenza esclusiva per l'adozione dei regolamenti, salvo quello sull'ordinamento degli uffici e dei servizi?",
    "options": {
      "A": "La Giunta",
      "B": "Il Segretario generale",
      "C": "Il Consiglio",
      "D": "Il Sindaco o il Presidente della Provincia"
    },
    "correct": "C",
    "explanation": "Il Consiglio approva i regolamenti dell'ente. Fa eccezione il regolamento sull'ordinamento degli uffici e dei servizi, che rientra nelle competenze della Giunta.",
    "reference": "Art. 42 TUEL",
    "commonError": "Attribuire alla Giunta tutti i regolamenti: la Giunta approva solo quello sugli uffici e servizi."
  },
  {
    "id": 4,
    "topic": "TUEL",
    "question": "Secondo l'art. 48 del TUEL, quale tipo di competenza è attribuita alla Giunta comunale/provinciale?",
    "options": {
      "A": "Competenza tassativa ed esclusiva su tutte le materie",
      "B": "Competenza residuale per gli atti non riservati al Consiglio e non spettanti a Sindaco/Presidente o dirigenti",
      "C": "Competenza limitata alla sola gestione del personale",
      "D": "Competenza consultiva obbligatoria sugli atti del Sindaco"
    },
    "correct": "B",
    "explanation": "La Giunta collabora con Sindaco o Presidente e compie gli atti di governo che non sono riservati dalla legge al Consiglio e non rientrano nelle competenze del Sindaco/Presidente o dei dirigenti.",
    "reference": "Art. 48 TUEL",
    "commonError": "Pensare che la Giunta abbia competenze gestionali: la gestione spetta ai dirigenti/responsabili."
  },
  {
    "id": 5,
    "topic": "TUEL",
    "question": "Chi ha il potere di nominare i responsabili degli uffici e dei servizi e di attribuire gli incarichi dirigenziali?",
    "options": {
      "A": "Il Consiglio",
      "B": "Il Sindaco o il Presidente della Provincia",
      "C": "Il Segretario generale dell'ente",
      "D": "La Giunta riunita in forma collegiale"
    },
    "correct": "B",
    "explanation": "Il Sindaco o il Presidente della Provincia nomina i responsabili degli uffici e dei servizi e attribuisce gli incarichi dirigenziali, secondo criteri e indirizzi stabiliti dall'ordinamento dell'ente.",
    "reference": "Art. 50, comma 10, TUEL",
    "commonError": "Confondere la nomina politica/amministrativa degli incarichi con la gestione quotidiana, che resta ai dirigenti."
  },
  {
    "id": 6,
    "topic": "TUEL",
    "question": "In che veste agisce il Sindaco quando adotta ordinanze contingibili e urgenti per prevenire gravi pericoli per l'incolumità pubblica o la sicurezza urbana?",
    "options": {
      "A": "Rappresentante legale dell'ente locale",
      "B": "Ufficiale del Governo",
      "C": "Sostituto del Presidente del Consiglio",
      "D": "Presidente del Consiglio comunale"
    },
    "correct": "B",
    "explanation": "Nelle attribuzioni di cui all'art. 54 TUEL il Sindaco agisce come ufficiale del Governo, cioè come rappresentante dello Stato sul territorio.",
    "reference": "Art. 54 TUEL",
    "commonError": "Confondere art. 50 e art. 54: il primo riguarda il Sindaco come capo dell'amministrazione comunale; il secondo come ufficiale del Governo."
  },
  {
    "id": 7,
    "topic": "TUEL",
    "question": "Ai sensi dell'art. 99 del TUEL, chi nomina il Segretario comunale o provinciale?",
    "options": {
      "A": "Il Prefetto della provincia di riferimento",
      "B": "Il Consiglio dell'ente, previo concorso pubblico",
      "C": "Il Sindaco o il Presidente della Provincia",
      "D": "Il Ministero dell'Interno tramite estrazione a sorte"
    },
    "correct": "C",
    "explanation": "Il Segretario è nominato dal Sindaco o dal Presidente della Provincia tra gli iscritti all'albo. La nomina ha durata corrispondente al mandato dell'organo che lo ha nominato.",
    "reference": "Art. 99 TUEL",
    "commonError": "Dire Prefetto o Consiglio: il potere di nomina è del Sindaco/Presidente."
  },
  {
    "id": 8,
    "topic": "TUEL",
    "question": "Secondo il principio di separazione tra politica e gestione, a chi spetta l'adozione degli atti che impegnano l'amministrazione verso l'esterno?",
    "options": {
      "A": "Agli assessori nelle rispettive deleghe",
      "B": "Ai dirigenti",
      "C": "Al Sindaco in via esclusiva",
      "D": "Al Presidente del Consiglio comunale"
    },
    "correct": "B",
    "explanation": "Ai dirigenti spetta la gestione amministrativa, finanziaria e tecnica, compresi gli atti che impegnano l'amministrazione verso l'esterno.",
    "reference": "Art. 107 TUEL",
    "commonError": "Attribuire ad assessori o Sindaco la firma di atti gestionali come determine, impegni e contratti."
  },
  {
    "id": 9,
    "topic": "TUEL",
    "question": "Cosa si intende per impegno di spesa nella contabilità degli enti locali?",
    "options": {
      "A": "La fase in cui si emette materialmente l'ordinativo di pagamento",
      "B": "La fase in cui si verifica che la prestazione sia stata eseguita",
      "C": "La fase con cui nasce l'obbligazione giuridica e viene vincolata la somma necessaria sul bilancio",
      "D": "L'atto con cui il tesoriere versa i soldi al fornitore"
    },
    "correct": "C",
    "explanation": "L'impegno è la fase con cui l'ente assume un'obbligazione giuridica, individua creditore, ragione e importo, e vincola le somme sul bilancio.",
    "reference": "Art. 183 TUEL",
    "commonError": "Confondere impegno con liquidazione o pagamento."
  },
  {
    "id": 10,
    "topic": "TUEL",
    "question": "Il Documento Unico di Programmazione (DUP) ha carattere:",
    "options": {
      "A": "Strategico e operativo, e costituisce guida fondamentale dell'ente",
      "B": "Esclusivamente contabile e non può essere modificato",
      "C": "Facoltativo per i comuni sotto i 15.000 abitanti",
      "D": "Meramente descrittivo delle spese passate"
    },
    "correct": "A",
    "explanation": "Il DUP è lo strumento di guida strategica e operativa dell'ente ed è presupposto degli altri documenti di programmazione.",
    "reference": "Art. 170 TUEL e D.Lgs. 118/2011",
    "commonError": "Ridurre il DUP a un semplice allegato contabile: è un documento di programmazione."
  },
  {
    "id": 11,
    "topic": "TUEL",
    "question": "Cosa sono i residui passivi nella gestione finanziaria?",
    "options": {
      "A": "Spese previste ma mai autorizzate dal Consiglio",
      "B": "Spese impegnate ma non ancora pagate entro la chiusura dell'esercizio",
      "C": "Entrate accertate ma non ancora riscosse",
      "D": "Somme che l'ente ha sprecato in gestione corrente"
    },
    "correct": "B",
    "explanation": "I residui passivi sono somme già impegnate ma non ancora pagate alla fine dell'esercizio.",
    "reference": "Art. 190 TUEL",
    "commonError": "Confondere residui passivi con residui attivi, che sono entrate accertate ma non riscosse."
  },
  {
    "id": 12,
    "topic": "TUEL",
    "question": "Il Piano Esecutivo di Gestione (PEG) deve essere approvato da:",
    "options": {
      "A": "Il Consiglio entro il 31 dicembre",
      "B": "La Giunta entro 20 giorni dall'approvazione del bilancio",
      "C": "Il Segretario generale su delega del Sindaco",
      "D": "Il Responsabile del servizio finanziario"
    },
    "correct": "B",
    "explanation": "Il PEG è approvato dalla Giunta entro venti giorni dall'approvazione del bilancio di previsione e assegna obiettivi e risorse ai responsabili.",
    "reference": "Art. 169 TUEL",
    "commonError": "Attribuirlo al Consiglio: il Consiglio approva bilancio e documenti fondamentali, la Giunta il PEG."
  },
  {
    "id": 13,
    "topic": "TUEL",
    "question": "In base alla Legge 241/1990, la motivazione del provvedimento amministrativo deve indicare:",
    "options": {
      "A": "Solo gli articoli di legge applicati",
      "B": "I presupposti di fatto e le ragioni giuridiche che hanno determinato la decisione",
      "C": "Esclusivamente il nome del responsabile del procedimento",
      "D": "Il numero di protocollo della domanda iniziale"
    },
    "correct": "B",
    "explanation": "La motivazione spiega perché la PA ha deciso in un certo modo: fatti rilevanti e norme applicate.",
    "reference": "Art. 3 L. 241/1990",
    "commonError": "Pensare che basti citare una norma senza spiegare i fatti."
  },
  {
    "id": 14,
    "topic": "Artt.",
    "question": "Chi è il soggetto che cura l'istruttoria, adotta le misure per il corretto svolgimento dell'iter e può adottare il provvedimento finale se competente?",
    "options": {
      "A": "L'assessore al ramo",
      "B": "Il responsabile del procedimento",
      "C": "Il difensore civico",
      "D": "Il presidente del Consiglio"
    },
    "correct": "B",
    "explanation": "Il responsabile del procedimento segue il procedimento, cura l'istruttoria e può adottare il provvedimento finale se ne ha la competenza.",
    "reference": "Artt. 5 e 6 L. 241/1990",
    "commonError": "Confondere il responsabile del procedimento con l'organo politico."
  },
  {
    "id": 15,
    "topic": "TUEL",
    "question": "Il preavviso di rigetto obbliga la PA a:",
    "options": {
      "A": "Pubblicare sul sito l'elenco dei bocciati",
      "B": "Comunicare all'interessato i motivi ostativi all'accoglimento prima della decisione finale",
      "C": "Chiedere un parere preventivo al Sindaco",
      "D": "Restituire gli oneri istruttori pagati dal cittadino"
    },
    "correct": "B",
    "explanation": "Nei procedimenti a istanza di parte, prima di adottare un provvedimento negativo, la PA comunica i motivi ostativi e consente all'interessato di presentare osservazioni.",
    "reference": "Art. 10-bis L. 241/1990",
    "commonError": "Dimenticare che riguarda i procedimenti avviati su domanda del privato."
  },
  {
    "id": 16,
    "topic": "TUEL",
    "question": "Cosa prevede l'art. 20 della Legge 241/1990 in merito al silenzio dell'amministrazione nei procedimenti a istanza di parte?",
    "options": {
      "A": "Il silenzio equivale sempre a rigetto",
      "B": "Il silenzio equivale ad accoglimento della domanda, salvo eccezioni",
      "C": "Il procedimento si annulla automaticamente dopo 60 giorni",
      "D": "Il dipendente viene licenziato per colpa grave"
    },
    "correct": "B",
    "explanation": "Nei procedimenti a istanza di parte, decorso il termine senza risposta, il silenzio può equivalere ad accoglimento, salvo materie escluse come ambiente, salute e pubblica sicurezza.",
    "reference": "Art. 20 L. 241/1990",
    "commonError": "Applicare il silenzio-assenso a ogni materia: esistono esclusioni importanti."
  },
  {
    "id": 17,
    "topic": "TUEL",
    "question": "Il potere di annullamento d'ufficio può essere esercitato:",
    "options": {
      "A": "In qualsiasi momento, anche dopo 10 anni",
      "B": "Entro un termine ragionevole e, per molti atti ampliativi, comunque non superiore a 12 mesi",
      "C": "Solo se il destinatario dell'atto è d'accordo",
      "D": "Solo per gli atti che non comportano spesa"
    },
    "correct": "B",
    "explanation": "L'annullamento d'ufficio serve a rimuovere un atto illegittimo, se c'è interesse pubblico e nel rispetto dei termini previsti dalla legge.",
    "reference": "Art. 21-novies L. 241/1990",
    "commonError": "Confondere annullamento d'ufficio con revoca: l'annullamento riguarda l'illegittimità dell'atto."
  },
  {
    "id": 18,
    "topic": "TUEL",
    "question": "L'accesso documentale ai sensi dell'art. 22 della Legge 241/1990 può essere richiesto da:",
    "options": {
      "A": "Chiunque, senza dover motivare la richiesta",
      "B": "Chi abbia un interesse diretto, concreto e attuale, corrispondente a una situazione giuridicamente tutelata",
      "C": "Esclusivamente i dipendenti della stessa amministrazione",
      "D": "Solo i partiti politici presenti in Parlamento"
    },
    "correct": "B",
    "explanation": "L'accesso documentale richiede un interesse qualificato collegato al documento richiesto.",
    "reference": "Art. 22 L. 241/1990",
    "commonError": "Confonderlo con accesso civico semplice o generalizzato, che hanno presupposti diversi."
  },
  {
    "id": 19,
    "topic": "TUEL",
    "question": "Il principio del risultato introdotto dal D.Lgs. 36/2023 nei contratti pubblici rappresenta:",
    "options": {
      "A": "L'obbligo di risparmiare ad ogni costo, anche a scapito della qualità",
      "B": "L'obiettivo prioritario dell'affidamento e dell'esecuzione tempestiva del contratto con il miglior rapporto qualità-prezzo",
      "C": "La necessità di favorire sempre le aziende locali",
      "D": "L'obbligo di concludere tutte le gare entro 15 giorni"
    },
    "correct": "B",
    "explanation": "Il principio del risultato orienta l'azione della stazione appaltante verso affidamenti tempestivi, efficienti e di qualità.",
    "reference": "Art. 1 D.Lgs. 36/2023",
    "commonError": "Pensare che risultato significhi solo prezzo più basso."
  },
  {
    "id": 20,
    "topic": "TUEL",
    "question": "Chi è il Responsabile Unico del Progetto (RUP) secondo il nuovo Codice dei contratti?",
    "options": {
      "A": "Un consulente esterno sempre obbligatorio",
      "B": "Il tecnico che firma solo il progetto esecutivo",
      "C": "Il soggetto nominato per le fasi di programmazione, progettazione, affidamento ed esecuzione",
      "D": "Il Sindaco, in quanto legale rappresentante dell'ente"
    },
    "correct": "C",
    "explanation": "Il RUP coordina il ciclo di vita del contratto pubblico, dalle fasi iniziali fino all'esecuzione.",
    "reference": "Art. 15 D.Lgs. 36/2023",
    "commonError": "Usare la vecchia formula 'Responsabile unico del procedimento' nel contesto del nuovo Codice."
  },
  {
    "id": 21,
    "topic": "TUEL",
    "question": "Per l'affidamento diretto di servizi e forniture, il D.Lgs. 36/2023 fissa una soglia di importo pari a:",
    "options": {
      "A": "Inferiore a 40.000 euro",
      "B": "Inferiore a 140.000 euro",
      "C": "Inferiore a 5.382.000 euro",
      "D": "Superiore a 1 milione di euro"
    },
    "correct": "B",
    "explanation": "Per servizi e forniture è consentito l'affidamento diretto sotto la soglia di 140.000 euro, nel rispetto delle regole del Codice.",
    "reference": "Art. 50, comma 1, lett. b), D.Lgs. 36/2023",
    "commonError": "Confondere la soglia di servizi/forniture con quella dei lavori."
  },
  {
    "id": 22,
    "topic": "TUEL",
    "question": "La determina a contrarre deve indicare necessariamente:",
    "options": {
      "A": "La biografia dei titolari delle ditte partecipanti",
      "B": "Gli elementi essenziali del contratto e i criteri di selezione degli operatori economici e delle offerte",
      "C": "Solo il nome del vincitore della gara",
      "D": "Il colore degli arredi da acquistare"
    },
    "correct": "B",
    "explanation": "Prima di avviare una procedura di affidamento, l'ente determina di contrarre indicando oggetto, importo, contraente o modalità di scelta, ragioni e condizioni essenziali.",
    "reference": "Art. 17 D.Lgs. 36/2023 e art. 192 TUEL",
    "commonError": "Pensare che la determina sia solo un atto formale: contiene gli elementi essenziali dell'affidamento."
  },
  {
    "id": 23,
    "topic": "D.Lgs.",
    "question": "Ai sensi del D.Lgs. 165/2001, il rapporto di lavoro dei dipendenti degli enti locali è disciplinato:",
    "options": {
      "A": "Esclusivamente da leggi speciali dello Stato",
      "B": "Dai contratti collettivi e dalle norme del codice civile, salvo disposizioni speciali",
      "C": "Solo dallo Statuto dell'ente locale",
      "D": "Da regolamenti adottati dal Prefetto"
    },
    "correct": "B",
    "explanation": "Il lavoro pubblico è in gran parte contrattualizzato: si applicano codice civile e contratti collettivi, con regole speciali previste dalla legge.",
    "reference": "D.Lgs. 165/2001",
    "commonError": "Pensare che tutto sia regolato solo da legge e non dal CCNL."
  },
  {
    "id": 24,
    "topic": "TUEL",
    "question": "Il Codice di comportamento dei dipendenti pubblici vieta di accettare regali o utilità, salvo quelli d'uso di modico valore. Qual è il limite generalmente previsto?",
    "options": {
      "A": "10 euro",
      "B": "150 euro, salvo diversa soglia più bassa stabilita dall'ente",
      "C": "500 euro",
      "D": "Non esiste un limite numerico"
    },
    "correct": "B",
    "explanation": "I regali d'uso di modico valore sono generalmente ammessi entro il limite orientativo di 150 euro, salvo soglie più restrittive previste dall'amministrazione.",
    "reference": "Art. 4 DPR 62/2013",
    "commonError": "Credere che i regali siano sempre liberi se di cortesia."
  },
  {
    "id": 25,
    "topic": "TUEL",
    "question": "Cosa deve fare un dipendente in caso di conflitto di interessi, anche potenziale?",
    "options": {
      "A": "Concludere il procedimento il prima possibile",
      "B": "Astenersi dal partecipare all'atto e segnalare la situazione al dirigente",
      "C": "Chiedere un parere scritto all'assessore competente",
      "D": "Proseguire normalmente se non c'è vantaggio economico immediato"
    },
    "correct": "B",
    "explanation": "Il dipendente deve astenersi e segnalare il conflitto, anche potenziale, per tutelare imparzialità e buon andamento.",
    "reference": "Art. 6-bis L. 241/1990 e art. 7 DPR 62/2013",
    "commonError": "Valutare da soli che il conflitto è 'piccolo' e andare avanti."
  },
  {
    "id": 26,
    "topic": "TUEL",
    "question": "L'accesso civico semplice riguarda:",
    "options": {
      "A": "I documenti che l'ente ha l'obbligo di pubblicare e che ha omesso di pubblicare",
      "B": "Qualsiasi dato detenuto dalla PA, anche se non soggetto a pubblicazione obbligatoria",
      "C": "Solo le sentenze della Corte dei conti",
      "D": "Esclusivamente i dati personali dei vicini di casa"
    },
    "correct": "A",
    "explanation": "L'accesso civico semplice serve a ottenere la pubblicazione di documenti, dati o informazioni soggetti a obbligo di pubblicazione ma non pubblicati.",
    "reference": "Art. 5, comma 1, D.Lgs. 33/2013",
    "commonError": "Confonderlo con l'accesso civico generalizzato."
  },
  {
    "id": 27,
    "topic": "TUEL",
    "question": "L'accesso civico generalizzato differisce dall'accesso documentale della L. 241/1990 perché:",
    "options": {
      "A": "Può essere esercitato da chiunque senza motivazione e senza interesse qualificato",
      "B": "Costa molto di più in termini di marche da bollo",
      "C": "Riguarda solo i contratti sopra soglia europea",
      "D": "È riservato esclusivamente ai giornalisti iscritti all'albo"
    },
    "correct": "A",
    "explanation": "L'accesso civico generalizzato permette a chiunque di accedere a dati e documenti detenuti dalla PA, salvo limiti per interessi pubblici e privati protetti.",
    "reference": "Art. 5, comma 2, D.Lgs. 33/2013",
    "commonError": "Dire che serve un interesse diretto come nell'accesso documentale."
  },
  {
    "id": 28,
    "topic": "Legge",
    "question": "Chi è di norma il Responsabile della prevenzione della corruzione e della trasparenza (RPCT) negli enti locali?",
    "options": {
      "A": "Il Segretario dell'ente, salvo diversa motivata determinazione",
      "B": "Il Comandante della Polizia locale",
      "C": "Il candidato che ha preso il punteggio più alto al concorso",
      "D": "Un membro esterno nominato dall'ANAC"
    },
    "correct": "A",
    "explanation": "Negli enti locali il RPCT è normalmente individuato nel Segretario o in una figura apicale, salvo scelta diversa adeguatamente motivata.",
    "reference": "Legge 190/2012",
    "commonError": "Pensare che sia nominato direttamente dall'ANAC."
  },
  {
    "id": 29,
    "topic": "TUEL",
    "question": "Il Piano Integrato di Attività e Organizzazione (PIAO) ha assorbito, tra gli altri:",
    "options": {
      "A": "Il Piano d'azione del Sindaco",
      "B": "Il Piano triennale di prevenzione della corruzione e della trasparenza",
      "C": "Il Codice civile applicato all'ente",
      "D": "Il bilancio dello Stato"
    },
    "correct": "B",
    "explanation": "Il PIAO integra diversi strumenti di programmazione organizzativa, tra cui la sezione relativa a prevenzione corruzione e trasparenza.",
    "reference": "Art. 6 D.L. 80/2021 e normativa attuativa",
    "commonError": "Studiare anticorruzione come se il PTPCT fosse sempre un documento separato dal PIAO."
  },
  {
    "id": 30,
    "topic": "Legge",
    "question": "In caso di commissione di un reato di corruzione all'interno dell'ente, il RPCT risponde salvo che provi:",
    "options": {
      "A": "Di essere stato in ferie quel giorno",
      "B": "Di aver predisposto il piano e vigilato efficacemente sulla sua osservanza",
      "C": "Di non conoscere personalmente il colpevole",
      "D": "Che il danno economico è inferiore a 1.000 euro"
    },
    "correct": "B",
    "explanation": "La responsabilità del RPCT è collegata alla predisposizione e vigilanza sulle misure di prevenzione; può andare esente se prova di avere adempiuto correttamente ai propri compiti.",
    "reference": "Legge 190/2012",
    "commonError": "Pensare che il RPCT risponda automaticamente di ogni illecito o, al contrario, mai."
  },
  {
    "id": 31,
    "topic": "TUEL",
    "question": "Il principio di universalità del bilancio di un ente locale significa che:",
    "options": {
      "A": "Il bilancio deve essere scritto in una lingua comprensibile a tutti",
      "B": "Tutte le entrate e tutte le spese devono essere iscritte in bilancio, evitando gestioni fuori bilancio",
      "C": "Il bilancio è uguale per tutti i comuni del mondo",
      "D": "Le spese possono essere pagate da chiunque nel mondo"
    },
    "correct": "B",
    "explanation": "Universalità significa che tutte le entrate e spese devono transitare nel bilancio dell'ente.",
    "reference": "Art. 162 TUEL",
    "commonError": "Confonderlo con chiarezza o comprensibilità del bilancio."
  },
  {
    "id": 32,
    "topic": "D.Lgs.",
    "question": "Qual è la funzione del Fondo crediti di dubbia esigibilità (FCDE)?",
    "options": {
      "A": "Pagare i premi ai dipendenti del settore finanziario",
      "B": "Accantonare risorse a copertura di entrate di difficile riscossione",
      "C": "Finanziare le spese di rappresentanza del Sindaco",
      "D": "Coprire i costi dei viaggi di istruzione"
    },
    "correct": "B",
    "explanation": "Il FCDE evita che l'ente spenda risorse relative a crediti che potrebbero non essere incassati.",
    "reference": "D.Lgs. 118/2011 e principi contabili; art. 167 TUEL",
    "commonError": "Pensare che sia un fondo liberamente spendibile."
  },
  {
    "id": 33,
    "topic": "TUEL",
    "question": "Ai sensi dell'art. 244 del TUEL, il dissesto finanziario si verifica quando:",
    "options": {
      "A": "Il Sindaco si dimette per motivi politici",
      "B": "L'ente non può garantire funzioni e servizi indispensabili o non può far fronte a debiti liquidi ed esigibili",
      "C": "Il bilancio non viene approvato entro il 31 dicembre",
      "D": "La Provincia decide di non finanziare più un comune"
    },
    "correct": "B",
    "explanation": "Il dissesto è la situazione di crisi finanziaria grave in cui l'ente non riesce a garantire servizi essenziali o a pagare debiti certi, liquidi ed esigibili.",
    "reference": "Art. 244 TUEL",
    "commonError": "Confondere dissesto con semplice ritardo nell'approvazione del bilancio."
  },
  {
    "id": 34,
    "topic": "TUEL",
    "question": "Chi approva il rendiconto della gestione entro il 30 aprile dell'anno successivo?",
    "options": {
      "A": "La Giunta comunale",
      "B": "Il tesoriere dell'ente",
      "C": "Il Consiglio",
      "D": "L'Organismo indipendente di valutazione"
    },
    "correct": "C",
    "explanation": "Il rendiconto è approvato dal Consiglio e dimostra i risultati della gestione dell'esercizio precedente.",
    "reference": "Art. 227 TUEL",
    "commonError": "Dire Giunta: la Giunta predispone lo schema, ma il Consiglio approva."
  },
  {
    "id": 35,
    "topic": "TUEL",
    "question": "Il responsabile del servizio finanziario deve apporre il parere di regolarità contabile:",
    "options": {
      "A": "Su ogni atto del Sindaco, anche se non comporta spesa",
      "B": "Su ogni proposta di deliberazione che comporti riflessi diretti o indiretti sulla situazione economico-finanziaria o patrimoniale dell'ente",
      "C": "Solo sui contratti sopra il milione di euro",
      "D": "Solo se richiesto dall'opposizione"
    },
    "correct": "B",
    "explanation": "Il parere contabile serve a valutare la correttezza dei riflessi finanziari, economici e patrimoniali dell'atto.",
    "reference": "Art. 49 TUEL",
    "commonError": "Pensare che il parere contabile sia sempre necessario anche quando non ci sono riflessi finanziari."
  },
  {
    "id": 36,
    "topic": "TUEL",
    "question": "La fase della spesa con cui si verifica la regolarità della fornitura e si determina la somma certa da pagare si chiama:",
    "options": {
      "A": "Impegno",
      "B": "Liquidazione",
      "C": "Ordinazione",
      "D": "Mandato"
    },
    "correct": "B",
    "explanation": "La liquidazione verifica che la prestazione sia stata eseguita correttamente e determina l'importo certo da pagare.",
    "reference": "Art. 184 TUEL",
    "commonError": "Confondere liquidazione con impegno: l'impegno vincola la somma, la liquidazione verifica e quantifica."
  },
  {
    "id": 37,
    "topic": "TUEL",
    "question": "Quale conseguenza è prevista per chi viola gli obblighi del Codice di comportamento?",
    "options": {
      "A": "Solo un richiamo verbale del Sindaco",
      "B": "La violazione è fonte di responsabilità disciplinare",
      "C": "Una multa da pagare direttamente ai cittadini",
      "D": "Nessuna, il codice ha valore solo morale"
    },
    "correct": "B",
    "explanation": "La violazione del Codice di comportamento può comportare responsabilità disciplinare e, nei casi più gravi, conseguenze rilevanti sul rapporto di lavoro.",
    "reference": "Art. 54 D.Lgs. 165/2001 e DPR 62/2013",
    "commonError": "Considerare il codice come una semplice raccomandazione etica senza effetti disciplinari."
  },
  {
    "id": 38,
    "topic": "TUEL",
    "question": "In un ufficio istruttore, se un cittadino presenta una Segnalazione Certificata di Inizio Attività (SCIA):",
    "options": {
      "A": "Deve attendere 60 giorni prima di iniziare l'attività",
      "B": "Può iniziare l'attività dalla data di presentazione della segnalazione, salvo controlli successivi della PA",
      "C": "Deve ricevere una telefonata di autorizzazione dal dirigente",
      "D": "La SCIA non esiste più, è stata sostituita dal permesso di costruire"
    },
    "correct": "B",
    "explanation": "La SCIA consente l'avvio immediato dell'attività, fermo restando il potere di controllo successivo della PA entro i termini di legge.",
    "reference": "Art. 19 L. 241/1990",
    "commonError": "Trattare la SCIA come una domanda di autorizzazione da attendere."
  },
  {
    "id": 39,
    "topic": "TUEL",
    "question": "Ai sensi dell'art. 13 del TUEL, le funzioni del Comune riguardano:",
    "options": {
      "A": "La difesa nazionale e i confini dello Stato",
      "B": "La gestione della popolazione e del territorio comunale nei settori dei servizi alla persona, assetto del territorio e sviluppo economico",
      "C": "L'emissione di moneta locale",
      "D": "La gestione dei tribunali ordinari"
    },
    "correct": "B",
    "explanation": "Il Comune rappresenta la comunità locale, ne cura gli interessi e ne promuove lo sviluppo, con funzioni che riguardano popolazione, territorio e servizi alla persona.",
    "reference": "Art. 13 TUEL",
    "commonError": "Confondere funzioni comunali con funzioni statali come difesa e giustizia."
  },
  {
    "id": 40,
    "topic": "D.Lgs.",
    "question": "Se un dipendente riceve una segnalazione di illecito da un collega nell'ambito del whistleblowing:",
    "options": {
      "A": "Deve pubblicare il nome del collega sulla bacheca dell'ente",
      "B": "L'identità del segnalante deve essere protetta e non rivelata, salvo casi previsti dalla legge",
      "C": "Deve ignorare la segnalazione se non è firmata con marca da bollo",
      "D": "Deve licenziare immediatamente il segnalante per slealtà"
    },
    "correct": "B",
    "explanation": "La disciplina del whistleblowing tutela chi segnala illeciti conosciuti nel contesto lavorativo e protegge la riservatezza del segnalante contro ritorsioni.",
    "reference": "D.Lgs. 24/2023 e art. 54-bis D.Lgs. 165/2001 per il quadro storico",
    "commonError": "Pensare che il segnalante sia da esporre o penalizzare."
  }
];

const OPEN_QUESTIONS = [
  {
    "id": 1,
    "question": "Spiega la differenza tra la competenza del Consiglio e quella dei dirigenti in materia di contratti.",
    "answer": "Il Consiglio approva gli atti fondamentali e gli indirizzi generali, come regolamenti, bilanci, programmi e alcune convenzioni. I dirigenti curano invece la gestione concreta: determine, procedure di affidamento, stipula dei contratti e atti che impegnano l'ente verso l'esterno. La regola chiave è separazione tra indirizzo politico e gestione amministrativa.",
    "reference": "Art. 42 e 107 TUEL"
  },
  {
    "id": 2,
    "question": "Descrivi le fasi della spesa nell'ordinamento contabile degli enti locali.",
    "answer": "Le fasi principali sono: impegno, liquidazione, ordinazione e pagamento. Con l'impegno si vincola la somma; con la liquidazione si verifica la prestazione e si determina quanto pagare; con l'ordinazione si dispone il mandato; con il pagamento il tesoriere effettua l'uscita di denaro.",
    "reference": "Artt. 182-185 TUEL"
  },
  {
    "id": 3,
    "question": "Cosa si intende per competenza residuale della Giunta?",
    "answer": "Significa che la Giunta compie gli atti di governo che non sono riservati dalla legge al Consiglio e che non spettano al Sindaco/Presidente o ai dirigenti. Non è gestione tecnica, ma funzione di governo dell'ente.",
    "reference": "Art. 48 TUEL"
  },
  {
    "id": 4,
    "question": "Quali sono gli elementi essenziali della motivazione di un provvedimento amministrativo?",
    "answer": "La motivazione deve indicare i presupposti di fatto e le ragioni giuridiche che hanno portato alla decisione. Serve a rendere comprensibile e controllabile l'azione amministrativa.",
    "reference": "Art. 3 L. 241/1990"
  },
  {
    "id": 5,
    "question": "Illustra brevemente l'accesso civico generalizzato.",
    "answer": "È il diritto di chiunque di accedere a dati e documenti detenuti dalla PA, anche se non soggetti a pubblicazione obbligatoria, senza dover dimostrare un interesse diretto. È soggetto a limiti per proteggere interessi pubblici e privati, come privacy, sicurezza e segreti.",
    "reference": "Art. 5, comma 2, D.Lgs. 33/2013"
  },
  {
    "id": 6,
    "question": "Qual è la funzione del RUP nel ciclo di un appalto?",
    "answer": "Il RUP, Responsabile Unico del Progetto, coordina le fasi di programmazione, progettazione, affidamento ed esecuzione del contratto. È il punto di responsabilità procedimentale dell'appalto.",
    "reference": "Art. 15 D.Lgs. 36/2023"
  },
  {
    "id": 7,
    "question": "In quali casi un ente locale può essere dichiarato in dissesto finanziario?",
    "answer": "Quando non può garantire funzioni e servizi indispensabili o non riesce a far fronte validamente ai debiti liquidi ed esigibili. È una situazione di grave crisi finanziaria.",
    "reference": "Art. 244 TUEL"
  },
  {
    "id": 8,
    "question": "Cosa prevede il principio di separazione tra indirizzo politico e gestione amministrativa?",
    "answer": "Gli organi politici definiscono obiettivi, indirizzi e controllo. I dirigenti/responsabili gestiscono concretamente risorse, procedimenti, contratti, atti e provvedimenti. È una garanzia di imparzialità e buon andamento.",
    "reference": "Art. 107 TUEL e D.Lgs. 165/2001"
  },
  {
    "id": 9,
    "question": "Quali sono i doveri minimi del dipendente pubblico previsti dal Codice di comportamento?",
    "answer": "Il dipendente deve agire con imparzialità, diligenza, lealtà, correttezza, trasparenza; deve evitare conflitti di interessi, non accettare regali non consentiti, usare correttamente beni e strumenti dell'ufficio e mantenere un comportamento adeguato con il pubblico.",
    "reference": "DPR 62/2013"
  },
  {
    "id": 10,
    "question": "Descrivi la differenza tra revoca e annullamento d'ufficio.",
    "answer": "L'annullamento d'ufficio elimina un atto illegittimo, cioè viziato. La revoca elimina o modifica un atto valido ma non più opportuno per nuovi motivi di pubblico interesse, mutamento della situazione o nuova valutazione dell'interesse pubblico.",
    "reference": "Artt. 21-quinquies e 21-novies L. 241/1990"
  }
];

const PRACTICAL_CASES = [
  {
    "id": 1,
    "title": "Affidamento diretto",
    "prompt": "Un ufficio provinciale deve acquistare arredi per 15.000 euro. Descrivi l'iter amministrativo corretto.",
    "solution": "Importo sotto soglia: è possibile l'affidamento diretto. L'ufficio definisce fabbisogno e importo, acquisisce eventuale preventivo, verifica requisiti dell'operatore, acquisisce CIG se necessario, adotta determina a contrarre/affidamento con impegno di spesa, poi procede a ordine/contratto ed esecuzione.",
    "reference": "D.Lgs. 36/2023, art. 50; art. 17 D.Lgs. 36/2023; art. 192 TUEL; art. 183 TUEL",
    "commonError": "Saltare l'impegno di spesa o far firmare l'atto all'organo politico invece che al dirigente/responsabile."
  },
  {
    "id": 2,
    "title": "Accesso ai documenti",
    "prompt": "Un cittadino chiede di visionare tutti i messaggi WhatsApp privati tra un istruttore e un fornitore dell'ente. Analizza l'istanza.",
    "solution": "Bisogna qualificare la richiesta: accesso documentale, civico o generalizzato. I messaggi privati non sono automaticamente documenti amministrativi accessibili. Occorre verificare se riguardano attività amministrativa, se sono detenuti dall'ente, se esiste interesse qualificato o diritto di accesso generalizzato e se ci sono limiti per privacy, segreti o interessi pubblici/privati.",
    "reference": "L. 241/1990; D.Lgs. 33/2013; principi privacy",
    "commonError": "Rispondere sì/no in modo automatico senza qualificare il tipo di accesso e bilanciare gli interessi."
  },
  {
    "id": 3,
    "title": "Variazione urgente",
    "prompt": "Si rompe la caldaia di una scuola superiore gestita dalla Provincia e non ci sono fondi sufficienti nel capitolo di manutenzione. Come si procede?",
    "solution": "Se ricorrono urgenza e necessità, può essere proposta una variazione di bilancio. In alcuni casi la Giunta può adottare variazioni d'urgenza, da sottoporre a ratifica del Consiglio nei termini previsti. Poi il dirigente adotta gli atti gestionali: affidamento, impegno di spesa, esecuzione e liquidazione.",
    "reference": "Art. 175 TUEL; artt. 183-184 TUEL; D.Lgs. 36/2023",
    "commonError": "Confondere l'atto politico-contabile di variazione con l'atto gestionale di affidamento."
  },
  {
    "id": 4,
    "title": "Conflitto di interessi",
    "prompt": "Un istruttore scopre che la ditta vincitrice di un affidamento da istruire è di proprietà del coniuge. Cosa deve fare?",
    "solution": "Deve astenersi immediatamente dalla pratica e segnalare il conflitto al dirigente/responsabile. Il procedimento deve essere assegnato ad altro soggetto imparziale. Il conflitto può essere anche potenziale e va gestito prima dell'adozione dell'atto.",
    "reference": "Art. 6-bis L. 241/1990; DPR 62/2013",
    "commonError": "Pensare che il conflitto rilevi solo se c'è un vantaggio economico già dimostrato."
  },
  {
    "id": 5,
    "title": "Ritardo del provvedimento",
    "prompt": "Un utente presenta domanda di autorizzazione il 1 marzo. Il termine è 30 giorni. Al 15 aprile la PA non ha risposto. Quali conseguenze?",
    "solution": "Occorre verificare se il procedimento rientra nel silenzio-assenso o in materie escluse. Il privato può sollecitare l'amministrazione, attivare i rimedi previsti e chiedere tutela. Internamente può emergere responsabilità per ritardo del responsabile del procedimento o dell'ufficio competente.",
    "reference": "Artt. 2 e 20 L. 241/1990",
    "commonError": "Dire sempre che il silenzio vale assenso: bisogna controllare le eccezioni."
  }
];
