// ======================
// 1. CONFIG / KNOWLEDGE
// ======================

// Εδώ βάζουμε "γνώση" για το Laser και την εκπαίδευση.
// Κάθε αντικείμενο έχει keywords (λέξεις-κλειδιά) και απάντηση.
const KNOWLEDGE_BASE = [
  {
    keywords: ["πότζα", "ποτζα", "ποτζα?", "πως κανω ποτζα", "πως να κανω ποτζα", "gybe", "gybing"],
    answer: `Πότζα = στρίβω ΜΑΚΡΙΑ από τον άνεμο (πρύμα).
Βήματα πότζας στο Laser:
1. Φερμάρω το πανί (το μαζεύω προς τη μέση του σκάφους).
2. Ποδίζω: τραβάω το τιμόνι προς το μέρος μου, άρα η πρύμη πάει προς τον άνεμο.
3. Όταν το πανί θέλει να αλλάξει πλευρά, τραβάω τη σκότα μια φορά απότομα για να περάσει ελεγχόμενα.
4. Περνάω στην άλλη μεριά του σκάφους ΚΟΝΤΑ στο τιμόνι και κοιτάω πάντα μπροστά.
5. Κάθομαι από την καινούργια πλευρά, αλλάζω πλευρά στη σκότα και στο τιμόνι.
6. Ελέγχω την πλεύση μου (είμαι πλέον σε νέα πλαγιοδρομία / πρύμα).`
  },
  {
    keywords: ["τακ", "tack", "τακ?", "πως κανω τακ", "πως να κανω τακ", "στρίψω κόντρα", "όρτσα", "ορτσαρω"],
    answer: `Τακ = στρίβω ΠΡΟΣ τον άνεμο (όρτσα).
Βήματα για τακ στο Laser:
1. Πιέζω τιμόνι προς τον άνεμο για να αρχίσει η στροφή.
2. Γέρνω μπροστά και περνάω γρήγορα στην άλλη πλευρά ΚΟΝΤΑ στο τιμόνι, πάντα κοιτώντας μπροστά.
3. Αλλάζω χέρι στο τιμόνι και χέρι στη σκότα (τα αλλάζω πλευρά).
4. Κάθομαι από την καινούργια πλευρά, ισιώνω το σκάφος.
5. Ρυθμίζω ξανά το πανί για τη νέα πλεύση.`
  },
  {
    keywords: ["πλεύσεις", "πλευσεις", "πλευση", "βορείου", "πλαγιοδρομια", "πλ", "όρτσα", "πρίμα", "πρυμα", "όρτσα πρύμα", "ποια ειναι οι πλεύσεις"],
    answer: `Βασικές πλεύσεις ιστιοπλοΐας (Laser):
• Όρτσα: πλέω σχεδόν κόντρα στον άνεμο.
• Όρτσα-πλαγιοδρομία: λίγο πιο "ανοιχτά" από την όρτσα.
• Πλαγιοδρομία: ο άνεμος από το πλάι.
• Πλαγιοδρομία ανοικτή: πιο πίσω από το πλάι.
• Πρίμα / Πρύμα: ο άνεμος έρχεται από πίσω.
ΣΗΜΑΝΤΙΚΟ: Δεν μπορούμε να πάμε ακριβώς κόντρα στον άνεμο, κάνουμε πλεύσεις ζιγκ-ζαγκ με τακ.`
  },
  {
    keywords: ["μέρη", "μερη", "ονoματολογια", "κορφή", "τιμόνι", "σκάφος laser", "laser parts", "μέρη του laser", "ονματολογία σκαφους"],
    answer: `Κύρια μέρη του Laser:
1. Πανί (ιστίο) – έχει κορφή (head), tack, clew.
2. Κατάρτι (μάτσα) – το κάθετο "μπαστούνι" που κρατάει το πανί.
3. Μπάντα / boom – η οριζόντια δοκός που κρατάει τη βάση του πανιού.
4. Σκάφος / γάστρα – το "καράβι" που κάθεσαι.
5. Τιμόνι / πηδάλιο – για να στρίβεις.
6. Σκάφος έχει πλώρη (μπροστά), πρύμνη (πίσω).
7. Σκότα – το σχοινί που τραβάς/αφήνεις για να ανοίξεις ή να κλείσεις το πανί.
8. Cunningham, outhaul, vang/boom vang – ρυθμίσεις που τεντώνουν το πανί.
Αυτά τα ξέρεις και σαν νούμερα στο σχεδιάγραμμα του Laser.`
  },
  {
    keywords: ["σκότα", "σκοτα", "τι ειναι η σκοτα", "σχοινί πανιού", "σκοτα τι ειναι"],
    answer: `Η σκότα είναι το βασικό σχοινί με το οποίο ελέγχεις το πανί του Laser.
– Τραβάς σκότα = κλείνεις το πανί (πιο μέσα).
– Αφήνεις σκότα = ανοίγεις το πανί (πιο έξω).
Στην πότζα πρέπει να μαζέψεις σκότα για να αλλάξει πλευρά το πανί ελεγχόμενα.`
  },
  {
    keywords: ["καντιλίτσα", "καντιλιτσα", "καντηλίτσα", "kandilitsa", "κάντιλίτσα", "κόμπος", "δεσιμο σκοινιου στη λασκα", "κομποι", "κόμποι", "κόμπο"],
    answer: `Καντιλίτσα (flemish / figure-eight stopper):
– Είναι βασικός ναυτικός κόμπος που μπαίνει στην άκρη του σκοινιού.
– Δεν λύνει μόνος του.
– Τον χρησιμοποιούμε για να μη φύγει το σχοινί από τα ρέλια/τροχαλίες.
Στο Laser όλα τα σημαντικά σχοινιά πρέπει να έχουν σωστό κόμπο στην άκρη.`
  },
  {
    keywords: ["σταυροκομπος", "σταυρόκομπος", "σταυροκόμπος", "δεσιμο μαζι", "δεσιμο δυο σκοινια", "ενωνω σκοινια"],
    answer: `Σταυρόκομπος:
– Χρησιμοποιείται για να ενώσουμε δύο σχοινιά (πρόχειρα).
– Λύνεται εύκολα μετά.
– Είναι βολικός για προσωρινές λύσεις στο σκάφος.`
  },
  {
    keywords: ["ασφάλεια", "κανόνες", "κανoνες", "τι πρεπει να κανω", "τι πρεπει να φερω", "τι να φερω", "να παρω μαζι μου", "πριν την προπονηση", "πριν το μαθημα"],
    answer: `Κανόνες συμμετοχής και προπόνησης Laser:
1. Έρχομαι στην ώρα μου.
2. Έχω δεύτερα ρούχα και πετσέτα για μετά (μπορεί να βραχώ).
3. Το καλοκαίρι: καπέλο και αντηλιακό. Το χειμώνα: στολή/ρούχα για κρύο και σπρέι/αντιανεμικό.
4. Δεν φέρνω ακριβά πράγματα (κινητά, λεφτά) στο φουσκωτό/σκάφος χωρίς λόγο.
5. Αν φοράω γυαλιά, τα ασφαλίζω με λουράκι για να μην τα χάσω.
6. Συνεργαζόμαστε μετά την προπόνηση: βγάζουμε μαζί σκάφος και εξοπλισμό από το νερό και τακτοποιούμε.
7. Οι πληρωμές γίνονται στο πρώτο δεκαήμερο κάθε μήνα.
8. Αν έχω απορίες για το άθλημα, ρωτάω τον εκπαιδευτή μου – δεν ντρέπομαι, δεν υπάρχει "χαζή ερώτηση".`
  },
  {
    keywords: ["ποιος ειναι ο προπονητης", "εκπαιδευτής", "προπονητης", "ποιος κανει μαθημα", "δασκαλος", "laser προπονητης"],
    answer: `Στο φυλλάδιο που έδειξες γράφει:
ΕΚΠΑΙΔΕΥΤΗΣ: ΔΗΜΗΤΡΗΣ ΓΑΣΠΑΡΙΝΑΤΟΣ.
(Αν έχει αλλάξει στο μεταξύ στην πραγματική σχολή σου, ρώτα κατευθείαν στον Όμιλο.)`
  },
  {
    keywords: ["ανεμολογιο", "ανεμολόγιο", "ανεμος", "δεξι", "βορειας", "τραμουντάνα", "τραμουντανα", "καιροι", "μποφωρ", "μποφόρ", "εντασεις ανεμου", "μποφορ", "ανεμου ενταση"],
    answer: `Ανεμολόγιο / Άνεμοι / Μποφόρ:
– Το ανεμολόγιο είναι ένας κύκλος 360° που δείχνει ονόματα ανέμων για κάθε διεύθυνση.
Παραδείγματα:
• Βόρειος άνεμος = βοριάς, τραμουντάνα.
• Νότιος = νοτιάς.
• Δυτικός = πονέντες.
• Ανατολικός = λεβάντες.
Κλίμακα Μποφόρ (ένταση ανέμου):
1-2 μποφόρ: πολύ ασθενής-ασθενής, μικρό κύμα.
3-4 μποφόρ: μέτριος έως ισχυρός, αρχίζουν πιο σοβαρά κύματα.
5+ μποφόρ: δυνατός αέρας, χρειάζεται εμπειρία & ασφάλεια.
Σε μεγάλες εντάσεις φροντίζουμε να είμαστε ΠΑΝΤΑ με σωστό εξοπλισμό και να ακούμε τον προπονητή.`
  }
];

