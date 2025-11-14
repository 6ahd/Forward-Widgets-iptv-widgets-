// مكون Trakt
WidgetMetadata = {
    id: "Trakt",
    title: "Trakt ما أشاهده & توصيات Trakt الشخصية",
    modules: [
        {
            title: "ما أشاهده على Trakt",
            requiresWebView: false,
            functionName: "loadInterestItems",
            cacheDuration: 3600,
            params: [
                {
                    name: "user_name",
                    title: "اسم المستخدم",
                    type: "input",
                    description: "يجب تفعيل خيار الخصوصية في إعدادات Trakt، الواجهة البرمجية (API) لن تعمل بدون ملء هذا الحقل",
                },
                {
                    name: "cookie",
                    title: "ملف تعريف الارتباط (Cookie) للمستخدم",
                    type: "input",
                    description: "_traktsession=xxxx، الواجهة البرمجية (API) لن تعمل بدون ملء هذا الحقل؛ يمكن الحصول عليه عن طريق تسجيل الدخول إلى الموقع والتقاط الحزم باستخدام برامج مثل Loon أو Qx",
                },
                {
                    name: "status",
                    title: "الحالة",
                    type: "enumeration",
                    enumOptions: [
                        {
                            title: "قائمة المشاهدة (أرغب بمشاهدته)",
                            value: "watchlist",
                        },
                        {
                            title: "أتابعه حالياً",
                            value: "progress",
                        },
                        {
                            title: "شاهدت - أفلام",
                            value: "history/movies/added/asc",
                        },
                        {
                            title: "شاهدت - مسلسلات",
                            value: "history/shows/added/asc",
                        },
                        {
                            title: "اختيار عشوائي من قائمة المشاهدة (سحب 9 أفلام عشوائياً)",
                            value: "random_watchlist",
                        },
                    ],
                },
                {
                    name: "page",
                    title: "رقم الصفحة",
                    type: "page"
                },
            ],
        },
        {
            title: "توصيات Trakt الشخصية",
            requiresWebView: false,
            functionName: "loadSuggestionItems",
            cacheDuration: 43200,
            params: [
                {
                    name: "cookie",
                    title: "ملف تعريف الارتباط (Cookie) للمستخدم",
                    type: "input",
                    description: "_traktsession=xxxx، الواجهة البرمجية (API) لن تعمل بدون ملء هذا الحقل؛ يمكن الحصول عليه عن طريق تسجيل الدخول إلى الموقع والتقاط الحزم باستخدام برامج مثل Loon أو Qx",
                },
                {
                    name: "type",
                    title: "النوع",
                    type: "enumeration",
                    enumOptions: [
                        {
                            title: "أفلام",
                            value: "movies",
                        },
                        {
                            title: "مسلسلات",
                            value: "shows",
                        },
                    ],
                },
                {
                    name: "page",
                    title: "رقم الصفحة",
                    type: "page"
                },
            ],
        },
        {
            title: "قوائم Trakt",
            requiresWebView: false,
            functionName: "loadListItems",
            cacheDuration: 86400,
            params: [
                {
                    name: "user_name",
                    title: "اسم المستخدم",
                    type: "input",
                    description: "مثال: giladg، الواجهة البرمجية (API) لن تعمل بدون ملء هذا الحقل",
                },
                {
                    name: "list_name",
                    title: "اسم القائمة",
                    type: "input",
                    description: "مثال: latest-4k-releases، الواجهة البرمجية (API) لن تعمل بدون ملء هذا الحقل",
                },
                {
                    name: "sort_by",
                    title: "الترتيب حسب",
                    type: "enumeration",
                    enumOptions: [
                        {
                            title: "التصنيف (خوارزمية)",
                            value: "rank",
                        },
                        {
                            title: "تاريخ الإضافة",
                            value: "added",
                        },
                        {
                            title: "العنوان",
                            value: "title",
                        },
                        {
                            title: "تاريخ الإصدار",
                            value: "released",
                        },
                        {
                            title: "مدة العرض",
                            value: "runtime",
                        },
                        {
                            title: "الشعبية",
                            value: "popularity",
                        },
                        {
                            title: "عشوائي",
                            value: "random",
                        },
                    ],
                },
                {
                    name: "sort_how",
                    title: "اتجاه الترتيب",
                    type: "enumeration",
                    enumOptions: [
                        {
                            title: "تصاعدي",
                            value: "asc",
                        },
                        {
                            title: "تنازلي",
                            value: "desc",
                        },
                    ],
                },
                {
                    name: "page",
                    title: "رقم الصفحة",
                    type: "page"
                },
            ],
        },
        {
            title: "تقويم متابعة المسلسلات (Trakt)",
            requiresWebView: false,
            functionName: "loadCalendarItems",
            cacheDuration: 43200,
            params: [
                {
                    name: "cookie",
                    title: "ملف تعريف الارتباط (Cookie) للمستخدم",
                    type: "input",
                    description: "_traktsession=xxxx، الواجهة البرمجية (API) لن تعمل بدون ملء هذا الحقل؛ يمكن الحصول عليه عن طريق تسجيل الدخول إلى الموقع والتقاط الحزم باستخدام برامج مثل Loon أو Qx",
                },
                {
                    name: "start_date",
                    title: "تاريخ البدء: قبل n يوم (0=اليوم، -1=الأمس، 1=الغد)",
                    type: "input",
                    description: "0 لليوم، -1 للأمس، 1 للغد. الواجهة البرمجية (API) لن تعمل بدون ملء هذا الحقل",
                },
                {
                    name: "days",
                    title: "عدد الأيام",
                    type: "input",
                    description: "مثال: 7، سيعرض البرامج لمدة 7 أيام بدءًا من تاريخ البدء. الواجهة البرمجية (API) لن تعمل بدون ملء هذا الحقل",
                },
                {
                    name: "order",
                    title: "طريقة الترتيب",
                    type: "enumeration",
                    enumOptions: [
                        {
                            title: "تصاعدي حسب التاريخ",
                            value: "asc",
                        },
                        {
                            title: "تنازلي حسب التاريخ",
                            value: "desc",
                        },
                    ],
                },
            ],
        },
    ],
    version: "1.0.15",
    requiredVersion: "0.0.1",
    description: "يحلل قوائم Trakt: أرغب بمشاهدته، أتابعه حالياً، شاهدته، القوائم، تقويم المتابعة، بالإضافة إلى توصيات شخصية بناءً على بيانات المستخدم ",
    author: "huangxd",
    site: "https://github.com/huangxd-/ForwardWidgets"
};

