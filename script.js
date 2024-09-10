const verses = [
    { number: 1, text: "Als er aber die Volksmengen sah, stieg er auf den Berg; und als er sich gesetzt hatte, traten seine Jünger zu ihm." },
    { number: 2, text: "Und er öffnete seinen Mund, lehrte sie und sprach:" },
    { number: 3, text: "Glückselig die Armen im Geist, denn ihrer ist das Reich der Himmel." },
    { number: 4, text: "Glückselig die Trauernden, denn sie werden getröstet werden." },
    { number: 5, text: "Glückselig die Sanftmütigen, denn sie werden das Land erben." },
    { number: 6, text: "Glückselig, die nach der Gerechtigkeit hungern und dürsten, denn sie werden gesättigt werden." },
    { number: 7, text: "Glückselig die Barmherzigen, denn ihnen wird Barmherzigkeit widerfahren." },
    { number: 8, text: "Glückselig, die reinen Herzens sind, denn sie werden Gott schauen." },
    { number: 9, text: "Glückselig die Friedensstifter, denn sie werden Söhne Gottes heißen." },
    { number: 10, text: "Glückselig die um Gerechtigkeit willen Verfolgten, denn ihrer ist das Reich der Himmel." },
    { number: 11, text: "Glückselig seid ihr, wenn sie euch schmähen und verfolgen und alles Böse lügnerisch gegen euch reden werden um meinetwillen." },
    { number: 12, text: "Freut euch und jubelt, denn euer Lohn ist groß in den Himmeln; denn ebenso haben sie die Propheten verfolgt, die vor euch waren." },
    { number: 13, text: "Ihr seid das Salz der Erde; wenn aber das Salz fade geworden ist, womit soll es gesalzen werden? Es taugt zu nichts mehr, als hinausgeworfen und von den Menschen zertreten zu werden." },
    { number: 14, text: "Ihr seid das Licht der Welt; eine Stadt, die oben auf einem Berg liegt, kann nicht verborgen sein." },
    { number: 15, text: "Man zündet auch nicht eine Lampe an und setzt sie unter den Scheffel, sondern auf das Lampengestell, und sie leuchtet allen, die im Hause sind." },
    { number: 16, text: "So soll euer Licht leuchten vor den Menschen, damit sie eure guten Werke sehen und euren Vater, der in den Himmeln ist, verherrlichen." },
    { number: 17, text: "Meint nicht, dass ich gekommen sei, das Gesetz oder die Propheten aufzulösen; ich bin nicht gekommen aufzulösen, sondern zu erfüllen." },
    { number: 18, text: "Denn wahrlich, ich sage euch: Bis der Himmel und die Erde vergehen, soll auch nicht ein Jota oder ein Strichlein von dem Gesetz vergehen, bis alles geschehen ist." },
    { number: 19, text: "Wer nun eins dieser geringsten Gebote auflöst und so die Menschen lehrt, wird der Geringste heißen im Reich der Himmel; wer sie aber tut und lehrt, dieser wird groß heißen im Reich der Himmel." },
    { number: 20, text: "Denn ich sage euch: Wenn nicht eure Gerechtigkeit die der Schriftgelehrten und Pharisäer weit übertrifft, so werdet ihr keinesfalls in das Reich der Himmel hineinkommen." },
    { number: 21, text: "Ihr habt gehört, dass zu den Alten gesagt ist: Du sollst nicht töten; wer aber töten wird, der wird dem Gericht verfallen sein." },
    { number: 22, text: "Ich aber sage euch, dass jeder, der seinem Bruder zürnt, dem Gericht verfallen sein wird; wer aber zu seinem Bruder sagt: Raka!, dem Hohen Rat verfallen sein wird; wer aber sagt: Du Narr!, der Hölle des Feuers verfallen sein wird." },
    { number: 23, text: "Wenn du nun deine Gabe darbringst zu dem Altar und dich dort erinnerst, dass dein Bruder etwas gegen dich hat," },
    { number: 24, text: "so lass deine Gabe dort vor dem Altar und geh vorher hin, versöhne dich mit deinem Bruder, und dann komm und bring deine Gabe dar!" },
    { number: 25, text: "Komm deinem Gegner schnell entgegen, während du mit ihm auf dem Weg bist! Damit nicht etwa der Gegner dich dem Richter überliefert und der Richter dem Diener und du ins Gefängnis geworfen wirst." },
    { number: 26, text: "Wahrlich, ich sage dir: Du wirst nicht von dort herauskommen, bis du auch die letzte Münze bezahlt hast." },
    { number: 27, text: "Ihr habt gehört, dass gesagt ist: Du sollst nicht ehebrechen." },
    { number: 28, text: "Ich aber sage euch, dass jeder, der eine Frau ansieht, sie zu begehren, schon Ehebruch mit ihr begangen hat in seinem Herzen." },
    { number: 29, text: "Wenn aber dein rechtes Auge dir Anstoß ⟨zur Sünde⟩ gibt, so reiß es aus und wirf es von dir! Denn es ist dir besser, dass eins deiner Glieder umkommt und nicht dein ganzer Leib in die Hölle geworfen wird." },
    { number: 30, text: "Und wenn deine rechte Hand dir Anstoß ⟨zur Sünde⟩ gibt, so hau sie ab und wirf sie von dir! Denn es ist dir besser, dass eins deiner Glieder umkommt und nicht dein ganzer Leib in die Hölle geworfen wird." },
    { number: 31, text: "Es ist aber gesagt: Wer seine Frau entlassen will, gebe ihr einen Scheidebrief." },
    { number: 32, text: "Ich aber sage euch: Jeder, der seine Frau entlassen wird, außer aufgrund von Hurerei, macht, dass mit ihr Ehebruch begangen wird; und wer eine Entlassene heiratet, begeht Ehebruch." },
    { number: 33, text: "Wiederum habt ihr gehört, dass zu den Alten gesagt ist: Du sollst nicht falsch schwören, du sollst aber dem Herrn deine Eide erfüllen." },
    { number: 34, text: "Ich aber sage euch: Schwört überhaupt nicht! Weder bei dem Himmel, denn er ist Gottes Thron;" },
    { number: 35, text: "noch bei der Erde, denn sie ist seiner Füße Schemel; noch bei Jerusalem, denn sie ist des großen Königs Stadt;" },
    { number: 36, text: "noch sollst du bei deinem Haupt schwören, denn du kannst nicht ein Haar weiß oder schwarz machen." },
    { number: 37, text: "Es sei aber euer Wort Ja ⟨ein⟩ Ja, ⟨und⟩ Nein ⟨ein⟩ Nein! Was aber darüber hinausgeht, ist vom Bösen." },
    { number: 38, text: "Ihr habt gehört, dass gesagt ist: Auge um Auge und Zahn um Zahn." },
    { number: 39, text: "Ich aber sage euch: Widersteht nicht dem Bösen, sondern wenn jemand dich auf deine rechte Backe schlagen wird, dem biete auch die andere dar;" },
    { number: 40, text: "und dem, der mit dir vor Gericht gehen und dein Untergewand nehmen will, dem lass auch den Mantel!" },
    { number: 41, text: "Und wenn jemand dich zwingen wird, eine Meile zu gehen, mit dem geh zwei!" },
    { number: 42, text: "Gib dem, der dich bittet, und weise den nicht ab, der von dir borgen will!" },
    { number: 43, text: "Ihr habt gehört, dass gesagt ist: Du sollst deinen Nächsten lieben und deinen Feind hassen." },
    { number: 44, text: "Ich aber sage euch: Liebt eure Feinde, und betet für die, die euch verfolgen," },
    { number: 45, text: "damit ihr Söhne eures Vaters seid, der in den Himmeln ist! Denn er lässt seine Sonne aufgehen über Böse und Gute und lässt regnen über Gerechte und Ungerechte." },
    { number: 46, text: "Denn wenn ihr liebt, die euch lieben, welchen Lohn habt ihr? Tun nicht auch die Zöllner dasselbe?" },
    { number: 47, text: "Und wenn ihr allein eure Brüder grüßt, was tut ihr Besonderes? Tun nicht auch die von den Nationen dasselbe?" },
    { number: 48, text: "Ihr nun sollt vollkommen sein, wie euer himmlischer Vater vollkommen ist." }
];