// fallback απάντηση αν δεν βρίσκει κάτι σχετικό
const FALLBACK_ANSWER = `Δεν είμαι σίγουρο bot για αυτό 🤔
Μπορείς να ρωτήσεις για:
• Πότζα / Τακ
• Πλεύσεις (όρτσα, πλαγιοδρομία, πρύμα)
• Σκότα, τιμόνι, εξοπλισμό Laser
• Κόμπους (καντιλίτσα, σταυρόκομπος)
• Κανόνες προπόνησης / ασφάλεια
• Άνεμο / μποφόρ / ανεμολόγιο

Ή ρώτα τον προπονητή σου επιτόπου 😎`;

// Μικρή helper συνάρτηση για να βρούμε απάντηση
function getAnswerForQuestion(userText) {
  const cleaned = userText.toLowerCase();

  for (const item of KNOWLEDGE_BASE) {
    for (const kw of item.keywords) {
      if (cleaned.includes(kw.toLowerCase())) {
        return item.answer;
      }
    }
  }

  // ειδική λογική: αν είναι πολύ γενικό τύπου "τι ειναι ποτζα"
  if (cleaned.includes("τι ειναι") || cleaned.includes("τι είναι")) {
    // δοκίμασε να βρεις λέξη-κλειδί μετά το "τι είναι"
    for (const item of KNOWLEDGE_BASE) {
      for (const kw of item.keywords) {
        if (cleaned.includes(kw.toLowerCase())) {
          return item.answer;
        }
      }
    }
  }

  return FALLBACK_ANSWER;
}


