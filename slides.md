---
# try also 'default' to start simple
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
# use UnoCSS
css: unocss
download: true
---

# Chatbots

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Space-Taste für die nächste Seite <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-tl m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Im Editor öffnen" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/philschonholzer/chatbot-vorlesung" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
  <a href="/slidev-exported.pdf" target="_blank" alt="PDF"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:document-pdf />
  </a>
</div>

<img src="/bot.png" class="absolute bottom-9 right-7 w-60" />

---

# Philip Schönholzer

Über mich

- Wohne in Luzern
- Kommunikation und Informatik
- Requirements Engineering & Interaction Design
- Mitgründer der Apptiva AG
- Entwickeln Chatbots seit 2016

---

# Beispiele von Chatbots

Worin unterscheiden sich diese Chatbots?

- [Post](https://www.post.ch/de/hilfe-und-kontakt)
- [Postfinance](https://www.postfinance.ch/de/support.html)
- [Swica](https://www.swica.ch)
- [Selma](https://app.selma.com/de/signup) (Fake Email eingeben)
- [Geschenkidee.ch](https://www.geschenkidee.ch/donregalo)
- [ChatGPT](https://chat.openai.com/)

<!-- 
- Wer kennt noch weitere Beispiele?
- Schaut euch diese 5min an, um einen Eindruck von einigen Chatbots zu erhalten 
-->

---

# Was ist ein Bot?

<v-clicks>

- Ein Programm, das selbstständig eine Aufgabe ausführt.
- lernfähig ist
- intelligent ist (?)
- Wenn eine Konversation stattfindet, spricht man von Chatbots.

</v-clicks>

---

# Warum Chatbots einsetzen?

- Smartphone ist das meistgenutzte Medium
- Messaging ist die wichtigste App auf dem Smartphone
- Chatbots sind dort wo die Nutzer sind

<div class="flex gap-4 mt-10">
  <img src="/mediennutzung.jpg" class="h-60 rounded shadow"/>
  <img src="/aktivitaeten.jpg" class="h-60 rounded shadow"/>
</div>

<!-- 
Warum kein Formular, App, Webseite usw?
- Smartphone ist das meistgenutzte Medium
- Messaging ist die wichtigste App auf dem Smartphone
- Chatbots sind dort wo die Nutzer sind
- GPT wurde erst mit dem Chat-Interface extrem erfolgreich
 -->

---
layout: two-cols
---

## Eigenschaften

Kategorisieren, ohne zu werten

- Gibt sich als Mensch / Bot aus
- Sachlich / Witzig
- ...

::right::

## Bewertungskriterien

Was macht einen guten Chatbot aus?

- Zielerreichung
- Einfachheit
- ...

<!-- 
- Eigenschaften
  - Bot führt / Besucher führt
  - Freitext / Fixe Antworten
  - FAQ / Assistent
  - einem / mehrere Kanäle
  - Nur Text / Bilder, Ton, Video
  - kleiner / grosser Umfang
  - eine Sprache / mehrere Sprachen
  
- Bewertungskriterien
  - Absichten korrekt verstanden
  - Funktionen sind klar
  - Fallback
  - Chatbot Challenge
  - ROI für das Unternehmen

- Weiter
  - Kategorisiert und Bewertet den Chatbot (Zweiergruppe)
  - 3min vorstellen
 -->

---


# Einsatzmöglichkeiten von Chatbots

Wofür setzten man Chatbots heute ein

<v-clicks>

- Produktivität (NEU)
  - Erstellung von Inhalten
  - Code schreiben
- Lernen (NEU)
  - Wissen erarbeiten
  - Recherchieren
- Kundendienst
- E-Commerce
- Marketing

</v-clicks>

---

# Kanäle von Chatbots

Auf was für Kanälen können Chatbots kommunizieren?

- Web
- WhatsApp
- Facebook Messenger
- Skype
- Skype for Business
- Slack
- Telegram
- Weitere exotische Messenger-Dienste

---

# Vorteile von Chatbots

Was haben Chatbots für Vorteile gegenüber anderen interaktiven Medien

<v-clicks>

- Bots sind sehr einfach zu bedienen
- Können die Konversation aktiv wieder aufnehmen
- Antworten nicht nur, sondern führen Aktionen aus
- Persönlichste Form der Interaktion mit einer Maschine
- Bots haben Persönlichkeit
- Lernen, was die Besucher wollen
- Der Entwicklungsaufwand hält sich in Grenzen

</v-clicks>

---

# Funktionsumfang von Chatbots

<v-clicks>

- Natürliche Sprachverarbeitung
- Antworten generieren
- Dialogmanagement
- Umsysteme integrieren
  - Bessere Antworten generieren wie z.B. Status einer Bestellung abfragen
  - Ausführen von Aktionen wie Produktbestellungen, Buchungen oder Terminvereinbarungen
- Benachrichtigungen versenden

</v-clicks>

---
layout: two-cols-header
---

# Gesprächstypen (Interaktionsstile) von Chatbots (1/2)

## Strukturierte / eingeschränkte Chatbots

:: left ::

- Beschränken die möglichen Antworten auf einen vordefinierten Satz von Optionen
- Optionen als Liste von Multiple-Choice-Fragen
- Benutzer wählen eine der vorgegebenen Optionen aus
- Antworten basieren auf den gewählten Optionen und erfordern kein NLP
- Verwendet Logik (z.B. Workflows) zur Definition des Prozesses

:: right ::

<img src="/workflow.excalidraw.svg" class="ml-10 rounded"/>

---
layout: two-cols-header
---

# Gesprächstypen (Interaktionsstile) von Chatbots (2/2)

## Offener / hybrider Chatbot

:: left::

<v-clicks>

- Erlaubt die Eingabe von Freitext
- Versucht den Text zu interpretieren
- Generiert Antworten aufgrund der Interpretation
- Die Leitung des Gesprächs grösstenteils bei den Nutzern
- Nutzt NLP/NLU (Natural Language Processing/Understanding)

</v-clicks>

:: right ::

<img src="/open.excalidraw.svg" class="mx-10 rounded"/>
<div class="h-40"></div>

---

# NLP/NLU

NLP (Natural Language Processing/Understanding) kann durch verschiedene Ansätze oder Kombinationen von Ansätzen erreicht werden. Derzeit sind folgende Ansätze verbreitet:

## Absichtserkennung

Freitext -> Absicht zuweisen (z.B. "Will ne Pizza" -> Absicht: Pizza bestellen)

### Optional Entitäten erkennen

Freitext -> Zusätzlich Entitäten extrahieren (z.B. "Will ne Proscuto" -> "Will ne {Entität: Pizza Prosciutto}")

## Wissensabruf-unterstützte Generierung (RAG)

Freitext -> Daten aus einer externen Quelle verwenden, um Antworten mit einem Large language model (LLM) zu generieren.

<!--
Bessere Darstellung
-->

---

# Wissensabruf-unterstützte Generierung (RAG)

Retrieval-Augmented Generation (RAG) ist ein Ansatz in der natürlichen Sprachverarbeitung (NLP), der zwei Techniken kombiniert: Information Retrieval (Abruf von Informationen) und Textgenerierung. Der Hauptvorteil von RAG liegt darin, dass es Modelle, wie z.B. GPT, dabei unterstützt, präzisere und aktuellere Antworten zu generieren, indem es auf externe Wissensquellen zugreift, anstatt sich nur auf vortrainierte Daten zu verlassen.

<img src="/rag.jpg" class="h-72"/>
<small class="opacity-40">Quelle: AWS</small>

---

# Techniken kombinieren

<img src="/hybrid.svg" class="h-96"/>
<p><small class="opacity-40">Quelle: Bubble Chat</small></p>
<!--
Bessere Darstellung
-->

---

# Gegenüberstellung der Technologien / Ansätze

|  | **Workflow** | **Absichtserkennung** | **LLM / RAG** |
| -------- | -------- | -------- | -------- |
| Gesprächstypen | Strukturiert | Offen | Offen  |
| Leitung des Gesprächs   | Chatbot   | Benutzer   | Benutzer   |
| Beste Eignung  | - Bestellprozess<br>- Lead-Generierung   | - FAQ<br>- Verkauf   | - FAQ<br>- Lernen<br>- Erhöhung Produktivität   |
| "Korrektheit"   | Fehlerlos   | Kann Absicht <br>falsch interpretieren   | Kann halluzinieren   |
| Pflege   | Manuell, bei Änderung   | Regelmässig trainieren   | Dokumente aktuell halten  |

<!--
- Freitext eignet sich um FAQs zu beantworten oder wenn der Anwender die Leitung des Gesprächs hat
- Freitext wird vor allem zum Lernen, zur Erhöhung der Produktivität und im Kundensupport eingesetzt
- Klick eignet sich wenn der Chatbot die Leitung des Gespräches hat
- Klick wird vor allem für die Lead-Generierung und Verkauf eingesetzt
-->

---

# Technologien für Absichts- und Entitäten-Erkennung

- Dialogflow (Google)
- Watson (IBM)
- LUIS (Microsoft)
- Wit.ai (Facebook)
- Lex (Amazon)
- Rasa (Open Source)

---

# Aktuelle LLMs

- GPT-4 (OpenAI)
- Claude 2 (Anthropic)
- Cohere
- LaMDA (Google Bard)
- PaLM (Google Generative)
- Llama2 (Meta)

---
layout: two-cols-header
---

# "Schlüsselfertige" Chatbot Lösungen für ein Produkt oder eine Webseite

:: left::

## Strukturierte Chatbots

- Landbot
- aiaibot

<div class="h-60"></div>

::right ::

## Offene Chatbots

- Bubble Chat
- Moin.ai
- Tars

---

# Bau einen offene Chatbot

Ihr benötigt einen Google Account

[dialogflow.cloud.google.com](https://dialogflow.cloud.google.com/)

- Definiert das Ziel eures Chatbots bevor ihr mit dem Bauen beginnt
- FAQ Chatbots sind am einfachsten in dieser kurzen Zeit zu bauen (Konversationen sind am schwierigsten)
- Baut den Chatbot (15min)
- Fragen, Austausch
- Einige Gruppe stellen ihren Chatbot vor

---

# Bau einen strukturierten Chatbot

[www.landbot.io](https://app.landbot.io/signup/)

- Definiere das Ziel deines Chatbots bevor du mit dem Bau beginnst.
- Nutzt mindestens die Funktion zum Versenden von E-Mails.
- Baut den Chatbot (15min)
- Fragen, Austausch
- Einige Gruppen präsentieren ihren Chatbot

---

# Zusammenfassung

<v-clicks>

- Chatbots gehören zu den einfachsten UIs
- Chatbots können in vielen Kanälen aktiv sein
- Chatbots führen Gespräche und lösen Aktionen aus
- Es gibt strukturierte und offene Chatbots
- Je nach Anforderung die richtige Technologie einsetzen
- Intelligente" Chatbots nutzen NLP (Natural Language Processing)

</v-clicks>

---
layout: center
class: text-center
---

# Fragen?