let currentlyPlayingNumber = null;
let isPlayingAll = false;
let showOnlyFirstTwoWords = false;

function renderVerses() {
    const verseList = document.getElementById('verseList');
    verseList.innerHTML = '';
    
    verses.forEach(verse => {
        const li = document.createElement('li');
        li.className = 'verse';
        li.innerHTML = `
            <div class="verse-number" data-number="${verse.number}">${verse.number}</div>
            <div class="verse-text">${getDisplayText(verse.text)}</div>
        `;
        verseList.appendChild(li);
    });

    addVerseClickListeners();
}

function getDisplayText(text) {
    if (showOnlyFirstTwoWords) {
        return text.split(' ').slice(0, 2).join(' ');
    }
    return text;
}

function addVerseClickListeners() {
    document.querySelectorAll('.verse-number').forEach(element => {
        element.addEventListener('click', function() {
            const number = parseInt(this.dataset.number);
            playAudio(number);
        });
    });
}

function playAudio(number) {
    // In a real implementation, you would play the audio file here
    console.log(`Playing audio for verse ${number}`);
    currentlyPlayingNumber = number;
    updatePlayingStatus();
}

function updatePlayingStatus() {
    document.querySelectorAll('.verse-number').forEach(element => {
        const number = parseInt(element.dataset.number);
        if (number === currentlyPlayingNumber) {
            element.classList.add('playing');
        } else {
            element.classList.remove('playing');
        }
    });
}

function playAllAudio(startingFrom = 1) {
    isPlayingAll = true;
    playAudioSequence(startingFrom);
}

function playAudioSequence(number) {
    if (!isPlayingAll || number > verses.length) {
        isPlayingAll = false;
        return;
    }
    
    playAudio(number);
    setTimeout(() => playAudioSequence(number + 1), 2000); // Adjust timing as needed
}

function stopPlayingAll() {
    isPlayingAll = false;
    currentlyPlayingNumber = null;
    updatePlayingStatus();
}

document.getElementById('showStrings').addEventListener('change', function() {
    document.getElementById('verseList').style.display = this.checked ? 'block' : 'none';
});

document.getElementById('playAll').addEventListener('click', () => playAllAudio());

document.getElementById('playFrom').addEventListener('click', function() {
    const number = parseInt(document.getElementById('playFromNumber').value);
    if (number && number >= 1 && number <= verses.length) {
        playAllAudio(number);
    }
});

document.getElementById('toggleWords').addEventListener('click', function() {
    showOnlyFirstTwoWords = !showOnlyFirstTwoWords;
    this.textContent = showOnlyFirstTwoWords ? 'Alle Wörter' : 'Erstes Wort';
    renderVerses();
});

renderVerses();