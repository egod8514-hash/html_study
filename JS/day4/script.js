// ======================================================
// 1. HTML 요소 가져오기
// ======================================================

const coinList = document.querySelector("#coinList");
const searchInput = document.querySelector("#searchInput");

const allBtn = document.querySelector("#allBtn");
const favoriteBtn = document.querySelector("#favoriteBtn");


// ======================================================
// 2. USDT 암호화폐 데이터를 저장할 배열
// ======================================================

let usdtCoins = [];


// ======================================================
// 3. 현재 보고 있는 화면
// ======================================================

// 처음에는 전체보기
let currentView = "all";


// ======================================================
// 4. LocalStorage에서 관심 종목 가져오기
// ======================================================

let favorites = JSON.parse(
    localStorage.getItem("favorites")
) || [];


// ======================================================
// 5. Binance API에서 암호화폐 데이터 가져오기
// ======================================================

function getCoins() {

    fetch("https://api.binance.com/api/v3/ticker/24hr")

        .then(function(response) {

            return response.json();
        })

        .then(function(data) {

            // USDT 종목만 필터링
            usdtCoins = data.filter(function(coin) {

                return coin.symbol.endsWith("USDT");
            });


            // 현재 상태에 맞게 화면 출력
            updateView();


            console.log("암호화폐 가격 업데이트");
        })

        .catch(function(error) {

            console.error(
                "데이터를 가져오는 중 오류 발생:",
                error
            );
        });
}


// ======================================================
// 6. 현재 상태에 맞는 코인을 보여주는 함수
// ======================================================

function updateView() {

    // 검색창에 입력한 내용
    const searchText =
        searchInput.value.toUpperCase();


    // 전체 USDT 코인
    let filteredCoins = usdtCoins;


    // ==================================================
    // 관심항목 화면
    // ==================================================

    if (currentView === "favorite") {

        filteredCoins =
            filteredCoins.filter(function(coin) {

                return favorites.includes(
                    coin.symbol
                );
            });
    }


    // ==================================================
    // 검색어 적용
    // ==================================================

    filteredCoins =
        filteredCoins.filter(function(coin) {

            return coin.symbol.includes(
                searchText
            );
        });


    // ==================================================
    // 현재 선택된 탭 표시
    // ==================================================

    if (currentView === "all") {

        allBtn.classList.add("active");
        favoriteBtn.classList.remove("active");

    } else {

        favoriteBtn.classList.add("active");
        allBtn.classList.remove("active");
    }


    // 화면 출력
    displayCoins(filteredCoins);
}


// ======================================================
// 7. 암호화폐를 화면에 표시하는 함수
// ======================================================

function displayCoins(coins) {

    let html = "";


    coins.forEach(function(coin) {

        // 24시간 변동률
        const changePercent = Number(
            coin.priceChangePercent
        );


        // 상승 / 하락 클래스
        let changeClass = "";


        if (changePercent > 0) {

            changeClass = "up";

        } else if (changePercent < 0) {

            changeClass = "down";
        }


        // 관심 종목인지 확인
        const isFavorite =
            favorites.includes(coin.symbol);


        // 관심 종목이면 ★
        // 아니면 ☆
        const star =
            isFavorite ? "★" : "☆";


        // HTML 만들기
        html += `
            <tr>

                <td>
                    <button
                        class="favorite-btn"
                        data-symbol="${coin.symbol}"
                    >
                        ${star}
                    </button>
                </td>

                <td>
                    ${coin.symbol}
                </td>

                <td>
                    ${Number(
                        coin.lastPrice
                    ).toLocaleString()}
                </td>

                <td class="${changeClass}">
                    ${changePercent > 0 ? "+" : ""}
                    ${changePercent.toFixed(2)}%
                </td>

                <td>
                    ${Number(
                        coin.highPrice
                    ).toLocaleString()}
                </td>

                <td>
                    ${Number(
                        coin.lowPrice
                    ).toLocaleString()}
                </td>

            </tr>
        `;
    });


    // 화면은 한 번만 변경
    coinList.innerHTML = html;
}


// ======================================================
// 8. 검색 기능
// ======================================================

searchInput.addEventListener(
    "input",
    function() {

        updateView();
    }
);


// ======================================================
// 9. 전체보기 버튼
// ======================================================

allBtn.addEventListener(
    "click",
    function() {

        currentView = "all";

        updateView();
    }
);


// ======================================================
// 10. 관심항목 버튼
// ======================================================

favoriteBtn.addEventListener(
    "click",
    function() {

        currentView = "favorite";

        updateView();
    }
);


// ======================================================
// 11. 별 버튼 클릭
// ======================================================

coinList.addEventListener(
    "click",
    function(event) {

        // 별 버튼이 아니면 종료
        if (
            !event.target.classList.contains(
                "favorite-btn"
            )
        ) {
            return;
        }


        // 클릭한 코인의 심볼
        const symbol =
            event.target.dataset.symbol;


        // 이미 관심 종목이면 제거
        if (favorites.includes(symbol)) {

            favorites =
                favorites.filter(function(item) {

                    return item !== symbol;
                });

        }

        // 관심 종목이 아니면 추가
        else {

            favorites.push(symbol);
        }


        // LocalStorage에 저장
        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites)
        );


        // 화면 다시 출력
        updateView();
    }
);


// ======================================================
// 12. 페이지 실행 시 바로 데이터 가져오기
// ======================================================

getCoins();


// ======================================================
// 13. 5초마다 가격 업데이트
// ======================================================

setInterval(function() {

    getCoins();

}, 5000);