// ======================
// 2. UI CREATION (κουμπί + παράθυρο)
// ======================

// Φτιάχνουμε CSS δυναμικά ώστε να ΜΗΝ χρειάζεται να πειράξεις το index2.html <head>
const styleEl = document.createElement("style");
styleEl.textContent = `
  /* Floating chat button */
  #chat-toggle {
    position: fixed;
    right: 20px;
    bottom: 20px;
    width: 72px;
    height: 72px;

    background-image: url('laser-icon.png'); /* Βάλε εδώ το αρχείο εικόνας Laser */
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    border: 2px solid #001a4d;
    border-radius: 8px; /* όχι κύκλος, πιο πολύ σαν αυτοκόλλητο */
    background-color: #fff;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0,0,0,0.25);
    transition: transform 0.15s ease, box-shadow 0.15s ease;
    z-index: 9999;
  }

  #chat-toggle:hover {
    transform: scale(1.07);
    box-shadow: 0 6px 16px rgba(0,0,0,0.3);
  }

  /* Παράθυρο chat */
  #chat-window {
    position: fixed;
    right: 20px;
    bottom: 100px;
    width: 320px;
    max-height: 420px;

    background: #ffffff;
    border: 2px solid #001a4d;
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.3);

    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    z-index: 9999;
  }

  #chat-window.hidden {
    display: none;
  }

  .chat-header {
    background: linear-gradient(to right, #001a4d, #002d80);
    color: #fff;
    font-weight: 600;
    font-size: 14px;
    padding: 10px 12px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .chat-header button {
    background: transparent;
    border: none;
    color: #fff;
    font-size: 16px;
    line-height: 1;
    cursor: pointer;
  }

  .chat-messages {
    flex: 1;
    background: #f8f9fa;
    padding: 10px;
    overflow-y: auto;
    font-size: 14px;
    line-height: 1.4;
  }

  .message-bubble {
    border: 1px solid #001a4d44;
    border-radius: 4px;
    padding: 8px 10px;
    margin-bottom: 8px;
    white-space: pre-line;
  }

  .message-bubble.bot {
    background: #eef5ff;
    border-color: #001a4d66;
  }

  .message-bubble.user {
    background: #eaffea;
    border-color: #3a7d00;
  }

  .bubble-label {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 4px;
    color: #001a4d;
  }

  .chat-input-area {
    display: flex;
    border-top: 1px solid #d0d4dc;
    background: #ffffff;
  }

  #chat-input {
    flex: 1;
    border: 0;
    padding: 10px;
    font-size: 14px;
    outline: none;
  }

  #chat-send {
    background: #002d80;
    color: #fff;
    border: 0;
    padding: 0 14px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
  }

  #chat-send:hover {
    background: #001a4d;
  }
`;
document.head.appendChild(styleEl);

