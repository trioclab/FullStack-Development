   // Define prayer times for a specific area (e.g., city)
        const prayerTimes = {
            Fajr: "05:00",
            Dhuhr: "12:30",
            Asr: "15:45",
            Maghrib: "18:20",
            Isha: "20:00"
        };

        // Display local time
        const displayLocalTime = () => {
            document.getElementById('local-time').textContent = new Date().toLocaleTimeString();
        };
        setInterval(displayLocalTime, 1000);

        // Display prayer times
        const displayPrayerTimes = () => {
            document.getElementById('prayer-times').innerHTML = `
                <td>${prayerTimes.Fajr}</td>
                <td>${prayerTimes.Dhuhr}</td>
                <td>${prayerTimes.Asr}</td>
                <td>${prayerTimes.Maghrib}</td>
                <td>${prayerTimes.Isha}</td>
            `;
        };
        displayPrayerTimes();

        // Azan alarm logic
        const azan = new Audio('azan.mp3');
        setInterval(() => {
            const now = new Date();
            const currentTime = now.toTimeString().slice(0, 5);
            
            // Check if the current time matches any of the prayer times
            if (Object.values(prayerTimes).includes(currentTime)) {
                azan.play();
            }
        }, 60000); // Check every minute
