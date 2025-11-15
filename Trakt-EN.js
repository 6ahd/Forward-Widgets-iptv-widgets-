// Trakt Component
WidgetMetadata = {
    id: "Trakt",
    title: "Trakt What I'm Watching & Personal Recommendations",
    modules: [
        {
            title: "What I'm Watching on Trakt",
            requiresWebView: false,
            functionName: "loadInterestItems",
            cacheDuration: 3600,
            params: [
                {
                    name: "user_name",
                    title: "Username",
                    type: "input",
                    description: "Privacy option must be enabled in Trakt settings. The API will not work without filling this field",
                },
                {
                    name: "cookie",
                    title: "User Cookie",
                    type: "input",
                    description: "_traktsession=xxxx, The API will not work without filling this field; can be obtained by logging into the website and capturing packets using tools like Loon or Qx",
                },
                {
                    name: "status",
                    title: "Status",
                    type: "enumeration",
                    enumOptions: [
                        {
                            title: "Watchlist (Want to Watch)",
                            value: "watchlist",
                        },
                        {
                            title: "Currently Watching",
                            value: "progress",
                        },
                        {
                            title: "Watched - Movies",
                            value: "history/movies/added/asc",
                        },
                        {
                            title: "Watched - Shows",
                            value: "history/shows/added/asc",
                        },
                        {
                            title: "Random from Watchlist (Pulls 9 random items)",
                            value: "random_watchlist",
                        },
                    ],
                },
                {
                    name: "page",
                    title: "Page Number",
                    type: "page"
                },
            ],
        },
        {
            title: "Trakt Personal Recommendations",
            requiresWebView: false,
            functionName: "loadSuggestionItems",
            cacheDuration: 43200,
            params: [
                {
                    name: "cookie",
                    title: "User Cookie",
                    type: "input",
                    description: "_traktsession=xxxx, The API will not work without filling this field; can be obtained by logging into the website and capturing packets using tools like Loon or Qx",
                },
                {
                    name: "type",
                    title: "Type",
                    type: "enumeration",
                    enumOptions: [
                        {
                            title: "Movies",
                            value: "movies",
                        },
                        {
                            title: "Shows",
                            value: "shows",
                        },
                    ],
                },
                {
                    name: "page",
                    title: "Page Number",
                    type: "page"
                },
            ],
        },
        {
            title: "Trakt Lists",
            requiresWebView: false,
            functionName: "loadListItems",
            cacheDuration: 86400,
            params: [
                {
                    name: "user_name",
                    title: "Username",
                    type: "input",
                    description: "Example: giladg, The API will not work without filling this field",
                },
                {
                    name: "list_name",
                    title: "List Name",
                    type: "input",
                    description: "Example: latest-4k-releases, The API will not work without filling this field",
                },
                {
                    name: "sort_by",
                    title: "Sort By",
                    type: "enumeration",
                    enumOptions: [
                        {
                            title: "Rank (Algorithm)",
                            value: "rank",
                        },
                        {
                            title: "Date Added",
                            value: "added",
                        },
                        {
                            title: "Title",
                            value: "title",
                        },
                        {
                            title: "Release Date",
                            value: "released",
                        },
                        {
                            title: "Runtime",
                            value: "runtime",
                        },
                        {
                            title: "Popularity",
                            value: "popularity",
                        },
                        {
                            title: "Random",
                            value: "random",
                        },
                    ],
                },
                {
                    name: "sort_how",
                    title: "Sort Direction",
                    type: "enumeration",
                    enumOptions: [
                        {
                            title: "Ascending",
                            value: "asc",
                        },
                        {
                            title: "Descending",
                            value: "desc",
                        },
                    ],
                },
                {
                    name: "page",
                    title: "Page Number",
                    type: "page"
                },
            ],
        },
        {
            title: "Series Tracking Calendar (Trakt)",
            requiresWebView: false,
            functionName: "loadCalendarItems",
            cacheDuration: 43200,
            params: [
                {
                    name: "cookie",
                    title: "User Cookie",
                    type: "input",
                    description: "_traktsession=xxxx, The API will not work without filling this field; can be obtained by logging into the website and capturing packets using tools like Loon or Qx",
                },
                {
                    name: "start_date",
                    title: "Start Date: n days ago (0=Today, -1=Yesterday, 1=Tomorrow)",
                    type: "input",
                    description: "0 for today, -1 for yesterday, 1 for tomorrow. The API will not work without filling this field",
                },
                {
                    name: "days",
                    title: "Number of Days",
                    type: "input",
                    description: "Example: 7, will display programs for 7 days starting from the start date. The API will not work without filling this field",
                },
                {
                    name: "order",
                    title: "Sort Order",
                    type: "enumeration",
                    enumOptions: [
                        {
                            title: "Ascending by Date",
                            value: "asc",
                        },
                        {
                            title: "Descending by Date",
                            value: "desc",
                        },
                    ],
                },
            ],
        },
    ],
    version: "1.0.15",
    requiredVersion: "0.0.1",
    description: "Parses Trakt lists: Watchlist, Currently Watching, Watched, Lists, Tracking Calendar, plus personal recommendations based on user data 【30% off code：CHEAP】",
    author: "huangxd",
    site: "https://github.com/huangxd-/ForwardWidgets"
};

async function getUrls(traktUrls) {
  try {
    // Check if it's a list of Promises
    if (!Array.isArray(traktUrls) || !traktUrls.some(item => item instanceof Promise)) {
      return traktUrls; // If not a list of Promises, return it directly
    }
    const urls = await Promise.all(traktUrls);
    return urls;
  } catch (error) {
    console.error('Error fetching links:', error);
    return [];
  }
}

