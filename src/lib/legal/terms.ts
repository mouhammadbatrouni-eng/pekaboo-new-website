import type { LegalDoc } from "./types";

/**
 * Supplied client wording, reproduced as close to verbatim as the renderer
 * allows.
 *
 * Note for whoever reviews this: the client supplied this document under the
 * title "Terms & Conditions", but its body is a privacy policy rather than
 * terms of use. It is reproduced as given — the title and body both come from
 * the client. Flagged rather than silently rewritten.
 *
 * Do not paraphrase this copy. Any change should come from the client.
 */

export const termsEn: LegalDoc = {
  title: "Terms & Conditions",
  lastUpdated: "Last updated on August 10, 2026.",
  sections: [
    {
      heading: "For Cookies",
      blocks: [
        {
          type: "p",
          text: "We use tools, such as cookies, to enable essential services and functionality on our site and to collect data on how visitors interact with our site, products and services. By clicking Accept, you agree to our use of these tools for advertising, analytics and support.",
        },
      ],
    },
    {
      heading: "Privacy policy",
      blocks: [
        { type: "h3", text: "PeekabooEdu — PRIVACY POLICY" },
        { type: "p", text: "Last Revised: 10/8/2026" },
        {
          type: "p",
          text: 'Your privacy is important to PeekabooEdu. As a result, we only collect and use personal information as needed to deliver our products, services, websites, and mobile applications, as well as to communicate with you about them (collectively, our "Services"). Your personal information may contain the following:',
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
          text: "However, when providing our Services to you, we collect additional information to ensure that they are delivered in a timely and efficient manner. These collection methods may not be as evident to you, so we thought we'd point them out and explain what they are (as they change from time to time): Cookies and other similar technologies on our websites and mobile applications enable us to track your browsing activity, such as the links you click and the pages you see.",
        },
        {
          type: "p",
          text: "The information gathered relates to your interactions with our site features or mobile app features inside the Services; Internet Protocol (IP) address, to determine your language preference; browser type the date and time the Services were used; device type and settings; operating system used; application IDs, unique device identifiers; and error data. These technologies also collect data such as metadata, log files, page load time, and server response time to optimize DNS resolution, network routing, and server settings to monitor website performance and enhance our systems.",
        },
      ],
    },
    {
      heading: "How we utilize information.",
      blocks: [
        {
          type: "p",
          text: "We strongly believe in both minimizing the data we collect and limiting its use and purpose to only that (1) for which we have been given permission, (2) as necessary to deliver the Services you interact with, or (3) as we might be required or permitted for legal compliance or other lawful purposes:",
        },
        {
          type: "p",
          text: "Delivering, improving, updating and enhancing our Services. We collect various information relating to your access, use and/or interactions with our Services. We utilize this information to:",
        },
        {
          type: "ul",
          items: [
            "Improve and optimize the operation and performance of our Services (again, including our websites and mobile applications)",
            "Diagnose problems with and identify any security and compliance risks, errors, or needed enhancements to the Services",
            "Detect and prevent fraud and abuse of our Services and systems",
          ],
        },
        {
          type: "p",
          text: "Much of the data collected is aggregated or statistical data about how individuals use our Services, and is not linked to any personal information.",
        },
      ],
    },
    {
      heading: "Sharing with trusted third parties.",
      blocks: [
        {
          type: "p",
          text: "We may share your personal information with affiliated companies within our corporate family, with third parties with which we have partnered to allow you to integrate their services into our own Services, and with trusted third party service providers as necessary for them to perform services on our behalf, such as:",
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
          text: "These third parties (and any subcontractors they may be permitted to use) have agreed not to share, use or retain your personal information for any purpose other than as necessary for the provision of Services.",
        },
        { type: "p", text: "We will also disclose your information to third parties:" },
        {
          type: "p",
          text: "in the event that we sell or buy any business or assets (whether a result of liquidation, bankruptcy or otherwise), in which case we will disclose your data to the prospective seller or buyer of such business or assets; or if we sell, buy, merge, are acquired by, or partner with other companies or businesses, or sell some or all of our assets. In such transactions, your information may be among the transferred assets.",
        },
      ],
    },
    {
      heading: "Communicating with you.",
      blocks: [
        {
          type: "p",
          text: "We may contact you directly or through a third party service provider regarding products or services you have signed up or registered on, such as necessary to deliver transactional or service related communications. We may also contact you with offers for additional services we think you’ll find valuable if you give us consent, or where allowed to contact you based on legitimate interests. You don’t need to provide consent as a condition to purchase our goods or services. These contacts may include:",
        },
        {
          type: "ul",
          items: [
            "Email",
            "Text (SMS) messages",
            "Telephone calls",
            "Messenger applications (e.g. WhatsApp, etc.)",
            "Automated phone calls or text messages.",
          ],
        },
        {
          type: "p",
          text: "If we collect information from you in connection with a co-branded offer, it will be clear at the point of collection who is collecting the information and whose privacy policy applies. In addition, it will describe any options you have regarding the use and/or sharing of your personal information with a co-branded partner, as well as how to exercise those options. We are not responsible for the privacy practices or the content of third-party sites. Please read the privacy policy of any website you visit.",
        },
      ],
    },
    {
      heading: "Transfer of personal information abroad.",
      blocks: [
        {
          type: "p",
          text: "If you utilize our Services from a country other than the country where our servers are located, your personal information may be transferred across international borders, which will only be done when necessary for the performance of our contract with you, when we have your consent to do so, or subject to the appropriate standard contractual clauses. Also, when you call us or initiate a chat, we may provide you with support from one of our global locations outside your country of origin.",
        },
      ],
    },
    {
      heading: "Compliance with legal, regulatory and law enforcement requests.",
      blocks: [
        {
          type: "p",
          text: "We cooperate with government and law enforcement officials and private parties to enforce and comply with the law. We may disclose any information about you to government or law enforcement officials or private parties as we, in our sole discretion, believe necessary or appropriate to respond to claims and legal process (such as subpoena requests), to protect our property and rights or the property and rights of a third party, to protect the safety of the public or any person, or to prevent or stop activity we consider to be illegal or unethical. To the extent we are legally permitted to do so, we may take reasonable steps to notify you if we are required to provide your personal information to third parties as part of legal process.",
        },
        {
          type: "p",
          text: "We will also share your information to the extent necessary to comply with any ICANN, registry or ccTLD rules, regulations and policies when you register a domain name with us. For reasons critical to maintaining the security, stability and resiliency of the Internet, this includes the transfer of domain name registration information to the underlying domain registry operator and escrow provider, and publication of that information as required by ICANN in the public WHOIS database or with other third parties that demonstrate a legitimate legal interest to such information.",
        },
      ],
    },
    {
      heading: "How we secure, store and retain your data.",
      blocks: [
        {
          type: "p",
          text: "We follow generally accepted standards to store and protect the personal information we collect, both during transmission and once received and stored, including utilization of encryption where appropriate. We retain personal information only for as long as necessary to provide the Services you have requested and thereafter for a variety of legitimate legal or business purposes. These might include retention periods: mandated by law, contract or similar obligations applicable to our business operations; for preserving, resolving, defending or enforcing our legal/contractual rights; or needed to maintain adequate and accurate business and financial records.",
        },
        {
          type: "p",
          text: "If you have any questions about the security or retention of your personal information, you can contact us at support@peekabooedu.com.",
        },
      ],
    },
    {
      heading: "How you can access, update or delete your data.",
      blocks: [
        {
          type: "p",
          text: "If you make a request to delete your personal information and that data is necessary for the products or services you have been registered, the request will be honored only if it was sent by your nursery management and to the extent it is no longer necessary for any Services registered for or required for our legitimate business purposes or legal or contractual record keeping requirements.",
        },
      ],
    },
    {
      heading: "Changes to this policy.",
      blocks: [
        {
          type: "p",
          text: "We reserve the right to modify this Privacy Policy at any time. If we decide to change our Privacy Policy, we will post those changes to this Privacy Policy and any other places we deem appropriate, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we disclose it. If we make material changes to this Privacy Policy, we will notify you here, by our mobile App, by email, or by means of a notice on our home page, at least thirty (30) days prior to the implementation of the changes.",
        },
      ],
    },
    {
      heading: "Contact us.",
      blocks: [
        {
          type: "p",
          text: "If you have any questions, concerns, or complaints about our Privacy Policy, or how we handle your personal data, you may contact our Office of the Data Protection Officer by email at support@peekabooedu.com.",
        },
        {
          type: "p",
          text: "We will respond to all requests, inquiries or concerns within thirty (30) days.",
        },
      ],
    },
  ],
};