async function getUrls(traktUrls) {
  try {
    // التحقق مما إذا كانت قائمة من الـ Promises
    if (!Array.isArray(traktUrls) || !traktUrls.some(item => item instanceof Promise)) {
      return traktUrls; // إذا لم تكن قائمة Promises، قم بإرجاعها مباشرة
    }
    const urls = await Promise.all(traktUrls);
    return urls;
  } catch (error) {
    console.error('خطأ في جلب الروابط:', error);
    return [];
  }
}

function extractTraktUrlsFromResponse(responseData, minNum, maxNum, random = false) {
    let docId = Widget.dom.parse(responseData);
    let metaElements = Widget.dom.select(docId, 'meta[content^="https://trakt.tv/"]');
    if (!metaElements || metaElements.length === 0) {
        throw new Error("لم يتم العثور على أي روابط meta content");
    }

    let traktUrls = Array.from(new Set(metaElements
        .map(el => el.getAttribute?.('content') || Widget.dom.attr(el, 'content'))
        .filter(Boolean)));
    console.log(traktUrls);
    if (random) {
        const shuffled = traktUrls.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, Math.min(9, shuffled.length));
    } else {
        return traktUrls.slice(minNum - 1, maxNum);
    }
}

function extractTraktUrlsInProgress(responseData, minNum, maxNum) {
    let docId = Widget.dom.parse(responseData);
    let mainInfoElements = Widget.dom.select(docId, 'div.col-md-15.col-sm-8.main-info');

    if (!mainInfoElements || mainInfoElements.length === 0) {
        throw new Error("لم يتم العثور على أي عناصر main-info");
    }

    let traktUrls = [];
    mainInfoElements.slice(minNum - 1, maxNum).forEach(element => {
        // استخراج قيمة href
        let linkElement = Widget.dom.select(element, 'a[href^="/shows/"]')[0];
        if (!linkElement) return;

        let href = linkElement.getAttribute?.('href') || Widget.dom.attr(linkElement, 'href');
        if (!href) return;

        // استخراج قيمة التقدم (progress)
        let progressElement = Widget.dom.select(element, 'div.progress.ticks')[0];
        let progressValue = progressElement
            ? parseInt(progressElement.getAttribute?.('aria-valuenow') || Widget.dom.attr(progressElement, 'aria-valuenow') || '0')
            : 0;

        // إذا لم يكن التقدم 100، أضف الرابط
        if (progressValue !== 100) {
            let fullUrl = `https://trakt.tv${href}`;
            traktUrls.push(fullUrl);
        }
    });

    return Array.from(new Set(traktUrls));
}

