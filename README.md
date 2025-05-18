# INTERACTIVE-QUIZ-APPLICATION

*COMPANY*: CODTECH IT SOLUTIONS 

*NAME*: JANAPATI Sandhya 

*INTERN ID*:CT04DL793

*DOMAIN*: FRONT END DEVELOPMENT 

*DURATION*:4 WEEKS 

*MENTOR*:NEELA SANTOSH 

**DESCRIPTION OF MY TASK:The quiz application has HTML, CSS, and vanilla JavaScript in Visual Studio code . Its design philosophy is clarity: instead of distracting timers or flashy animations, the interface focuses on delivering one well-formatted multiple-choice question at a time, letting the learner think at their own pace.

Landing and layout

When index.html loads, the browser paints a soft, powder-blue background that stretches edge to edge. Flexbox utilities in the stylesheet vertically and horizontally center a slim content column so it stays readable on phones, tablets, and desktops alike. The title, “Quiz Application Using JavaScript,” is rendered in a deep navy heading that scales responsively with clamp() so it never crowds smaller screens. Beneath the heading, the active question is displayed in a bold, oversized <h2> element; its center alignment and generous line-height make long prompts effortless to scan.

Question structure

Each quiz item lives in a lightweight JavaScript array called questions. Every object inside that array has three keys: prompt (string), choices (array of four strings), and answer (index of the correct choice). On the first run, the script pulls questions[0] and injects its data into the DOM. Choices are rendered as a semantic unordered list where each <li> wraps an HTML radio input and a <label>. Associating the label with the radio gives a large click-target—important for mobile usability, as shown in the screenshot’s neatly spaced bullet circles.

Interaction model

Because the quiz is strictly linear, there is one persistent Submit button styled as a flat, steel-blue rectangle with white uppercase text. CSS shadows and a :active transform subtly depress the button on tap, providing tactile feedback. Until the learner chooses an option, JavaScript keeps the button disabled to prevent accidental skips; once a radio input registers change, the disabled attribute is removed.

On submission, handleSubmit() records the selected value by pushing an object—question text, chosen answer, and correctness flag—into a userResponses array. The script then increments currentIndex, clears the form, and repopulates it with the next questions[currentIndex]. No page reloads occur; DOM nodes are simply updated, giving the illusion of new pages without the overhead.

End-of-quiz review

After the final question is answered, the quiz card is replaced with a review screen generated entirely on the client. This summary begins with a large score banner: “You got 7 / 10 correct!” beneath which sits a qualitative remark drawn from score thresholds (e.g., “Excellent work,” “Good effort,” “Keep practicing”). Below the banner, an accordion list appears. Each accordion header shows the original prompt and an icon—green tick for correct, red cross for incorrect. Expanding a header reveals the four choices again, with the user’s pick highlighted in blue and the correct answer highlighted in green, enabling quick self-correction.

Responsiveness and accessibility

All text colors meet WCAG AA contrast, radio inputs are keyboard-navigable, and focus states are clearly outlined. Media queries bump font sizes and inflate padding when the viewport exceeds 800 px, ensuring the interface never feels stretched on desktop monitors.

Extensibility

Because logic and data reside in pure JavaScript, extending functionality is straightforward: shuffle the questions array for random order, store userResponses in localStorage for persistence, or export results as JSON. The absence of a timer makes the quiz suitable for formative assessment scenarios where reflection matters more than speed.

In short, this output embodies a clean, distraction-free quiz workflow: one question per view, explicit submission, and a comprehensive review screen, all delivered through a tiny front-end stack that runs anywhere a browser does—no frameworks, databases, or build tools required.