export const termsAr: LegalDoc = {
  title: "الشروط والأحكام",
  lastUpdated: "آخر تحديث في ١٠ أغسطس ٢٠٢٦.",
  sections: [
    {
      heading: "ملفات تعريف الارتباط (الكوكيز)",
      blocks: [
        {
          type: "p",
          text: "نستخدم أدوات، مثل ملفات تعريف الارتباط (الكوكيز)، لتمكين الخدمات والوظائف الأساسية على موقعنا، ولجمع بيانات عن كيفية تفاعل الزوار مع موقعنا ومنتجاتنا وخدماتنا. وبالنقر على «موافق»، فإنك توافق على استخدامنا لهذه الأدوات لأغراض الإعلان والتحليلات والدعم.",
        },
      ],
    },
    {
      heading: "سياسة الخصوصية",
      blocks: [
        { type: "h3", text: "PeekabooEdu — سياسة الخصوصية" },
        { type: "p", text: "آخر تعديل: ١٠/٨/٢٠٢٦" },
        {
          type: "p",
          text: "خصوصيتك مهمة لدى بيكابو (PeekabooEdu). ولذلك، فإننا لا نجمع المعلومات الشخصية ولا نستخدمها إلا بالقدر اللازم لتقديم منتجاتنا وخدماتنا ومواقعنا الإلكترونية وتطبيقاتنا للهواتف المحمولة، وللتواصل معك بشأنها (ويُشار إليها جميعاً بـ «خدماتنا»). وقد تتضمن معلوماتك الشخصية ما يلي:",
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
            "معلومات الفواتير والدفع",
            "أي بيانات أخرى تُجمع ويمكن أن تحدد هويتك بصورة مباشرة أو غير مباشرة.",
          ],
        },
        {
          type: "p",
          text: "لا تصف سياسة الخصوصية الخاصة بنا كيفية جمعنا لمعلوماتك الشخصية واستخدامنا لها وأسباب ذلك فحسب، بل تصف أيضاً كيف يمكنك الاطلاع على معلوماتك الشخصية أو تحديثها أو إدارتها على أي نحو آخر.",
        },
      ],
    },
    {
      heading: "ما هي المعلومات التي نجمعها، وكيف نجمعها، ولماذا نجمعها؟",
      blocks: [
        {
          type: "p",
          text: "يُجمع الكثير مما قد تعتبره معلومات شخصية منك مباشرةً أو من إدارة الحضانة التابع لها عند إنشائك حساباً لنفسك أو عند التسجيل في Peekabooedu.com أو تطبيق PeekabooCare.",
        },
        {
          type: "p",
          text: "غير أننا، عند تقديم خدماتنا إليك، نجمع معلومات إضافية لضمان تقديمها في الوقت المناسب وبكفاءة. وقد لا تكون طرق الجمع هذه واضحة لك، لذا رأينا أن نشير إليها ونوضح ماهيتها (إذ إنها تتغير من وقت إلى آخر): تتيح لنا ملفات تعريف الارتباط وغيرها من التقنيات المشابهة على مواقعنا الإلكترونية وتطبيقاتنا للهواتف المحمولة تتبّع نشاط تصفحك، مثل الروابط التي تنقر عليها والصفحات التي تشاهدها.",
        },
        {
          type: "p",
          text: "وتتعلق المعلومات المجمّعة بتفاعلاتك مع خصائص موقعنا أو خصائص تطبيقنا للهواتف المحمولة داخل الخدمات؛ وعنوان بروتوكول الإنترنت (IP) لتحديد لغتك المفضلة؛ ونوع المتصفح؛ وتاريخ ووقت استخدام الخدمات؛ ونوع الجهاز وإعداداته؛ ونظام التشغيل المستخدم؛ ومعرّفات التطبيقات والمعرّفات الفريدة للأجهزة؛ وبيانات الأخطاء. كما تجمع هذه التقنيات بيانات مثل البيانات الوصفية وملفات السجلات وزمن تحميل الصفحة وزمن استجابة الخادم، وذلك لتحسين تحليل أسماء النطاقات (DNS) وتوجيه الشبكة وإعدادات الخوادم، بهدف مراقبة أداء الموقع الإلكتروني وتطوير أنظمتنا.",
        },
      ],
    },
    {
      heading: "كيف نستخدم المعلومات.",
      blocks: [
        {
          type: "p",
          text: "نحن نؤمن إيماناً راسخاً بتقليل البيانات التي نجمعها، وبقصر استخدامها والغرض منها على ما (١) مُنحنا الإذن بشأنه، أو (٢) كان لازماً لتقديم الخدمات التي تتفاعل معها، أو (٣) قد يكون مطلوباً منا أو مسموحاً به بغرض الامتثال القانوني أو لأي أغراض مشروعة أخرى:",
        },
        {
          type: "p",
          text: "تقديم خدماتنا وتحسينها وتحديثها وتطويرها. نجمع معلومات متنوعة تتعلق بوصولك إلى خدماتنا واستخدامك لها و/أو تفاعلاتك معها. ونستخدم هذه المعلومات من أجل:",
        },
        {
          type: "ul",
          items: [
            "تحسين تشغيل خدماتنا وأدائها والارتقاء بهما (بما في ذلك، مرة أخرى، مواقعنا الإلكترونية وتطبيقاتنا للهواتف المحمولة)",
            "تشخيص المشكلات وتحديد أي مخاطر أمنية أو مخاطر تتعلق بالامتثال، أو أخطاء، أو تحسينات لازمة للخدمات",
            "كشف ومنع الاحتيال وإساءة استخدام خدماتنا وأنظمتنا",
          ],
        },
        {
          type: "p",
          text: "والكثير من البيانات المجمّعة هي بيانات مجمَّعة أو إحصائية عن كيفية استخدام الأفراد لخدماتنا، وهي غير مرتبطة بأي معلومات شخصية.",
        },
      ],
    },
    {
      heading: "المشاركة مع أطراف ثالثة موثوقة.",
      blocks: [
        {
          type: "p",
          text: "قد نشارك معلوماتك الشخصية مع الشركات التابعة داخل مجموعة شركاتنا، ومع أطراف ثالثة أقمنا معها شراكات لتمكينك من دمج خدماتها في خدماتنا، ومع مقدمي خدمات من أطراف ثالثة موثوقة بالقدر اللازم لأدائهم خدمات بالنيابة عنا، مثل:",
        },
        {
          type: "ul",
          items: [
            "معالجة مدفوعات بطاقات الائتمان",
            "عرض الإعلانات",
            "إجراء المسابقات أو الاستبيانات",
            "إجراء تحليلات لخدماتنا وللبيانات السكانية لعملائنا",
            "التواصل معك، كأن يكون ذلك عن طريق البريد الإلكتروني أو إرسال الاستبيانات",
            "إدارة علاقات العملاء",
            "الأمن وإدارة المخاطر والامتثال",
            "دعم التوظيف والخدمات ذات الصلة.",
          ],
        },
        {
          type: "p",
          text: "وقد تعهدت هذه الأطراف الثالثة (وأي متعاقدين من الباطن قد يُسمح لها بالاستعانة بهم) بعدم مشاركة معلوماتك الشخصية أو استخدامها أو الاحتفاظ بها لأي غرض غير ما هو لازم لتقديم الخدمات.",
        },
        { type: "p", text: "كما سنكشف عن معلوماتك لأطراف ثالثة:" },
        {
          type: "p",
          text: "في حال بِعنا أو اشترينا أي نشاط تجاري أو أصول (سواء نتيجة تصفية أو إفلاس أو غير ذلك)، وفي هذه الحالة سنكشف عن بياناتك للبائع أو المشتري المحتمل لذلك النشاط التجاري أو تلك الأصول؛ أو إذا قمنا ببيع شركات أو أنشطة تجارية أخرى أو شرائها أو الاندماج معها، أو إذا تم الاستحواذ علينا من قبلها أو أقمنا شراكة معها، أو إذا بعنا بعض أصولنا أو كلها. وفي مثل هذه المعاملات، قد تكون معلوماتك من بين الأصول المنقولة.",
        },
      ],
    },
    {
      heading: "التواصل معك.",
      blocks: [
        {
          type: "p",
          text: "قد نتصل بك مباشرةً أو من خلال مقدم خدمة من طرف ثالث بخصوص منتجات أو خدمات اشتركت فيها أو سجّلت بها، وذلك بالقدر اللازم لتوصيل المراسلات المتعلقة بالمعاملات أو الخدمات. وقد نتصل بك أيضاً بعروض لخدمات إضافية نعتقد أنك ستجدها ذات قيمة، إذا منحتنا موافقتك، أو حيث يُسمح لنا بالتواصل معك استناداً إلى مصالح مشروعة. ولست بحاجة إلى منح موافقتك كشرط لشراء منتجاتنا أو خدماتنا. وقد تشمل هذه الاتصالات ما يلي:",
        },
        {
          type: "ul",
          items: [
            "البريد الإلكتروني",
            "الرسائل النصية القصيرة (SMS)",
            "المكالمات الهاتفية",
            "تطبيقات المراسلة (مثل واتساب، وغيرها)",
            "المكالمات الهاتفية أو الرسائل النصية الآلية.",
          ],
        },
        {
          type: "p",
          text: "وإذا جمعنا معلومات منك في إطار عرض مشترك العلامة التجارية، فسيكون واضحاً عند نقطة الجمع مَن الذي يجمع المعلومات وأي سياسة خصوصية تنطبق. وبالإضافة إلى ذلك، ستوضَّح أي خيارات متاحة لك بشأن استخدام معلوماتك الشخصية و/أو مشاركتها مع الشريك في العلامة التجارية المشتركة، وكذلك كيفية ممارسة تلك الخيارات. ونحن غير مسؤولين عن ممارسات الخصوصية أو محتوى مواقع الأطراف الثالثة. يُرجى قراءة سياسة الخصوصية الخاصة بأي موقع إلكتروني تزوره.",
        },
      ],
    },
    {
      heading: "نقل المعلومات الشخصية إلى الخارج.",
      blocks: [
        {
          type: "p",
          text: "إذا استخدمت خدماتنا من دولة غير الدولة التي توجد فيها خوادمنا، فقد تُنقل معلوماتك الشخصية عبر الحدود الدولية، ولن يتم ذلك إلا عندما يكون لازماً لتنفيذ عقدنا معك، أو عندما تكون لدينا موافقتك على ذلك، أو رهناً بالشروط التعاقدية النموذجية الملائمة. كذلك، عندما تتصل بنا أو تبدأ محادثة، فقد نقدم لك الدعم من أحد مواقعنا العالمية خارج دولتك الأصلية.",
        },
      ],
    },
    {
      heading: "الامتثال للطلبات القانونية والتنظيمية وطلبات جهات إنفاذ القانون.",
      blocks: [
        {
          type: "p",
          text: "نتعاون مع المسؤولين الحكوميين ومسؤولي إنفاذ القانون ومع الأطراف الخاصة من أجل إنفاذ القانون والامتثال له. وقد نكشف عن أي معلومات تتعلق بك للمسؤولين الحكوميين أو مسؤولي إنفاذ القانون أو للأطراف الخاصة، بالقدر الذي نعتقد فيه، وفقاً لتقديرنا المنفرد، أنه لازم أو ملائم للرد على المطالبات والإجراءات القانونية (مثل طلبات أوامر الإحضار)، أو لحماية ممتلكاتنا وحقوقنا أو ممتلكات وحقوق طرف ثالث، أو لحماية سلامة الجمهور أو أي شخص، أو لمنع أو وقف أي نشاط نعتبره غير قانوني أو غير أخلاقي. وبالقدر المسموح لنا به قانوناً، قد نتخذ خطوات معقولة لإبلاغك إذا طُلب منا تقديم معلوماتك الشخصية إلى أطراف ثالثة في إطار إجراء قانوني.",
        },
        {
          type: "p",
          text: "كما سنشارك معلوماتك بالقدر اللازم للامتثال لأي قواعد أو لوائح أو سياسات صادرة عن ICANN أو السجل أو نطاقات الدول (ccTLD) عند تسجيلك اسم نطاق لدينا. ولأسباب جوهرية تتعلق بالحفاظ على أمن الإنترنت واستقراره وقدرته على الصمود، يشمل ذلك نقل معلومات تسجيل اسم النطاق إلى مشغّل سجل النطاقات الأساسي ومقدم خدمة الإيداع، ونشر تلك المعلومات على النحو الذي تقتضيه ICANN في قاعدة بيانات WHOIS العامة أو مع أطراف ثالثة أخرى تُثبت وجود مصلحة قانونية مشروعة في تلك المعلومات.",
        },
      ],
    },
    {
      heading: "كيف نؤمّن بياناتك ونخزنها ونحتفظ بها.",
      blocks: [
        {
          type: "p",
          text: "نتبع المعايير المتعارف عليها عموماً لتخزين المعلومات الشخصية التي نجمعها وحمايتها، أثناء نقلها وبعد استلامها وتخزينها على حد سواء، بما في ذلك استخدام التشفير حيث يكون ملائماً. ونحتفظ بالمعلومات الشخصية فقط للمدة اللازمة لتقديم الخدمات التي طلبتها، وبعد ذلك لمجموعة متنوعة من الأغراض القانونية أو التجارية المشروعة. وقد تشمل هذه فترات احتفاظ: تقتضيها القوانين أو العقود أو الالتزامات المشابهة المنطبقة على عملياتنا التجارية؛ أو للحفاظ على حقوقنا القانونية/التعاقدية أو تسويتها أو الدفاع عنها أو إنفاذها؛ أو اللازمة للحفاظ على سجلات تجارية ومالية كافية ودقيقة.",
        },
        {
          type: "p",
          text: "وإذا كانت لديك أي أسئلة بشأن أمن معلوماتك الشخصية أو الاحتفاظ بها، فيمكنك التواصل معنا على support@peekabooedu.com.",
        },
      ],
    },
    {
      heading: "كيف يمكنك الوصول إلى بياناتك أو تحديثها أو حذفها.",
      blocks: [
        {
          type: "p",
          text: "إذا قدّمت طلباً لحذف معلوماتك الشخصية وكانت تلك البيانات لازمة للمنتجات أو الخدمات التي سُجّلت بها، فلن يُستجاب للطلب إلا إذا كان مُرسلاً من إدارة الحضانة التابع لها، وبالقدر الذي لم تعد فيه تلك البيانات لازمة لأي خدمات مسجَّل بها أو مطلوبة لأغراضنا التجارية المشروعة أو لمقتضيات حفظ السجلات القانونية أو التعاقدية.",
        },
      ],
    },
    {
      heading: "التغييرات على هذه السياسة.",
      blocks: [
        {
          type: "p",
          text: "نحتفظ بالحق في تعديل سياسة الخصوصية هذه في أي وقت. وإذا قررنا تغيير سياسة الخصوصية الخاصة بنا، فسننشر تلك التغييرات في سياسة الخصوصية هذه وفي أي أماكن أخرى نراها ملائمة، حتى تكون على علم بالمعلومات التي نجمعها وكيفية استخدامنا لها وفي أي ظروف نكشف عنها، إن وُجدت. وإذا أجرينا تغييرات جوهرية على سياسة الخصوصية هذه، فسنبلغك بذلك هنا، أو عن طريق تطبيقنا للهواتف المحمولة، أو بالبريد الإلكتروني، أو بواسطة إشعار على صفحتنا الرئيسية، قبل ثلاثين (٣٠) يوماً على الأقل من تنفيذ التغييرات.",
        },
      ],
    },
    {
      heading: "تواصل معنا.",
      blocks: [
        {
          type: "p",
          text: "إذا كانت لديك أي أسئلة أو استفسارات أو شكاوى بشأن سياسة الخصوصية الخاصة بنا، أو بشأن كيفية تعاملنا مع بياناتك الشخصية، فيمكنك التواصل مع مكتب مسؤول حماية البيانات لدينا بالبريد الإلكتروني على support@peekabooedu.com.",
        },
        {
          type: "p",
          text: "وسنرد على جميع الطلبات أو الاستفسارات أو الشكاوى في غضون ثلاثين (٣٠) يوماً.",
        },
      ],
    },
  ],
};