async function fetchImdbIdsFromTraktUrls(traktUrls, headers) {
    let imdbIdPromises = traktUrls
        .filter(url =>
            (url.includes('movies') || url.includes('shows')) &&
            !url.includes('episodes')
        )
        .map(async (url) => {
            try {
                let detailResponse = await Widget.http.get(url, {
                    headers: {
                        "Cache-Control": "no-cache, no-store, must-revalidate",
                        "Pragma": "no-cache",
                        "Expires": "0",
                        ...headers,
                    },
                });

                // console.log("بيانات الاستجابة التفصيلية: ", detailResponse.data);

                let detailDoc = Widget.dom.parse(detailResponse.data);
                let imdbLinkEl = Widget.dom.select(detailDoc, 'a#external-link-imdb')[0];

                let match;
                let href;

                if (imdbLinkEl) {
                    href = await Widget.dom.attr(imdbLinkEl, 'href');
                    console.log("رابط imdb: ", href);
                    if (!href.includes("find?q=")) {
                        match = href.match(/title\/(tt\d+)/);
                    } else {
                        let tmdbLinkEl = Widget.dom.select(detailDoc, 'a#external-link-tmdb')[0];

                        if (!tmdbLinkEl) return null;

                        href = await Widget.dom.attr(tmdbLinkEl, 'href');
                        console.log("رابط tmdb: ", href);
                        match = href.match(/(movie|tv)\/(\d+)/);
                    }
                }

                return match ? `${match}` : null;
            } catch {
                return null; // تجاهل الطلبات الفاشلة الفردية
            }
        });

    let imdbIds = [...new Set(
        (await Promise.all(imdbIdPromises))
            .filter(Boolean)
            .map((item) => item)
    )].map((item) => {
        let itemArray = item.split(',');
        // التحقق مما إذا كان item[0] يحتوي على "title"
        if (item.includes('title')) {
            // إذا كان يحتوي على "title"، استخدم item[1] كـ id واضبط النوع (type) على "imdb"
            const id = itemArray[1];
            return {
                id,
                type: "imdb"
            };
        } else {
            // إذا لم يكن يحتوي على "title"، استخدم item[2] كـ id واضبط النوع (type) على "tmdb"
            const id = `${itemArray[1]}.${itemArray[2]}`;
            return {
                id,
                type: "tmdb"
            };
        }
    });
    console.log("طلب معرفات imdbIds:", imdbIds)
    return imdbIds;
}

async function fetchTraktData(url, headers = {}, status, minNum, maxNum, random = false, order = "") {
    try {
        const response = await Widget.http.get(url, {
            headers: {
                "Cache-Control": "no-cache, no-store, must-revalidate",
                "Pragma": "no-cache",
                "Expires": "0",
                ...headers, // السماح بإضافة ترويسات إضافية
            },
        });

        console.log("نتيجة الطلب:", response.data);

        let traktUrlsTmp = [];
        let traktUrls = [];
        if (status === "progress") {
            traktUrlsTmp = extractTraktUrlsInProgress(response.data, minNum, maxNum);
        } else {
            traktUrlsTmp = extractTraktUrlsFromResponse(response.data, minNum, maxNum, random);
        }

        traktUrls = await getUrls(traktUrlsTmp);

        console.log(traktUrls);

        if (order === "desc") {
            traktUrls = traktUrls.reverse();
        }

        return await fetchImdbIdsFromTraktUrls(traktUrls, headers);
    } catch (error) {
        console.error("فشل المعالجة:", error);
        throw error;
    }
}

