const ar = {
  site: {
    name: 'رِفاد',
    tagline: 'كل احتياجاتك في مكان واحد',
    description:
      'رِفاد متجر إلكتروني يجمع لك اختيارات مميزة ليومك من إلكترونيات وأزياء ومنتجات للمنزل، مع توصيل سريع ودفع آمن لجميع مناطق المملكة العربية السعودية.',
  },
  a11y: {
    skipToContent: 'تخطي إلى المحتوى',
    mainNav: 'التنقل الرئيسي',
    home: '{name} - الصفحة الرئيسية',
    cart: 'سلة التسوق',
    openMenu: 'فتح القائمة',
    closeMenu: 'إغلاق القائمة',
    language: 'اللغة',
    showCategories: 'عرض الأقسام',
    trustLabel: 'مزايا رِفاد',
  },
  nav: {
    home: 'الرئيسية',
    shop: 'تسوق الآن',
    categories: 'الأقسام',
    about: 'من نحن',
    contact: 'تواصل معنا',
  },
  trust: {
    shipping: { title: 'توصيل سريع', detail: 'لكل مناطق المملكة' },
    payment: { title: 'دفع آمن', detail: 'وخيارات متعددة' },
    support: { title: 'دعم متواصل', detail: 'خدمة عملاء على مدار الساعة' },
    returns: { title: 'إرجاع سهل', detail: 'خلال 7 أيام' },
  },
  footer: {
    shopping: 'التسوق',
    cart: 'السلة',
    rights: 'جميع الحقوق محفوظة.',
  },
  hero: {
    eyebrow: 'اكتشف عالم رفاد',
    line1: 'كل ما تحتاجه',
    line2: 'في مكان واحد',
    subtitle: 'اختيارات مميزة ليومك، من مكان واحد',
    cta: 'تسوق الآن',
  },
  shop: {
    title: 'تسوّق الآن',
    lead: 'اكتشف أفضل المنتجات من مختلف الفئات في مكان واحد',
    searchPlaceholder: 'ابحث عن منتج، علامة تجارية أو فئة...',
    searchLabel: 'ابحث عن منتج',
    searchButton: 'بحث',
    categoriesTitle: 'تسوّق حسب الفئة',
    viewAll: 'عرض كل الأقسام',
    metaTitle: 'تسوق الآن',
    metaDescription:
      'تصفح أفضل المنتجات في رِفاد من إلكترونيات وأزياء ومنزل وجمال ورياضة، في مكان واحد.',
  },
  offers: {
    banner: 'عروض خاصة وتخفيضات مميزة',
    cta: 'تسوق العروض',
  },
  categories: {
    names: {
      electronics: 'الإلكترونيات',
      fashion: 'الأزياء والإكسسوارات',
      home: 'المنزل والمعيشة',
      kids: 'الأطفال والألعاب',
      beauty: 'الجمال والعناية',
      sports: 'الرياضة واللياقة',
      pets: 'مستلزمات الحيوانات',
      groceries: 'المستلزمات اليومية',
      travel: 'السفر والرحلات',
      cars: 'السيارات ومستلزماتها',
      books: 'الكتب والقرطاسية',
      other: 'أخرى',
      otherSections: 'أقسام أخرى',
    },
    products: 'منتج',
    allTitle: 'كل الأقسام',
    searchPlaceholder: 'ابحث عن قسم أو منتج...',
    hero: {
      title: 'الأقسام',
      titleDisplay: 'الأقســام',
      kicker: 'تصفح جميع أقسام المتجر',
      lead: 'واكتشف آلاف المنتجات التي تناسب احتياجاتك',
    },
    metaDescription:
      'تصفح جميع أقسام رِفاد: إلكترونيات وأزياء ومنزل وأطفال وجمال ورياضة وسفر وسيارات وكتب وغيرها.',
    menu: {
      viewAll: 'عرض كل الأقسام',
    },
  },
  pages: {
    about: 'من نحن',
    contact: 'تواصل معنا',
    cart: 'سلة التسوق',
    offers: 'العروض',
    categories: 'الأقسام',
  },
  comingSoon: {
    text: 'هذه الصفحة قيد التجهيز وستكون متاحة قريبًا.',
    back: 'العودة للرئيسية',
  },
  search: {
    metaTitle: 'نتائج البحث',
    resultsFor: 'نتائج البحث عن «{query}»',
    searchSite: 'ابحث في رِفاد',
    empty: 'لا توجد منتجات متاحة بعد. سنضيفها قريبًا.',
  },
  notFound: {
    title: 'الصفحة غير موجودة',
    text: 'الرابط الذي فتحته غير صحيح أو تم نقله.',
    back: 'العودة للرئيسية',
  },
};

export type Messages = typeof ar;
export default ar;
