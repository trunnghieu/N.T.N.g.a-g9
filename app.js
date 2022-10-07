const data = [
    {
        song: 'Vì Anh Đâu Có Biết',
        singer: 'Madihu (Feat. Vũ.)',
        avatar: './images/01.jpeg',
        mp3: './music/01.mp3'
    },
    {
        song: 'Anh Đã Lạc Vào',
        singer: 'Prod Truzg x Green',
        avatar: './images/02.jpeg',
        mp3: './music/02.mp3'
    },
    {
        song: 'Luôn Bên Anh',
        singer: 'Min, Mr.A',
        avatar: './images/03.jpg',
        mp3: './music/03.mp3'
    },
    {
        song: 'Muốn Được Cùng Em',
        singer: 'Freaky',
        avatar: './images/04.jpeg',
        mp3: './music/04.mp3'
    },
    {
        song: 'Shay Nắng',
        singer: 'AMee',
        avatar: './images/05.jpeg',
        mp3: './music/05.mp3'
    },
    {
        song: 'Em Bé',
        singer: 'AMee; Karik',
        avatar: './images/06.jpeg',
        mp3: './music/06.mp3'
    },
    {
        song: 'Và Như Thế',
        singer: 'AMee; Karik',
        avatar: './images/07.jpeg',
        mp3: './music/07.mp3'
    },
    {
        song: 'Yêu 5',
        singer: 'Rhymastic',
        avatar: './images/08.jpeg',
        mp3: './music/08.mp3'
    },
    {
        song: 'Em là Châu Báu',
        singer: 'Tlinh ft. MCK',
        avatar: './images/09.jpeg',
        mp3: './music/09.mp3'
    },
    {
        song: 'Bài ca tuổi trẻ',
        singer: 'Da LAB, Vũ Bùi Thu Thủy, Linh Cáo, Mel G',
        avatar: './images/10.jpeg',
        mp3: './music/10.mp3'
    },
    {
        song: 'Có Em Đời Bỗng Vui',
        singer: 'Chillies',
        avatar: './images/11.jpeg',
        mp3: './music/11.mp3'
    },
    {
        song: 'Tiny love',
        singer: 'Thịnh Suy',
        avatar: './images/12.jpeg',
        mp3: './music/12.mp3'
    },
    {
        song: 'Chuyện Rằng',
        singer: 'Thịnh Suy',
        avatar: './images/13.jpeg',
        mp3: './music/13.mp3'
    },
    {
        song: 'You are my everything',
        singer: 'Gummy',
        avatar: './images/14.jpeg',
        mp3: './music/14.mp3'
    },
    {
        song: 'Yêu em dài lâu',
        singer: 'Anh Thư ft. Trường Giang',
        avatar: './images/15.png',
        mp3: './music/15.mp3'
    },
    {
        song: 'Mùa Thu Cho Em',
        singer: 'Lưu Tuấn Phong',
        avatar: './images/16.png',
        mp3: './music/16.mp3'
    },
    {
        song: 'Tình Thôi Xót Xa',
        singer: 'Lưu Tuấn Phong',
        avatar: './images/17.jpeg',
        mp3: './music/17.mp3'
    },
    {
        song: 'Người Tình Mùa Đông',
        singer: 'Lưu Tuấn Phong',
        avatar: './images/18.jpeg',
        mp3: './music/18.mp3'
    },
    {
        song: 'Dịu Dàng Đến Từng Phút Giây',
        singer: 'Charles',
        avatar: './images/19.jpeg',
        mp3: './music/19.mp3'
    },
    {
        song: 'Nàng Thơ Xứ Huế',
        singer: 'Phạm Anh Duy',
        avatar: './images/20.jpeg',
        mp3: './music/20.mp3'
    },
    {
        song: 'Khi Cô Đơn Em Nhớ Ai',
        singer: 'Lưu Tuấn Phong',
        avatar: './images/21.jpeg',
        mp3: './music/21.mp3'
    },
    {
        song: 'Chuyện Đôi Ta 「Lofi Ver」',
        singer: 'Emcee L ft Muộii',
        avatar: './images/22.jpeg',
        mp3: './music/22.mp3'
    },
    {
        song: 'Hẹn Một Mai',
        singer: 'Lưu Tuấn Phong',
        avatar: './images/23.jpeg',
        mp3: './music/23.mp3'
    },
    {
        song: 'Không Cần Phải Hứa Đâu Em',
        singer: 'Quang Minh',
        avatar: './images/24.jpeg',
        mp3: './music/24.mp3'
    },
    {
        song: 'Yêu Em Dại Khờ',
        singer: 'Hoàng Anh Karon',
        avatar: './images/25.jpeg',
        mp3: './music/25.mp3'
    },
    // {
    //     song: 'Em À',
    //     singer: 'Lưu Tuấn Phong',
    //     avatar: './images/26.jpeg',
    //     mp3: './music/26.mp3'
    // },
]

//1. thêm số 0 vào đằng trước các số 0 đến 9
function addZero(number) {
    if (number >= 0 && number <= 9) return `0${number}`
    else return number
}

