const newtab = {
    async init (url) {
        await chrome.tabs.getCurrent((tab) => {
            const tabId = tab.id;
            // Open a new tab with the user defined URL
            chrome.tabs.create({ url : url}, () => {
                // Immediately close the previous tab
                chrome.tabs.remove(tabId);
            });
        });
    },
};

// Get the user defined URL from local storate
chrome.storage.local.get('customNewTabUrl', function(data) {
    // If no URL is defined, open new tab with options page
    const url = data.customNewTabUrl || chrome.runtime.getURL('options.html');
    newtab.init(url);
});