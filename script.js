WA.openPopup("popupRectangle", 'Dieser Server ist privat gehostet, soweit es hobbymäßig möglich ist wurden alle Maßnahmen getroffen, dass möglichst keine Personen- und IP-bezogenen Daten gespeichert werden. Für Details schau bitte in die aktuelle Dokumentation zu den Docker Containern von Workadventure und Jitsi', [{ label: "Verstanden", className: "primary", callback: (popup) => { WA.restorePlayerControls(); popup.close(); } }]);

WA.onEnterZone('welcomesign', () => {
    WA.disablePlayerControls();
    WA.openPopup("popupRectangle", "Willkommen auf dem WorkAdventure Server von Olex\n Im Außenbereich (außer Raucherecke), den Gängen und den beiden südlichen großen Räumen kannst du dich mit Leuten in deiner Nähe unterhalten.\n Im Keller im Norden kann dich niemand stören.\n In den anderen Räumen können alle im Raum miteinander reden, in größeren Räumen musst du das Beitreten bestätigen.\n Viel Spaß!", [{ label: "Alles klar", className: "primary", callback: (popup) => { WA.restorePlayerControls(); popup.close(); } }]);
    
});

WA.onEnterZone('silent', () => {
    WA.sendChatMessage('Hier im Keller darf man nicht reden, sonst weckt man die Geister auf!\n Hier kann dich also niemand stören.', 'Schild');
    
});

WA.onEnterZone('bookclub', () => {
    WA.sendChatMessage('Willkommen in der Bibliothek.', 'Schild');
    
});

WA.onEnterZone('smokers', () => {
    WA.sendChatMessage("Raucherbereich. Bitte die Kippenstummel in den Aschenbecher werfen.", 'Schild');
    
});