//2. chuyển đổi giây thành phút và format lại 
function convertSecondsToMinutes(timeType, element = '') {
    let seconds = 0
    if (timeType === 'currentTime') {
        seconds = element.currentTime.toFixed(0)
    } else if (timeType === 'duration') {
        seconds = element.duration.toFixed(0)
    } else {
        seconds = timeType.toFixed(0)
    }
    const minutes = Math.trunc(seconds / 60)
    return `${addZero(minutes)}:${addZero(seconds - minutes * 60)}`
}

//3. tối ưu việc random để 1 bài hát không lặp lại cho đến đã phát hết danh sách bài hát
let random = []
function randomOptimization(arr) {
    const max = arr.length
    let numberRandom = Math.floor(Math.random() * max)

    if (random.length >= arr.length) {
        random = []
    }


    while (random.find(num => numberRandom == num) !== undefined) {
        numberRandom = Math.floor(Math.random() * max)
    }

    random.push(numberRandom)
    return numberRandom
}

//4 lấy ra phần trăm chiều ngang của chuột và timeline
function percentTimeLine(e) {
    let percent = ''
    const left = timeLine.offsetLeft
    const width = timeLine.offsetWidth
    if (clickDown && e.clientX >= left && e.clientX <= left + width) {
        percent = (e.clientX - left) / width
    } else if (clickDown && e.clientX < left) {
        percent = 0
    } else if (clickDown && e.clientX > left + width) {
        percent = 1
    }

    return percent
}

//

function playAudio() {
    if (music.paused) {
        music.play();
        pButton.className = "";
        pButton.className = "pause";

        /* Tell Analytics about longSession */
        var anc = false;
        window.setInterval(function () {
            if (!anc) { ga('send', 'event', 'longSession15', 'longSession15'); anc = true; }
        }, 900000);

    } else {
        music.pause();
        pButton.className = "";
        pButton.className = "play";
    }
}

/* Audio section */

function setVolume(volume) {
    document.querySelector('audio.active').volume = volume / 100;
}

let defaultValue = 100

const slider = document.getElementById("rngVolume")
const sliderValue = document.querySelector(".slider_value")

sliderValue.innerHTML = defaultValue + "%"

slider.addEventListener("input", () => {
    document.querySelector('audio.active').volume = slider.value / 100;
    sliderValue.innerHTML = slider.value + "%"
})

//
function intervalCurrent() {
    playingTimeLeft.innerHTML = convertSecondsToMinutes('currentTime', document.querySelector('audio.active'))
    circle.style.left = document.querySelector('audio.active').currentTime / document.querySelector('audio.active').duration * 100 + '%'
    percentLine.style.width = document.querySelector('audio.active').currentTime / document.querySelector('audio.active').duration * 100 + '%'
}

const playList = document.getElementById('playlist')

//5. render danh sách phát
data.forEach((item, index) => {
    playList.insertAdjacentHTML('beforeend', `
    
    <div class="item" data-index="${index}">
    <audio class="audio${++index}" src="${item.mp3}"></audio>
    <span class="item__number">${addZero(index)}</span>
    <img src="${item.avatar}">
    <span class="oi item__icon" data-glyph="caret-right"></span>
    <div class="music">
    <div class="item__song">${item.song}</div>
    <div class="item__singer">${item.singer}</div>
    </div>
    <span class="item__time">--:--</span>
    </div>
    `)
});

//6. hiển thị thời gian bài hát của phần danh sách sau khi render xong
document.querySelectorAll('audio').forEach(audio => {
    audio.addEventListener('loadedmetadata', function () {
        audio.parentElement.querySelector('.item__time').innerHTML = convertSecondsToMinutes('duration', audio)
    })
})


const listAudio = document.querySelectorAll('audio')
const listItem = document.querySelectorAll('.item')
const playingImg = document.querySelector('#playing .thumbnail img')
const thumbnail = document.querySelector('#playing .thumbnail')
const playingSong = document.querySelector('#playing .song')
const playingSinger = document.querySelector('#playing .singer')
const playingTimeRight = document.querySelector('#playing .time .right')
const playingTimeLeft = document.querySelector('#playing .time .left')
const play = document.querySelector('.controls .play')
const pause = document.querySelector('.controls .pause')
const forWard = document.querySelector('.controls .forward')
const backward = document.querySelector('.controls .backward')
const timeLine = document.querySelector('#playing .time-line')
const circle = timeLine.querySelector('.circle')
const percentLine = timeLine.querySelector('.percent')
const loop = document.querySelector('.controls .loop')
const randomControl = document.querySelector('.controls .random')
const music = document.querySelector('audioplayer')
const audioActive = document.querySelector('audio.active')


listItem[0].classList.add('active')
listAudio[0].classList.add('active')

let currentTime = ''