async function loadInterestItems(params = {}) {
    try {
        const page = params.page;
        const userName = params.user_name || "";
        const cookie = params.cookie || "";
        let status = params.status || "";
        const random = status === "random_watchlist";
        if (random) {
            status = "watchlist";
        }
        const count = 20
        const size = status === "watchlist" ? 6 : 3
        const minNum = ((page - 1) % size) * count + 1
        const maxNum = ((page - 1) % size) * count + 20
        const traktPage = Math.floor((page - 1) / size) + 1

        if (!userName) {
            throw new Error("يجب تقديم اسم مستخدم Trakt");
        }

        if (!cookie) {
            throw new Error("يجب تقديم ملف تعريف الارتباط (Cookie) للمستخدم");
        }

        if (random && page > 1) {
            return [];
        }

        let url = `https://trakt.tv/users/${userName}/${status}?page=${traktPage}`;
        return await fetchTraktData(url, {Cookie: cookie}, status, minNum, maxNum, random);
    } catch (error) {
        console.error("فشل المعالجة:", error);
        throw error;
    }
}

async function loadSuggestionItems(params = {}) {
    try {
        const page = params.page;
        const cookie = params.cookie || "";
        const type = params.type || "";
        const count = 20;
        const minNum = (page - 1) * count + 1
        const maxNum = (page) * count

        if (!cookie) {
            throw new Error("يجب تقديم ملف تعريف الارتباط (Cookie) للمستخدم");
        }

        let url = `https://trakt.tv/${type}/recommendations`;
        return await fetchTraktData(url, {Cookie: cookie}, "", minNum, maxNum);
    } catch (error) {
        console.error("فشل المعالجة:", error);
        throw error;
    }
}

async function loadListItems(params = {}) {
    try {
        const page = params.page;
        const userName = params.user_name || "";
        const listName = params.list_name || "";
        const sortBy = params.sort_by || "";
        const sortHow = params.sort_how || "";
        const count = 20;

        if (!userName || !listName) {
            throw new Error("يجب تقديم اسم مستخدم Trakt واسم القائمة");
        }

        let url = `https://hd.trakt.tv/users/${userName}/lists/${listName}/items/movie,show?page=${page}&limit=${count}&sort_by=${sortBy}&sort_how=${sortHow}`;

        const response = await Widget.http.get(url, {
            headers: {
                "User-Agent":
                    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "trakt-api-key": "201dc70c5ec6af530f12f079ea1922733f6e1085ad7b02f36d8e011b75bcea7d",
            },
        });

        console.log("نتيجة الطلب:", response.data);

        const data = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
        const result = data
            .filter(item => item[item.type]?.ids?.imdb != null)
            .map(item => ({
                id: item[item.type].ids.imdb,
                type: "imdb"
            }));

        return result;
    } catch (error) {
        console.error("فشل المعالجة:", error);
        throw error;
    }
}

async function loadCalendarItems(params = {}) {
    try {
        const cookie = params.cookie || "";
        const startDateInput = params.start_date || "";
        const days = params.days || "";
        const order = params.order || "";

        if (!cookie || !startDateInput || !days || !order) {
            throw new Error("يجب تقديم ملف تعريف الارتباط (Cookie) وتاريخ البدء وعدد الأيام وطريقة الترتيب");
        }

        const startDateOffset = parseInt(startDateInput, 10);
        if (isNaN(startDateOffset)) {
            throw new Error("يجب أن يكون تاريخ البدء رقماً صالحاً");
        }

        const today = new Date();
        const startDate = new Date(today);
        startDate.setDate(today.getDate() + startDateOffset);

        // تنسيق التاريخ كـ YYYY-MM-DD
        const formattedStartDate = startDate.toISOString().split('T')[0];

        let url = `https://trakt.tv/calendars/my/shows-movies/${formattedStartDate}/${days}`;
        return await fetchTraktData(url, {Cookie: cookie}, "", 1, 100, false, order);
    } catch (error) {
        console.error("فشل المعالجة:", error);
        throw error;
    }
}
