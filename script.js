const languages = [
    { flag: "🇹🇼", name: "繁體中文", en: "Traditional Chinese", text: "你好，世界！", rom: "Nǐ hǎo, shìjiè!" },
    { flag: "🇺🇸", name: "英語", en: "English", text: "Hello, World!", rom: "Hello, World!" },
    { flag: "🇯🇵", name: "日語", en: "Japanese", text: "こんにちは、世界！", rom: "Konnichiwa, Sekai!" },
    { flag: "🇰🇷", name: "韓語", en: "Korean", text: "안녕하세요, 세계!", rom: "Annyeonghaseyo, Segye!" },
    { flag: "🇫🇷", name: "法語", en: "French", text: "Bonjour le monde !", rom: "Bonjour le monde !" },
    { flag: "🇩🇪", name: "德語", en: "German", text: "Hallo, Welt!", rom: "Hallo, Welt!" },
    { flag: "🇪🇸", name: "西班牙語", en: "Spanish", text: "¡Hola, Mundo!", rom: "¡Hola, Mundo!" },
    { flag: "🇮🇹", name: "義大利語", en: "Italian", text: "Ciao mondo!", rom: "Ciao mondo!" },
    { flag: "🇵🇹", name: "葡萄牙語", en: "Portuguese", text: "Olá, Mundo!", rom: "Olá, Mundo!" },
    { flag: "🇷🇺", name: "俄語", en: "Russian", text: "Привет, мир!", rom: "Privet, mir!" },
    { flag: "🇸🇦", name: "阿拉伯語", en: "Arabic", text: "مرحبا بالعالم!", rom: "Marhaban bil-alam!" },
    { flag: "🇮🇳", name: "印地語", en: "Hindi", text: "नमस्ते दुनिया!", rom: "Namaste Duniya!" },
    { flag: "🇹🇭", name: "泰語", en: "Thai", text: "สวัสดีชาวโลก!", rom: "Sawasdee Chao Lok!" },
    { flag: "🇻🇳", name: "越南語", en: "Vietnamese", text: "Xin chào thế giới!", rom: "Xin chào thế giới!" },
    { flag: "🇮🇩", name: "印尼語", en: "Indonesian", text: "Halo Dunia!", rom: "Halo Dunia!" },
    { flag: "🇳🇱", name: "荷蘭語", en: "Dutch", text: "Hallo Wereld!", rom: "Hallo Wereld!" },
    { flag: "🇹🇷", name: "土耳其語", en: "Turkish", text: "Merhaba Dünya!", rom: "Merhaba Dünya!" },
    { flag: "🇬🇷", name: "希臘語", en: "Greek", text: "Γειά σου κόσμε!", rom: "Geiá sou kósme!" },
    { flag: "🇸🇪", name: "瑞典語", en: "Swedish", text: "Hej världen!", rom: "Hej världen!" },
    { flag: "🇵🇱", name: "波蘭語", en: "Polish", text: "Witaj świecie!", rom: "Witaj świecie!" }
];

let currentIndex = 0;

function renderGrid(list = languages) {
    const grid = document.getElementById("grid");
    grid.innerHTML = "";
    list.forEach((item) => {
        const index = languages.indexOf(item);
        const card = document.createElement("div");
        card.className = `card ${index === currentIndex ? "active" : ""}`;
        card.onclick = () => selectLanguage(index);
        card.innerHTML = `
            <div class="card-header">${item.flag} ${item.name} (${item.en})</div>
            <div class="card-text">${item.text}</div>
            <div class="card-rom">${item.rom}</div>
        `;
        grid.appendChild(card);
    });
}

function selectLanguage(index) {
    currentIndex = index;
    const item = languages[index];
    document.getElementById("greeting").textContent = item.text;
    document.getElementById("info").textContent = `${item.flag} ${item.name} (${item.en}) - ${item.rom}`;
    renderGrid(getFilteredList());
}

function getFilteredList() {
    const q = document.getElementById("search").value.trim().toLowerCase();
    if (!q) return languages;
    return languages.filter(item =>
        item.name.toLowerCase().includes(q) ||
        item.en.toLowerCase().includes(q) ||
        item.text.toLowerCase().includes(q) ||
        item.rom.toLowerCase().includes(q)
    );
}

function filterLangs() {
    renderGrid(getFilteredList());
}

renderGrid();