// Φτιάχνουμε το κουμπί
const toggleBtn = document.createElement("div");
toggleBtn.id = "chat-toggle";
document.body.appendChild(toggleBtn);

// Φτιάχνουμε το παράθυρο chat
const chatWindow = document.createElement("div");
chatWindow.id = "chat-window";
chatWindow.classList.add("hidden");

chatWindow.innerHTML = `
  <div class="chat-header">
    <span>Βοηθός Laser NOTK</span>
    <button id="chat-close">×</button>
  </div>

  <div class="chat-messages" id="chat-messages"></div>

  <div class="chat-input-area">
    <input
      type="text"
      id="chat-input"
      placeholder="Γράψε την ερώτησή σου..."
    />
    <button id="chat-send">Send</button>
  </div>
`;

document.body.appendChild(chatWindow);

// ======================
// 3. CHAT LOGIC
// ======================

const messagesEl = chatWindow.querySelector("#chat-messages");
const inputEl = chatWindow.querySelector("#chat-input");
const sendBtn = chatWindow.querySelector("#chat-send");
const closeBtn = chatWindow.querySelector("#chat-close");

// helper: προσθέτει ένα bubble στο παράθυρο
function addMessageBubble(text, sender = "bot") {
  const bubble = document.createElement("div");
  bubble.classList.add("message-bubble", sender === "user" ? "user" : "bot");

  const label = document.createElement("div");
  label.classList.add("bubble-label");
  label.textContent = sender === "user" ? "Εσύ" : "Βοηθός";

  const body = document.createElement("div");
  body.classList.add("bubble-body");
  body.textContent = text;

  bubble.appendChild(label);
  bubble.appendChild(body);

  messagesEl.appendChild(bubble);

  // scroll στο τέλος
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

// αρχικό μήνυμα όταν ανοίγει το chat πρώτη φορά
let firstOpen = true;
function showWelcomeIfNeeded() {
  if (!firstOpen) return;
  firstOpen = false;
  addMessageBubble(
    `Καλή ερώτηση! Είμαι ο βοηθός Laser του Ομίλου.

Μπορείς να με ρωτήσεις πράγματα όπως:
• Πότζα / Τακ — τι είναι και πώς γίνονται
• Πλεύσεις (όρτσα, πλαγιοδρομία, πρύμα)
• Σκότα, τιμόνι, εξοπλισμός Laser
• Κόμποι (καντιλίτσα, σταυρόκομπος)
• Ασφάλεια στην προπόνηση
• Άνεμος, μποφόρ, ανεμολόγιο

Ρώτα με κάτι σχετικό 😊`
  );
}

// στέλνεις μήνυμα
function handleSend() {
  const userText = inputEl.value.trim();
  if (!userText) return;

  // Δείξε το μήνυμα του χρήστη
  addMessageBubble(userText, "user");

  // Φέρε απάντηση
  const botReply = getAnswerForQuestion(userText);

  // Δείξε απάντηση bot
  addMessageBubble(botReply, "bot");

  // καθάρισε input
  inputEl.value = "";
  inputEl.focus();
}

// toggle κουμπί -> άνοιγμα/κλείσιμο
toggleBtn.addEventListener("click", () => {
  const isHidden = chatWindow.classList.contains("hidden");
  if (isHidden) {
    chatWindow.classList.remove("hidden");
    showWelcomeIfNeeded();
    inputEl.focus();
  } else {
    chatWindow.classList.add("hidden");
  }
});

// κουμπί Χ
closeBtn.addEventListener("click", () => {
  chatWindow.classList.add("hidden");
});

// send button
sendBtn.addEventListener("click", handleSend);

// enter στο input
inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleSend();
  }
});
// === ΔΥΝΑΜΙΚΗ ΑΛΛΑΓΗ ΓΛΩΣΣΑΣ ΑΠΟ ΤΟ i18n ===
window.setChatLanguage = function(lang) {
  if (typeof applyChatUiLanguage === "function") {
    applyChatUiLanguage(lang); // ενημερώνει το UI του chat
  }
};