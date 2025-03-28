// console.log('Lets write JavaScript');
// let currentSong = new Audio();
// let songs = [];
// let currFolder = "";

// /*** Convert seconds to MM:SS format ***/
// function secondsToMinutesSeconds(seconds) {
//     if (isNaN(seconds) || seconds < 0) {
//         return "00:00";
//     }
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = Math.floor(seconds % 60);
//     return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
// }

// /*** Fetch songs from the given folder ***/
// async function getSongs(folder) {
//     currFolder = folder;
//     try {
//         let response = await fetch(`/${folder}/`);
//         let text = await response.text();
//         let div = document.createElement("div");
//         div.innerHTML = text;
//         let as = div.getElementsByTagName("a");
//         songs = [];

//         for (let a of as) {
//             if (a.href.endsWith(".mp3")) {
//                 songs.push(decodeURIComponent(a.href.split(`/${folder}/`)[1]));
//             }
//         }

//         let songUL = document.querySelector(".songList ul");
//         songUL.innerHTML = songs.map(song => `
//             <li>
//                 <img class="invert" width="34" src="img/music.svg" alt="">
//                 <div class="info">
//                     <div>${song}</div>
//                     <div>Harry</div>
//                 </div>
//                 <div class="playnow">
//                     <span>Play Now</span>
//                     <img class="invert" src="img/play.svg" alt="">
//                 </div>
//             </li>
//         `).join("");

//         document.querySelectorAll(".songList li").forEach((e, index) => {
//             e.addEventListener("click", () => playMusic(songs[index]));
//         });

//     } catch (error) {
//         console.error("Error fetching songs:", error);
//     }
// }

// /*** Play selected song ***/
// const playMusic = (track, pause = false) => {
//     currentSong.src = `/${currFolder}/` + track;
//     if (!pause) {
//         currentSong.play();
//         document.getElementById("play").src = "img/pause.svg";
//     }
//     document.querySelector(".songinfo").innerText = track;
//     document.querySelector(".songtime").innerText = "00:00 / 00:00";
// };

// /*** Display albums dynamically ***/
// async function displayAlbums() {
//     try {
//         let response = await fetch(`/songs/`);
//         let text = await response.text();
//         let div = document.createElement("div");
//         div.innerHTML = text;
//         let anchors = div.getElementsByTagName("a");
//         let cardContainer = document.querySelector(".cardContainer");
//         cardContainer.innerHTML = "";

//         for (let a of anchors) {
//             if (a.href.includes("/songs") && !a.href.includes(".htaccess")) {
//                 let folder = a.href.split("/").slice(-2)[0];
//                 try {
//                     let metadata = await fetch(`/songs/${folder}/info.json`);
//                     let info = await metadata.json();

//                     cardContainer.innerHTML += `
//                         <div data-folder="${folder}" class="card">
//                             <div class="play">
//                                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" fill="#000" stroke-width="1.5" stroke-linejoin="round"/>
//                                 </svg>
//                             </div>
//                             <img src="/songs/${folder}/cover.jpg" alt="">
//                             <h2>${info.title}</h2>
//                             <p>${info.description}</p>
//                         </div>`;
//                 } catch (error) {
//                     console.error(`Error loading album: ${folder}`, error);
//                 }
//             }
//         }

//         document.querySelectorAll(".card").forEach(e => {
//             e.addEventListener("click", async () => {
//                 songs = await getSongs(`songs/${e.dataset.folder}`);
//                 playMusic(songs[0]);
//             });
//         });

//     } catch (error) {
//         console.error("Error fetching albums:", error);
//     }
// }

// /*** Main function ***/
// async function main() {
//     await getSongs("songs/ncs");
//     playMusic(songs[0], true);
//     await displayAlbums();

//     /*** Play/Pause Button ***/
//     document.getElementById("play").addEventListener("click", () => {
//         if (currentSong.paused) {
//             currentSong.play();
//             document.getElementById("play").src = "img/pause.svg";
//         } else {
//             currentSong.pause();
//             document.getElementById("play").src = "img/play.svg";
//         }
//     });

//     /*** Update progress time ***/
//     currentSong.addEventListener("timeupdate", () => {
//         document.querySelector(".songtime").innerText = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`;
//         document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
//     });

//     /*** Seekbar Click Event ***/
//     document.querySelector(".seekbar").addEventListener("click", (e) => {
//         let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
//         document.querySelector(".circle").style.left = percent + "%";
//         currentSong.currentTime = ((currentSong.duration) * percent) / 100;
//     });

//     /*** 🔹 Hamburger Menu Toggle ***/
//     const hamburger = document.querySelector(".hamburger");
//     const leftPanel = document.querySelector(".left");
//     const closeBtn = document.querySelector(".close");

//     if (hamburger && leftPanel && closeBtn) {
//         hamburger.addEventListener("click", () => {
//             leftPanel.classList.toggle("active");
//         });

//         closeBtn.addEventListener("click", () => {
//             leftPanel.classList.remove("active");
//         });

//         // Close the menu when clicking outside
//         document.addEventListener("click", (event) => {
//             if (!leftPanel.contains(event.target) && !hamburger.contains(event.target)) {
//                 leftPanel.classList.remove("active");
//             }
//         });
//     }
// }

// /*** Run the main function ***/
// main();
// // 


document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const leftMenu = document.querySelector(".left");
    const closeBtn = document.querySelector(".close-btn");
    const body = document.querySelector("body");

    function toggleMenu() {
        leftMenu.classList.toggle("active");
        
        // Prevent scrolling when menu is open
        if (leftMenu.classList.contains("active")) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "auto";
        }
    }

    hamburger.addEventListener("click", toggleMenu);
    closeBtn.addEventListener("click", toggleMenu);

    // Close menu when clicking outside
    document.addEventListener("click", function(event) {
        if (!leftMenu.contains(event.target) && 
            event.target !== hamburger && 
            leftMenu.classList.contains("active")) {
            toggleMenu();
        }
    });

    // Update on window resize
    window.addEventListener("resize", function() {
        if (window.innerWidth >= 1900) {
            leftMenu.classList.remove("active");
            body.style.overflow = "auto";
        }
    });
});