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
  <a href="/slides-export.pdf" target="_blank" alt="PDF"
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
- Mitgründer der Apptiva AG und Botfabrik

---

# Beispiele von Chatbots

Wie unterscheiden sich diese Chatbots?

- [Post](https://www.post.ch/de/hilfe-und-kontakt)
- [Postfinance](https://www.postfinance.ch/de/support.html)
- [Swica](https://www.swica.ch)
- [Selma](https://app.selma.com/de/signup)
- [Geschenkidee.ch](https://www.geschenkidee.ch/donregalo)
- [ChatGPT](https://chat.openai.com/)

<!-- 
- Wer kennt noch weitere Beispiele?
- Schaut euch diese 5min an, um einen Eindruck der heutigen Chatbots zu erhalten 
-->

---

# Was ist ein Bot?

<v-clicks>

- Ein Programm, dass eine Aufgabe selbständig ausführt
- Ist lernfähig
- Ist intelligent (?)
- Findet eine Konversation statt, so wird von Chatbots gesprochen

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
- Smartphone ist das meistgenutzte Medium
- Messaging ist die wichtigste App auf dem Smartphone
- Chatbots sind dort wo die Nutzer sind
- GPT wurde erst mit dem Chat-interface extrem erfolgreich
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

Was macht einen gute Chatbot aus

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

# Kurze Vorstellung des Chatbots

- Kategorisiert nach Eigenschaften
- Bewertet nach Kriterien

(3min je Gruppe)

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

- Bots sind super einfach zu bedienen
- Können das Gespräch aktiv wieder aufnehmen
- Geben nicht bloss Antwort, sondern führen Aktionen aus
- Die persönlichste Form der Interaktion mit einer Maschine
- Bots haben Persönlichkeit
- Möglichkeit zu lernen was die Besucher wollen
- Entwicklungsaufwand hält sich in Grenzen

</v-clicks>

---

# Funktionsumfang von Chatbots

<v-clicks>

- Natürliche Sprachverarbeitung
- Antworten generieren
- Dialogmanagement
- Umsysteme integrieren
  - Bessere Antworten generieren wie z.B. Status einer Bestellung abfragen
  - Aktionen ausführen wie z.B. Produktbestellung, Buchungen oder Terminvereinbarungen
- Notifikationen senden

</v-clicks>

---
layout: two-cols-header
---

# Gesprächstypen (Interaktionsstile) von Chatbots (1/2)

## Strukturierte / eingeschränkte Chatbots

:: left ::

- Beschränken die Antworten auf einen vordefinierten Satz von Optionen
- Optionen als Liste von Multiple-Choice-Fragen
- Benutzer wählen eine der vorgegebenen Optionen aus
- Antworten basieren auf den ausgewählten Optionen und erfordern kein NLP
- Nuten Logik (z.B. Workflows) um den Ablauf zu definieren

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
- Nutzen NLP/NLU (Natural Language Processing/Understanding)

</v-clicks>

:: right ::

<img src="/open.excalidraw.svg" class="mx-10 rounded"/>
<div class="h-40"></div>

---

# NLP/NLU

NLP (Natural Language Processing/Understanding) basiert auf Absichten und Entitäten (Intents und Entities) oder einem General Pre-trained Transformer / Large Language Model

## Absichtserkennung

Freitext -> Absicht zuweisen (z.B. "Will ne Pizza" -> Absicht: Pizza bestellen)

## Erkennen von Entitäten

Freitext -> Entitäten im Text extrahieren (z.B. "Will ne Proscuto" -> "Will ne {Entität: Pizza Prosciutto}")

## GPT/LLM

Freitext -> Das wahrscheinlichste nächste Token (mit etwas Zufall) ermitteln. Den neuen Text nehmen und das wahrscheinlichste nächste Token ermitteln, usw.

<!--
Bessere Darstellung
-->

---

# Gegenüberstellung der Technologien

|  | **Workflow** | **Absichtserkennung** | **Large Language Model** |
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
- Verwende min. eine Absicht mit einer Entität
- Baut den Chatbot (15min)
- Fragen, Austausch
- Einige Gruppe stellen ihren Chatbot vor

---

# Bau einen strukturierten Chatbot

[www.landbot.io](https://app.landbot.io/signup/)

- Definiert das Ziel eures Chatbots bevor ihr mit dem Bauen beginnt
- Verwende min. die Funktion um Email zu versenden
- Baut den Chatbot (15min)
- Fragen, Austausch
- Einige Gruppe stellen ihren Chatbot vor

---

# Zusammenfassung

<v-clicks>

- Chatbots gehören zu den einfachsten UIs
- Chatbots können auf vielen Kanälen aktiv sein
- Chatbots führen Konversationen und lösen Aktionen aus
- Es gibt strukturierte und offene Chatbots
- Je nach Anforderung, die richtige Technologie nutzen
- "Intelligente" Chatbots setzen NLP (Natürliche Sprachverarbeitung) ein

</v-clicks>

---
layout: center
class: text-center
---

# Fragen?
