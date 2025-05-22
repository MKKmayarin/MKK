function loadData() {
    return buildingData;
}

function calculate() {
    const data = loadData();
    const buildingType = document.getElementById("buildingType").value;
    const currentLevel = parseInt(document.getElementById("currentLevel").value);
    const speedBoost = parseInt(document.getElementById("speedBoost").value);
    const buff = parseInt(document.getElementById("buff").value);
    const petSkill = parseInt(document.getElementById("petSkill").value);
    const jinmanSkill = parseInt(document.getElementById("jinmanSkill").value);

    if (!data[buildingType][currentLevel + 1]) {
        document.getElementById("result").innerHTML = "データがありません";
        return;
    }

    const nextLevelData = data[buildingType][currentLevel + 1];
    const jinmanEffect = jinmanSkill * 0.03;
    const petEffect = [0.05, 0.07, 0.09, 0.12, 0.15][petSkill - 1];

    let timeReduction = (100 + speedBoost + buff + (jinmanEffect * 100) + (petEffect * 100)) / 100;
    let newTime = nextLevelData.time / timeReduction;

    document.getElementById("result").innerHTML = `
        <h2>結果:</h2>
        <p>レベルアップに必要な素材（バフなし）:  肉,  木</p>
        <p>レベルアップに必要な時間（バフなし）:  秒</p>
        <p>レベルアップに必要な時間（バフあり）:  秒</p>
        <p>レベルアップに必要な時間（バフ+20%短縮）: ${(newTime * 0.8).toFixed(2)} 秒</p>
    `;
}