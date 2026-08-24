import type { LegalDoc } from "./types";

/**
 * Supplied client wording, reproduced as close to verbatim as the renderer
 * allows. Three deliberate deviations, all noted so they can be reversed if the
 * client prefers the original:
 *
 *  - The client asked for every date in both legal documents to read 10/8/2026,
 *    so the "Last Revised" line says that rather than the supplied 20/02/2022.
 *
 *  - The document the client supplied is headed "Peekaboo terms of use" even
 *    though its body is the privacy policy. The page keeps "Privacy Policy" as
 *    its title so it agrees with the footer link and the sibling terms page.
 *  - The supplied text uses the heading "How we secure, store and retain your
 *    data." twice; the second occurrence covers deletion requests, so it is
 *    titled "How you can access, update or delete your data." here.
 *
 * Do not paraphrase this copy. Any change should come from the client.
 */

export const privacyEn: LegalDoc = {
  title: "Privacy Policy",
  lastUpdated: "Last updated on August 10, 2026.",
  sections: [
    {
      heading: "For Cookies",
      blocks: [
        {
          type: "p",
          text: "We use tools, such as cookies, to enable essential services and functionality on our site and mobile apps and to collect data on how visitors interact with our site, products and services. By clicking Accept, you agree to our use of these tools for advertising, analytics and support.",
        },
      ],
    },
    {
      heading: "Privacy Policy",
      blocks: [
        { type: "h3", text: "PeekabooEdu — PRIVACY POLICY" },
        { type: "p", text: "Last Revised: 10/8/2026" },
        {
          type: "p",
          text: 'Your privacy is highly important to PeekabooEdu. As a result, we only collect and use personal information as needed to deliver our products, services, websites, and mobile applications, as well as to communicate with you about them (collectively, our "Services"). The personal information gathered relates to your interactions with our site features or mobile app features inside the Services; Internet Protocol (IP) address, to determine your language preference; browser type the date and time the Services were used; device type and settings; operating system used; application IDs, unique device identifiers; and error data. These technologies also collect data such as metadata, log files, page load time, and server response time to optimize DNS resolution, network routing, and server settings to monitor website performance and enhance our systems.',
        },
        {
          type: "p",
          text: "Other information, not collected by PeekabooEdu, rather input by schools, nurseries, students, parents or any other user as “Users” on PeekabooEdu, may contain:",
        },
        {
          type: "ul",
          items: [
            "Name",
            "Address",
            "Social Security number",
            "Telephone number",
            "Date of birth",
            "Email address",
            "Billing and payment information",
            "Other data collected that could directly or indirectly identify you.",
          ],
        },
        {
          type: "p",
          text: "Our Privacy Policy describes not only how and why we collect and use your personal information, but also how you can view, update, or otherwise manage your personal information.",
        },
      ],
    },
    {
      heading: "What information do we gather, how do we collect it, and why do we collect it?",
      blocks: [
        {
          type: "p",
          text: "Much of what you could consider personal information is acquired directly from you or your nursery management when you create an account for yourself or register for the Peekabooedu.com or PeekabooCare App.",
        },
        {
          type: "p",
          text: "However, when providing our Services to you, we collect additional information to ensure that they are delivered in a timely and efficient manner. These collection methods may not be as evident to you, so we thought we'd point them out and explain what they are (as they change from time to time): Cookies and other similar technologies on our websites and mobile applications enable us to track your browsing activity, such as the links you click and the pages you see, Internet Protocol (IP) address, to determine your language preference; browser type the date and time the Services were used; device type and settings; operating system used; application IDs, unique device identifiers; and error data.",
        },
      ],
    },
    {
      heading: "How we make use of data.",
      blocks: [
        {
          type: "p",
          text: "We collect minimal data and limit its use and purpose to those who granted the permission to access exclusively by accepting out terms and privacy policies, and we use collected data to make sure that our Services are delivered, improved, updated, and enhanced. We gather information on your access to, use of, and interactions with our Services. Further it is used to diagnose issues with the Services and identify any security or compliance concerns, faults, or needed enhancements, and to detect fraud and abuse of our.",
        },
        {
          type: "p",
          text: "Much of the information gathered is aggregated or statistical information about how people use our services, and it is not linked to any personally identifiable information.",
        },
      ],
    },
    {
      heading: "Sharing with 3rd Party.",
      blocks: [
        {
          type: "p",
          text: "We may share your personal information with our corporate family's connected companies, third parties with whom we've partnered to allow you to integrate their services into our own Services, and trusted third-party service providers as needed to perform services on our behalf, such as:",
        },
        {
          type: "ul",
          items: [
            "Processing credit card payments",
            "Serving advertisements",
            "Conducting contests or surveys",
            "Performing analysis of our Services and customers demographics",
            "Communicating with you, such as by way email or survey delivery",
            "Customer relationship management",
            "Security, risk management and compliance",
            "Recruiting support and related services.",
          ],
        },
        {
          type: "p",
          text: "These third parties (and any subcontractors they may be allowed to use) have agreed not to share, use, or retain your personal information for any reason other than to provide Services to you.",
        },
        { type: "p", text: "We will also share your information with the following third parties:" },
        {
          type: "p",
          text: "if we sell, buy, merge, are acquired by, or partner with other companies or businesses, or sell some or all of our assets (whether as a result of liquidation, bankruptcy, or otherwise), in which case we will disclose your data to the prospective seller or buyer of such business or assets; or if we sell, buy, merge, are acquired by, or partner with other companies or businesses, in which case we will disclose your data to the prospective seller or buyer of such business or assets. Your information may be among the assets transferred in such deals.",
        },
      ],
    },
    {
      heading: "We may use your data to communicate with you.",
      blocks: [
        {
          type: "p",
          text: "We may contact you directly or through a third-party service provider about products or services for which you have signed up or registered, such as when transactional or service-related communications are required. If you give us your approval, we may contact you with offers for other services we think you'll find useful, or if we're permitted to contact you based on legitimate interests. You do not need to give your consent in order to buy our products or services. The following are examples of possible contacts:",
        },
        {
          type: "ul",
          items: [
            "Email",
            "Text (SMS) messages",
            "Telephone calls;",
            "Messenger applications (e.g. WhatsApp, etc.)",
            "Automated phone calls or text messages.",
          ],
        },
      ],
    },
    {
      heading: "Transfer of personal information abroad.",
      blocks: [
        {
          type: "p",
          text: "If you utilize our Services, from a country other than the country where our servers are located, your personal information may be transferred across international borders, which will only be done when necessary for the performance of our Services, when we have your consent to do so, or subject to the appropriate standard contractual clauses. Also, when you call us or initiate a chat, we may provide you with support from one of our global locations outside your country of origin.",
        },
      ],
    },
    {
      heading: "Compliance with legal, regulatory and law enforcement requests.",
      blocks: [
        {
          type: "p",
          text: "We may disclose any information about you to government or law enforcement officials or private parties as we, in our sole discretion, believe necessary or appropriate to respond to claims and legal process (such as subpoena requests), to protect our property and rights or the property and rights of a third party, to protect the safety of the public or any person, or to prevent or stop activity we consider to be illegal or unethical. To the extent we are legally permitted to do so, we may take reasonable steps to notify you if we are required to provide your personal information to third parties as part of legal process.",
        },
      ],
    },
    {
      heading: "How we secure, store and retain your data.",
      blocks: [
        {
          type: "p",
          text: "We use generally acknowledged standards to store and protect the personal information we collect, including encryption where appropriate during transmission and once received and saved. We keep personal information for as long as it's needed to offer the Services requested, and then for a variety of other legitimate legal or business reasons. Media files, videos, PDF’s are stored for a period of 12 months before being deleted off our servers.",
        },
      ],
    },
    {
      heading: "How you can access, update or delete your data.",
      blocks: [
        {
          type: "p",
          text: "If you wish or request to delete your personal information and that data is necessary for the products or services you have been registered, the request will be honored only if it was sent officially by your school or nursery management and to the extent it is no longer necessary for any Services registered for or required for our legitimate business purposes or legal or contractual record keeping requirements.",
        },
      ],
    },
    {
      heading: "Changes to this policy.",
      blocks: [
        {
          type: "p",
          text: "We reserve the right to modify this Privacy Policy at any time. If we change any content of our Privacy Policy, we will post those changes to this Privacy Policy and any other places we see appropriate, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we disclose it. You will be notified for any material changes to this Privacy Policy, notifications will be posted either on our mobile App, on our website, by email, or by means of a notice on our home page, at least thirty (30) days prior to the implementation of the changes.",
        },
      ],
    },
    {
      heading: "Contact us.",
      blocks: [
        {
          type: "p",
          text: "If you have any questions, concerns, or complaints about our Privacy Policy, or how we handle your personal data, you may contact our Office by email at support@peekabooedu.com.",
        },
        {
          type: "p",
          text: "We will respond to all requests, inquiries or concerns within thirty (30) days.",
        },
      ],
    },
  ],
};