//7. khi nhấn bài bài hát
listItem.forEach(item => {
    item.addEventListener('click', function () {
        thumbnail.classList.remove('pause')
        thumbnail.classList.remove('play')

        //6.1 hiệu ứng active 
        document.querySelector('.item.active').classList.remove('active')
        item.classList.add('active')

        //6.2 dừng audio đang phát vào đặt thời gian về 0 và update âm lượng
        document.querySelector('audio.active').pause()
        document.querySelector('audio.active').currentTime = 0

        //6.3 xóa, thêm class active cho audio
        document.querySelector('audio.active').classList.remove('active')
        item.querySelector('audio').classList.add('active')

        //6.4 hiệu ứng thay đổi ảnh, bài hát, ca sĩ, thời gian
        playingImg.setAttribute('src', item.querySelector('img').getAttribute('src'))
        playingSong.innerHTML = item.querySelector('.item__song').innerHTML
        playingSinger.innerHTML = item.querySelector('.item__singer').innerHTML
        playingTimeRight.innerHTML = item.querySelector('.item__time').innerHTML

        //6.5 hiệu ứng cuộn, clearInterval, xóa class active của loop
        item.scrollIntoView({ behavior: "smooth", block: "center" })
        clearInterval(currentTime)
        loop.classList.remove('active')

        play.click()
    })
})

//8. khi ấn play
play.addEventListener('click', function () {

    forWard.style.pointerEvents = 'all'

    thumbnail.classList.remove('pause')
    thumbnail.classList.add('play')

    //8.1 hiệu ứng đổi sang pause
    play.style.display = 'none'
    pause.style.display = 'block'

    //8.2 phát audio đang active
    document.querySelector('audio.active').play()
    setVolume(slider.value)

    //8.3 hiệu ứng thời gian hiện tại của bài hát
    currentTime = setInterval(() => {
        intervalCurrent()
    }, 100)

    //8.4 khi audio active kết thúc
    document.querySelector('audio.active').onended = function () {
        clearInterval(currentTime)

        // nếu ấn chọn loop
        if (loop.classList.contains('active')) {
            play.click()
            // mặc định phát bài tiếp theo
        } else {
            forWard.click()
        }
    }


})

//9. khi ấn pause
pause.addEventListener('click', function () {
    pause.style.display = 'none'
    play.style.display = 'block'

    thumbnail.classList.remove('play')
    thumbnail.classList.add('pause')

    clearInterval(currentTime)
    document.querySelector('audio.active').pause()
})

//10. khi ấn forWard
forWard.addEventListener('click', function () {
    // nếu ấn chọn random
    if (randomControl.classList.contains('active')) {
        listItem[randomOptimization(listItem)].click()
    }
    else {
        const nextItem = document.querySelector('.item.active').nextElementSibling
        if (nextItem) {
            nextItem.click()
        } else {
            pause.click()
            this.style.pointerEvents = 'none'
        }
    }
})

//11. khi ấn backWard
backward.addEventListener('click', function () {
    if (randomControl.classList.contains('active')) {
        if (document.querySelector('audio.active').currentTime <= 3) {
            listItem[randomOptimization(listItem)].click()
        } else {
            document.querySelector('audio.active').currentTime = 0
        }
    }
    else {
        const prevItem = document.querySelector('.item.active').previousElementSibling
        if (prevItem && document.querySelector('audio.active').currentTime <= 3) {
            prevItem.click()
        } else {
            document.querySelector('audio.active').currentTime = 0
        }
    }

})

let clickDown = false

//12. hiệu ứng kéo thả time line
window.addEventListener('mousedown', function (e) {
    if (e.target.matches('.circle') || e.target.matches('.time-line') || e.target.matches('.percent')) {
        clickDown = true
        clearInterval(currentTime)
    }
})

window.addEventListener('mousemove', function (e) {
    this.document.body.style.userSelect = 'none'

    let percent = percentTimeLine(e)

    if (clickDown) {
        clearInterval(currentTime)
        playingTimeLeft.innerHTML = convertSecondsToMinutes(percent * document.querySelector('audio.active').duration)
        circle.style.left = percent * 100 + '%'
        percentLine.style.width = percent * 100 + '%'
    }

})

window.addEventListener('mouseup', function (e) {
    if (clickDown) {
        document.querySelector('audio.active').currentTime = percentTimeLine(e) * document.querySelector('audio.active').duration
        currentTime = setInterval(() => {
            intervalCurrent()
        }, 100)
        clickDown = false
    }
})

timeLine.addEventListener('click', function () {
    intervalCurrent()
})


//13. khi ấn vào loop
loop.addEventListener('click', function () {
    randomControl.classList.remove('active')
    this.classList.toggle('active')
})

//14. khi ấn vào random
randomControl.addEventListener('click', function () {
    loop.classList.remove('active')
    this.classList.toggle('active')
    random = []
    if (this.classList.contains('active')) {
        random.push(document.querySelector('.item.active').dataset.index)
    }
})

thumbnail.addEventListener('animationend', function (e) {
    if (e.animationName === 'rotatePause') {
        thumbnail.classList.remove('pause')
        this.style.borderRadius = '20px'
    }
})