function extractTraktUrlsFromResponse(responseData, minNum, maxNum, random = false) {
    let docId = Widget.dom.parse(responseData);
    let metaElements = Widget.dom.select(docId, 'meta[content^="https://trakt.tv/"]');
    if (!metaElements || metaElements.length === 0) {
        throw new Error("No meta content links found");
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
        throw new Error("No main-info elements found");
    }

    let traktUrls = [];
    mainInfoElements.slice(minNum - 1, maxNum).forEach(element => {
        // Extract href value
        let linkElement = Widget.dom.select(element, 'a[href^="/shows/"]')[0];
        if (!linkElement) return;

        let href = linkElement.getAttribute?.('href') || Widget.dom.attr(linkElement, 'href');
        if (!href) return;

        // Extract progress value
        let progressElement = Widget.dom.select(element, 'div.progress.ticks')[0];
        let progressValue = progressElement
            ? parseInt(progressElement.getAttribute?.('aria-valuenow') || Widget.dom.attr(progressElement, 'aria-valuenow') || '0')
            : 0;

        // If progress is not 100, add the link
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

                // console.log("Detailed response data: ", detailResponse.data);

                let detailDoc = Widget.dom.parse(detailResponse.data);
                let imdbLinkEl = Widget.dom.select(detailDoc, 'a#external-link-imdb')[0];

                let match;
                let href;

                if (imdbLinkEl) {
                    href = await Widget.dom.attr(imdbLinkEl, 'href');
                    console.log("imdb link: ", href);
                    if (!href.includes("find?q=")) {
                        match = href.match(/title\/(tt\d+)/);
                    } else {
                        let tmdbLinkEl = Widget.dom.select(detailDoc, 'a#external-link-tmdb')[0];

                        if (!tmdbLinkEl) return null;

                        href = await Widget.dom.attr(tmdbLinkEl, 'href');
                        console.log("tmdb link: ", href);
                        match = href.match(/(movie|tv)\/(\d+)/);
                    }
                }

                return match ? `${match}` : null;
            } catch {
                return null; // Ignore individual failed requests
            }
        });

    let imdbIds = [...new Set(
        (await Promise.all(imdbIdPromises))
            .filter(Boolean)
            .map((item) => item)
    )].map((item) => {
        let itemArray = item.split(',');
        // Check if item[0] contains "title"
        if (item.includes('title')) {
            // If it contains "title", use item[1] as id and set type to "imdb"
            const id = itemArray[1];
            return {
                id,
                type: "imdb"
            };
        } else {
            // If it doesn't contain "title", use item[2] as id and set type to "tmdb"
            const id = `${itemArray[1]}.${itemArray[2]}`;
            return {
                id,
                type: "tmdb"
            };
        }
    });
    console.log("Requesting imdbIds:", imdbIds)
    return imdbIds;
}

async function fetchTraktData(url, headers = {}, status, minNum, maxNum, random = false, order = "") {
    try {
        const response = await Widget.http.get(url, {
            headers: {
                "Cache-Control": "no-cache, no-store, must-revalidate",
                "Pragma": "no-cache",
                "Expires": "0",
                ...headers, // Allow adding additional headers
            },
        });

        console.log("Request result:", response.data);

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
        console.error("Processing failed:", error);
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
            throw new Error("Trakt username must be provided");
        }

        if (!cookie) {
            throw new Error("User Cookie must be provided");
        }

        if (random && page > 1) {
            return [];
        }

        let url = `https://trakt.tv/users/${userName}/${status}?page=${traktPage}`;
        return await fetchTraktData(url, {Cookie: cookie}, status, minNum, maxNum, random);
    } catch (error) {
        console.error("Processing failed:", error);
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
            throw new Error("User Cookie must be provided");
        }

        let url = `https://trakt.tv/${type}/recommendations`;
        return await fetchTraktData(url, {Cookie: cookie}, "", minNum, maxNum);
    } catch (error) {
        console.error("Processing failed:", error);
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
            throw new Error("Trakt username and list name must be provided");
        }

        let url = `https://hd.trakt.tv/users/${userName}/lists/${listName}/items/movie,show?page=${page}&limit=${count}&sort_by=${sortBy}&sort_how=${sortHow}`;

        const response = await Widget.http.get(url, {
            headers: {
                "User-Agent":
                    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "trakt-api-key": "201dc70c5ec6af530f12f079ea1922733f6e1085ad7b02f36d8e011b75bcea7d",
            },
        });

        console.log("Request result:", response.data);

        const data = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
        const result = data
            .filter(item => item[item.type]?.ids?.imdb != null)
            .map(item => ({
                id: item[item.type].ids.imdb,
                type: "imdb"
            }));

        return result;
    } catch (error) {
        console.error("Processing failed:", error);
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
            throw new Error("Cookie, start date, number of days, and sort order must be provided");
        }

        const startDateOffset = parseInt(startDateInput, 10);
        if (isNaN(startDateOffset)) {
            throw new Error("Start date must be a valid number");
        }

        const today = new Date();
        const startDate = new Date(today);
        startDate.setDate(today.getDate() + startDateOffset);

        // Format the date as YYYY-MM-DD
        const formattedStartDate = startDate.toISOString().split('T')[0];

        let url = `https://trakt.tv/calendars/my/shows-movies/${formattedStartDate}/${days}`;
        return await fetchTraktData(url, {Cookie: cookie}, "", 1, 100, false, order);
    } catch (error) {
        console.error("Processing failed:", error);
        throw error;
    }
}
