window.onload = function() {
    // 获取进度条 div
    var $progress = document.getElementById('press-inner');
    // 初始进度，1%
    var progress = 1;

    // 生成随机数
    var random = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    // 跑进度
    function onprogress() {
        // 随机时间
        var timeout = random(10, 30);

        setTimeout(function() {
            // 如果页面加载完毕，则直接进度到 100%
            if (window.loaded) {
                $progress.style.width = '100%';
                return;
            }

            // 随机进度
            progress += random(1, 5);

            // 随机进度不能超过 98%，以免页面还没加载完毕，进度已经 100% 了
            if (progress > 98) {
                progress = 98;
            }

            $progress.style.width = progress + '%';
            onprogress();
        }, timeout);
    };

    var coreEl = document.querySelectorAll(".alinkCore a"),
        coreElArr = Array.prototype.slice.call(coreEl),
        radPress = document.getElementById("radPress");
    coreElArr.forEach(function(elem) {
        elem.onclick = function() {
            onprogress();
            radPress.style.display = "block";
        }
    })
}