export const privacyAr: LegalDoc = {
  title: "سياسة الخصوصية",
  lastUpdated: "آخر تحديث في ١٠ أغسطس ٢٠٢٦.",
  sections: [
    {
      heading: "بشأن ملفات تعريف الارتباط (Cookies)",
      blocks: [
        {
          type: "p",
          text: "نستخدم أدوات، مثل ملفات تعريف الارتباط (Cookies)، لتمكين الخدمات والوظائف الأساسية على موقعنا وتطبيقاتنا للهواتف المحمولة، ولجمع البيانات المتعلقة بكيفية تفاعل الزائرين مع موقعنا ومنتجاتنا وخدماتنا. وبالنقر على «موافق»، فإنك توافق على استخدامنا لهذه الأدوات لأغراض الإعلانات والتحليلات والدعم.",
        },
      ],
    },
    {
      heading: "سياسة الخصوصية",
      blocks: [
        { type: "h3", text: "PeekabooEdu — سياسة الخصوصية" },
        { type: "p", text: "تاريخ آخر مراجعة: ١٠/٨/٢٠٢٦" },
        {
          type: "p",
          text: "إن خصوصيتك تمثل أهمية بالغة لدى PeekabooEdu. ونتيجة لذلك، فإننا لا نجمع المعلومات الشخصية ولا نستخدمها إلا بالقدر اللازم لتقديم منتجاتنا وخدماتنا ومواقعنا الإلكترونية وتطبيقاتنا للهواتف المحمولة، وللتواصل معك بشأنها (ويُشار إليها جميعاً بـ «خدماتنا»). وتتعلق المعلومات الشخصية التي يتم جمعها بتفاعلاتك مع خصائص موقعنا أو خصائص تطبيقنا للهواتف المحمولة داخل نطاق الخدمات؛ وعنوان بروتوكول الإنترنت (IP) لتحديد لغتك المفضلة؛ ونوع المتصفح؛ وتاريخ ووقت استخدام الخدمات؛ ونوع الجهاز وإعداداته؛ ونظام التشغيل المستخدم؛ ومعرّفات التطبيقات والمعرّفات الفريدة للأجهزة؛ وبيانات الأخطاء. كما تجمع هذه التقنيات بيانات مثل البيانات الوصفية وملفات السجل ووقت تحميل الصفحة ووقت استجابة الخادم، بغرض تحسين تحليل أسماء النطاقات (DNS) وتوجيه الشبكة وإعدادات الخوادم، لمراقبة أداء الموقع الإلكتروني وتطوير أنظمتنا.",
        },
        {
          type: "p",
          text: "أما المعلومات الأخرى، التي لا تقوم PeekabooEdu بجمعها، بل يقوم بإدخالها المدارس أو الحضانات أو الطلاب أو أولياء الأمور أو أي مستخدم آخر بوصفهم «المستخدمين» على PeekabooEdu، فقد تشتمل على:",
        },
        {
          type: "ul",
          items: [
            "الاسم",
            "العنوان",
            "رقم الضمان الاجتماعي",
            "رقم الهاتف",
            "تاريخ الميلاد",
            "عنوان البريد الإلكتروني",
            "معلومات الفواتير والسداد",
            "أي بيانات أخرى يتم جمعها ويمكن أن تحدد هويتك بصورة مباشرة أو غير مباشرة.",
          ],
        },
        {
          type: "p",
          text: "ولا تقتصر سياسة الخصوصية الخاصة بنا على بيان كيفية جمعنا لمعلوماتك الشخصية واستخدامها وأسباب ذلك، بل تبيّن أيضاً الكيفية التي يمكنك من خلالها الاطلاع على معلوماتك الشخصية أو تحديثها أو إدارتها على أي نحو آخر.",
        },
      ],
    },
    {
      heading: "ما هي المعلومات التي نجمعها، وكيف نجمعها، ولماذا نجمعها؟",
      blocks: [
        {
          type: "p",
          text: "يتم الحصول على الكثير من المعلومات التي قد تعتبرها معلومات شخصية منك مباشرةً أو من إدارة الحضانة التابع لها، عند إنشائك حساباً لنفسك أو عند التسجيل في Peekabooedu.com أو في تطبيق PeekabooCare.",
        },
        {
          type: "p",
          text: "إلا أننا، عند تقديم خدماتنا إليك، نجمع معلومات إضافية لضمان تقديم تلك الخدمات في الوقت المناسب وبكفاءة. وقد لا تكون طرق الجمع هذه واضحة لك، ولذلك رأينا أن نشير إليها ونوضح ماهيتها (إذ إنها تتغير من وقت إلى آخر): فملفات تعريف الارتباط (Cookies) وغيرها من التقنيات المشابهة على مواقعنا الإلكترونية وتطبيقاتنا للهواتف المحمولة تتيح لنا تتبع نشاط تصفحك، مثل الروابط التي تنقر عليها والصفحات التي تشاهدها، وعنوان بروتوكول الإنترنت (IP) لتحديد لغتك المفضلة؛ ونوع المتصفح؛ وتاريخ ووقت استخدام الخدمات؛ ونوع الجهاز وإعداداته؛ ونظام التشغيل المستخدم؛ ومعرّفات التطبيقات والمعرّفات الفريدة للأجهزة؛ وبيانات الأخطاء.",
        },
      ],
    },
    {
      heading: "كيفية استخدامنا للبيانات.",
      blocks: [
        {
          type: "p",
          text: "نجمع الحد الأدنى من البيانات ونقصر استخدامها والغرض منها على من مُنحوا صلاحية الوصول إليها حصراً من خلال قبول شروطنا وسياسات الخصوصية الخاصة بنا، ونستخدم البيانات المجموعة للتأكد من تقديم خدماتنا وتحسينها وتحديثها وتطويرها. ونجمع معلومات عن وصولك إلى خدماتنا واستخدامك لها وتفاعلاتك معها. وتُستخدم كذلك في تشخيص المشكلات المتعلقة بالخدمات وتحديد أي مخاوف تتصل بالأمن أو الامتثال أو أي أخطاء أو تحسينات لازمة، وفي الكشف عن الاحتيال وإساءة استخدام خدماتنا.",
        },
        {
          type: "p",
          text: "والكثير من المعلومات التي يتم جمعها هي معلومات مجمّعة أو إحصائية عن كيفية استخدام الأشخاص لخدماتنا، وهي غير مرتبطة بأي معلومات تحدد الهوية الشخصية.",
        },
      ],
    },
    {
      heading: "المشاركة مع الغير.",
      blocks: [
        {
          type: "p",
          text: "قد نشارك معلوماتك الشخصية مع الشركات المرتبطة بمجموعة شركاتنا، ومع أطراف ثالثة أقمنا معها شراكة لتمكينك من دمج خدماتها في خدماتنا، ومع مقدمي خدمات موثوقين من الغير بالقدر اللازم لأداء خدمات بالنيابة عنا، مثل:",
        },
        {
          type: "ul",
          items: [
            "معالجة مدفوعات بطاقات الائتمان",
            "عرض الإعلانات",
            "إجراء المسابقات أو الاستبيانات",
            "إجراء تحليلات لخدماتنا وللبيانات الديموغرافية لعملائنا",
            "التواصل معك، كما هو الحال عن طريق البريد الإلكتروني أو إرسال الاستبيانات",
            "إدارة علاقات العملاء",
            "الأمن وإدارة المخاطر والامتثال",
            "دعم التوظيف والخدمات ذات الصلة.",
          ],
        },
        {
          type: "p",
          text: "وقد وافقت هذه الأطراف الثالثة (وأي متعاقدين من الباطن قد يُسمح لها بالاستعانة بهم) على عدم مشاركة معلوماتك الشخصية أو استخدامها أو الاحتفاظ بها لأي سبب بخلاف تقديم الخدمات إليك.",
        },
        { type: "p", text: "وسنشارك معلوماتك كذلك مع الأطراف الثالثة التالية:" },
        {
          type: "p",
          text: "في حال قيامنا بالبيع أو الشراء أو الاندماج، أو في حال استحواذ شركات أو أعمال أخرى علينا أو إقامة شراكة معها، أو في حال بيع بعض أصولنا أو كلها (سواء كان ذلك نتيجة تصفية أو إفلاس أو غير ذلك)، وفي هذه الحالة سنفصح عن بياناتك للبائع أو المشتري المحتمل لتلك الأعمال أو الأصول؛ أو في حال قيامنا بالبيع أو الشراء أو الاندماج، أو استحواذ شركات أو أعمال أخرى علينا أو إقامة شراكة معها، وفي هذه الحالة سنفصح عن بياناتك للبائع أو المشتري المحتمل لتلك الأعمال أو الأصول. وقد تكون معلوماتك من بين الأصول المنقولة في مثل هذه المعاملات.",
        },
      ],
    },
    {
      heading: "قد نستخدم بياناتك للتواصل معك.",
      blocks: [
        {
          type: "p",
          text: "قد نتواصل معك مباشرةً أو من خلال مقدم خدمة من الغير بشأن منتجات أو خدمات قمت بالاشتراك أو التسجيل فيها، كما في الحالات التي تكون فيها المراسلات المتعلقة بالمعاملات أو بالخدمات لازمة. وإذا منحتنا موافقتك، فقد نتواصل معك بعروض تتعلق بخدمات أخرى نعتقد أنها ستكون مفيدة لك، أو إذا كان مسموحاً لنا بالتواصل معك استناداً إلى مصالح مشروعة. ولا يُشترط منحك موافقتك لكي تشتري منتجاتنا أو خدماتنا. وفي ما يلي أمثلة على وسائل التواصل الممكنة:",
        },
        {
          type: "ul",
          items: [
            "البريد الإلكتروني",
            "الرسائل النصية (SMS)",
            "المكالمات الهاتفية؛",
            "تطبيقات المراسلة (مثل واتساب، وغيرها)",
            "المكالمات الهاتفية أو الرسائل النصية الآلية.",
          ],
        },
      ],
    },
    {
      heading: "نقل المعلومات الشخصية إلى الخارج.",
      blocks: [
        {
          type: "p",
          text: "إذا استخدمت خدماتنا من بلد غير البلد الذي توجد فيه خوادمنا، فقد يتم نقل معلوماتك الشخصية عبر الحدود الدولية، ولن يتم ذلك إلا عندما يكون لازماً لتنفيذ خدماتنا، أو عندما تكون لدينا موافقتك على ذلك، أو رهناً بالشروط التعاقدية النموذجية الملائمة. وكذلك، عندما تتصل بنا أو تبدأ محادثة، فقد نقدم لك الدعم من أحد مواقعنا العالمية خارج بلدك الأصلي.",
        },
      ],
    },
    {
      heading: "الامتثال للطلبات القانونية والتنظيمية وطلبات جهات إنفاذ القانون.",
      blocks: [
        {
          type: "p",
          text: "يجوز لنا الإفصاح عن أي معلومات تتعلق بك للجهات الحكومية أو لمسؤولي إنفاذ القانون أو لأطراف من القطاع الخاص، وفقاً لما نراه، بمحض تقديرنا المطلق، لازماً أو ملائماً للرد على المطالبات والإجراءات القانونية (مثل طلبات أوامر الحضور)، أو لحماية ممتلكاتنا وحقوقنا أو ممتلكات وحقوق الغير، أو لحماية سلامة الجمهور أو أي شخص، أو لمنع أو وقف نشاط نعتبره غير قانوني أو غير أخلاقي. وبالقدر الذي يسمح به القانون، قد نتخذ خطوات معقولة لإخطارك إذا كنا مُلزمين بتقديم معلوماتك الشخصية إلى أطراف ثالثة في إطار إجراء قانوني.",
        },
      ],
    },
    {
      heading: "كيفية تأمين بياناتك وتخزينها والاحتفاظ بها.",
      blocks: [
        {
          type: "p",
          text: "نستخدم معايير معترفاً بها عموماً لتخزين المعلومات الشخصية التي نجمعها وحمايتها، بما في ذلك التشفير عند الاقتضاء أثناء النقل وبعد استلامها وحفظها. ونحتفظ بالمعلومات الشخصية للمدة اللازمة لتقديم الخدمات المطلوبة، ثم لمجموعة من الأسباب القانونية أو التجارية المشروعة الأخرى. ويتم تخزين الملفات الوسائطية ومقاطع الفيديو وملفات PDF لمدة ١٢ شهراً قبل حذفها من خوادمنا.",
        },
      ],
    },
    {
      heading: "كيف يمكنك الوصول إلى بياناتك أو تحديثها أو حذفها.",
      blocks: [
        {
          type: "p",
          text: "إذا رغبت في حذف معلوماتك الشخصية أو طلبت ذلك، وكانت تلك البيانات لازمة للمنتجات أو الخدمات التي تم تسجيلك فيها، فلن يُستجاب للطلب إلا إذا كان مُرسلاً بصفة رسمية من إدارة مدرستك أو حضانتك، وبالقدر الذي لم تعد فيه تلك البيانات لازمة لأي من الخدمات المسجّل فيها أو مطلوبة لأغراضنا التجارية المشروعة أو لمقتضيات حفظ السجلات القانونية أو التعاقدية.",
        },
      ],
    },
    {
      heading: "التعديلات على هذه السياسة.",
      blocks: [
        {
          type: "p",
          text: "نحتفظ بالحق في تعديل سياسة الخصوصية هذه في أي وقت. وإذا قمنا بتغيير أي من محتويات سياسة الخصوصية الخاصة بنا، فسننشر تلك التغييرات في سياسة الخصوصية هذه وفي أي أماكن أخرى نراها ملائمة، حتى تكون على علم بالمعلومات التي نجمعها وكيفية استخدامنا لها والظروف التي نفصح فيها عنها، إن وُجدت. وسيتم إخطارك بأي تغييرات جوهرية على سياسة الخصوصية هذه، وستُنشر الإخطارات إما على تطبيقنا للهواتف المحمولة أو على موقعنا الإلكتروني أو عن طريق البريد الإلكتروني أو بواسطة إشعار على صفحتنا الرئيسية، وذلك قبل (٣٠) يوماً على الأقل من تنفيذ التغييرات.",
        },
      ],
    },
    {
      heading: "تواصل معنا.",
      blocks: [
        {
          type: "p",
          text: "إذا كانت لديك أي أسئلة أو استفسارات أو شكاوى بشأن سياسة الخصوصية الخاصة بنا، أو بشأن كيفية تعاملنا مع بياناتك الشخصية، فيمكنك التواصل مع مكتبنا عبر البريد الإلكتروني على support@peekabooedu.com.",
        },
        {
          type: "p",
          text: "وسنرد على جميع الطلبات أو الاستفسارات أو الاستفهامات في غضون (٣٠) يوماً.",
        },
      ],
    },
  ],
};
