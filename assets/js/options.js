document.addEventListener('DOMContentLoaded', function() {
    // Load the saved URL
    chrome.storage.local.get('customNewTabUrl', function(data) {
        if (data.customNewTabUrl) {
            document.getElementById('url').value = data.customNewTabUrl;
        }
    });

    // Save the URL
    document.getElementById('options-form').addEventListener('submit', function(e) {
        e.preventDefault();
        var url = document.getElementById('url').value;
        chrome.storage.local.set({ 'customNewTabUrl': url }, function() {
            var modal = new bootstrap.Modal(document.getElementById('saveModal'));
            document.getElementById('redirectBtn').onclick = function() {
                window.location.href = url;
            };
            modal.show();
        });
    });
});