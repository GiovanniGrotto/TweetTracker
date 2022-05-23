const serverUrl = "https://site202139.tw.cs.unibo.it/"
var newWindow;

function streamPage() {
    if (newWindow) newWindow.close(); //c'è gia una window, la chiudo
    newWindow = window.open( // apro la nuova paginetta in un nuovo tab
        'https://site202139.tw.cs.unibo.it/stream/tweets',
        '_blank'
    );
}