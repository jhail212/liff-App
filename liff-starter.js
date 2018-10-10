
window.onload = function (e) {
    liff.init(function () {
        makeList();
    });
    $('button').hover(function(){
    $('.glitch-wrapper').toggleClass('paused');
    $('body').toggleClass('paused');
    });
};

function getP(){
    var tipe = getParameterByName('type')
    if (!tipe) {
        document.getElementById('home').src = 'bg.jpg';
    } else {
        makeList();
    }
    }
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function getProfile(){
    liff.getProfile().then(function (profile) {
        document.getElementById('userid').textContent = 'Hai  ' + profile.displayName;
        document.getElementById('main').src = profile.pictureUrl;        
        document.getElementById('close').addEventListener('click', function () {
            liff.closeWindow();
        });
    });
}

function makeList(){
    var tipe = getParameterByName('type');
    if (tipe === 'text') {
        liff.sendMessages([{
            type: 'text',
            text: getParameterByName('text')
        }]).then(function () {
            liff.closeWindow();
        });
    };
    if (tipe === 'image') {
        liff.sendMessages([{
            type: 'image',
            originalContentUrl: getParameterByName('img'),
            previewImageUrl: getParameterByName('img')
        }]).then(function () {
            liff.closeWindow();
        });
    };
    function makeVideo(){
    var tipe = getParameterByName('type');
    if (tipe === 'video') {
        liff.sendMessages([{
            type: 'video',
            originalContentUrl: getParameterByName('ocu'),
            previewImageUrl: getParameterByName('piu')
        }]).then(function () {
            liff.closeWindow();
        });
    }
}
    if (tipe === 'imagee') {
        liff.sendMessages([
           {
            "type": "template",
            "altText": "amiga",
            "template": {
                "type": "carousel",
                "columns": [
                    {
                        "thumbnailImageUrl": "https://i.ytimg.com/vi/GEqOLMXqOlM/maxresdefault.jpg",
                        "title": "back number",
                        "text": "back number",
                        "wrap" : true,
                        "actions": [
                            {
                                "type": "uri",
                                "label": "TONTON",
                                "uri": "line://app/1603138059-k9Egggar?type=video&ocu=https://fahminogameno.life/liff2/2.mp4&piu=https://i.ytimg.com/vi/GEqOLMXqOlM/maxresdefault.jpg"
                            }
                        ]
                    },
                    {
                        "thumbnailImageUrl": "https://i.ytimg.com/vi/hzWDXge2ANM/maxresdefault.jpg",
                        "title": "back number",
                        "text": "back number",
                        "wrap" : true,
                        "actions": [
                            {
                                "type": "uri",
                                "label": "TONTON",
                                "uri": "line://app/1603138059-k9Egggar?type=video&ocu=https://fahminogameno.life/liff2/3.mp4&piu=https://i.ytimg.com/vi/hzWDXge2ANM/maxresdefault.jpg"
                            }
                        ]
                    },
                    {
                        "thumbnailImageUrl": "https://4.bp.blogspot.com/-nrUTG9UPSYM/Wj3yr3uu76I/AAAAAAAAWtk/BSBNykqO8PonimO78ICvGMpC3hoOhUP8ACLcBGAs/s1600/cover.jpg",
                        "title": "number",
                        "text": "back number",
                        "wrap" : true,
                        "actions": [
                            {
                                "type": "uri",
                                "label": "back number",
                                "uri": "line://app/1603138059-k9Egggar?type=video&ocu=https://fahminogameno.life/liff2/4.mp4&piu=https://4.bp.blogspot.com/-nrUTG9UPSYM/Wj3yr3uu76I/AAAAAAAAWtk/BSBNykqO8PonimO78ICvGMpC3hoOhUP8ACLcBGAs/s1600/cover.jpg"
                            }
                        ]
                    }
                ]
            }
        }]).then(function () {
            liff.closeWindow();
        });
    };
    if (tipe === 'video') {
        liff.sendMessages([{
            type: 'video',
            originalContentUrl: getParameterByName('ocu'),
            previewImageUrl: getParameterByName('piu')
        }]).then(function () {
            liff.closeWindow();
        });
    } else {
        liff.closeWindow();
    }
}
