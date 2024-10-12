// Select the modal and the close button
const modal = document.getElementById("myModal");
const closeModalButton = document.getElementsByClassName("close")[0];

// Function to show modal with details
function openModal(name) {
    let details = '';

    switch (name) {
        case 'Brawlstar':
            details = `
                <div style="display: flex; justify-content: center; gap: 20px; margin-bottom: 20px;">
                    <img src="bt1.jpg" alt=" " style="width: 1000px; height: 400px;">
                    <img src="bt2.jpg" alt=" " style="width: 1000px; height: 400px;">
                </div>

                <strong>Data-Driven Decision Making:</strong> In Brawl Stars, especially with a 65% win rate across 2600 games, I’m constantly making decisions based on my team’s strengths, the map layout, and the enemies' patterns. Similarly, as a data analyst, I gather and interpret data to make informed recommendations. My ability to assess situations in the game and make the right call mirrors how I evaluate datasets to guide business decisions.<br><br>

                <strong>Pattern Recognition and Problem-Solving:</strong> Games like Brawl Stars require me to recognize patterns in opponent behavior, predict their next move, and adapt. In data analysis, pattern recognition is crucial when identifying trends or anomalies in data. My experience of adapting to fast-paced game environments shows my ability to analyze situations and solve problems quickly, both of which are essential in data analysis.<br><br>

                <strong>Teamwork and Collaboration (2.2k games in 3v3 mode):</strong> With 2.2k team-based games, my win record shows that I excel in coordinating with others, which is critical as a data analyst who often works with cross-functional teams (engineers, marketers, etc.). Just like in the game where I play different roles to win, in the workplace, I might have to play different roles—sometimes leading, other times following—to complete a project.<br><br>

                <strong>Self-Reliance and Independence (400 solo wins):</strong> With 400 solo wins, I’ve shown I can thrive independently. This ability to take on challenges alone parallels the work of a data analyst, who sometimes must work autonomously to complete complex analysis or meet tight deadlines without always relying on others. My solo wins indicate resilience and accountability.<br><br>

                <strong>Quick Adaptation and Strategy:</strong> In Brawl Stars, especially in competitive matches, I have to adapt my strategy based on the ongoing dynamics. As a data analyst, the ability to adapt to new data, changing client requirements, or unexpected findings is critical. My in-game flexibility reflects how I could handle evolving datasets or shifting project goals.<br><br>

                <strong>Metrics-Driven:</strong> My focus on maintaining a 65% win rate shows a performance-driven mindset. In data analytics, tracking KPIs, measuring success, and using metrics to guide actions are key aspects. My gaming experience shows that I’m comfortable with assessing performance and making improvements based on measurable outcomes, which aligns with optimizing business processes using data.<br><br>

                <strong>Critical Thinking under Pressure:</strong> High-stakes moments in Brawl Stars—such as tight 3v3 battles or a close solo match—require quick decision-making under pressure. In data analysis, tight deadlines or critical business decisions based on my analysis require similar critical thinking skills under pressure. My ability to keep calm and win games shows my mental resilience and ability to perform well in such situations.<br><br>

                <strong>Professionalism and Integrity (100 Honor Points):</strong> My 100 honor points in Brawl Stars demonstrate that I have never been toxic in my games and have never been reported. This reflects strong emotional intelligence, the ability to work well under pressure, and a professional attitude in all interactions. In a work environment, these traits ensure I can collaborate effectively with team members, resolve conflicts, and maintain a positive, respectful atmosphere, all while keeping my focus on delivering high-quality results.
            `;
            break;
        case 'MonkeyType':
            details = 'Details about MonkeyType. <a href="https://monkeytype.com/profile/jerry145lmao" target="_blank">Visit</a>';
            break;
        case 'Leetcode':
            details = 'Details about Leetcode. <a href="https://leetcode.com/u/trainboloney/" target="_blank">Visit</a>';
            break;
        case 'Github':
            details = 'Details about Github. <a href="https://github.com/na7ion" target="_blank">Visit</a>';
            break;
        case 'Tetris':
            details = 'Details about Tetris. <a href="https://jstris.jezevec10.com/u/na7ion" target="_blank">Visit</a>';
            break;
        case 'Linkedin':
            details = 'Details about Linkedin. <a href="https://www.linkedin.com/in/zymonglennenao/" target="_blank">Visit</a>';
            break;
        case 'TableauPublic':
            details = 'Details about TableauPublic. <a href="https://public.tableau.com/app/profile/zymon.glenn.enao/vizzes" target="_blank">Visit</a>';
            break;
        default:
            details = 'Details not available.';
        case 'Brawlstar':
            details = `
                <div style="display: flex; justify-content: center; gap: 20px; margin-bottom: 20px;">
                    <img src="bt1.jpg" alt=" " style="width: 1000px; height: 400px;">
                    <img src="bt2.jpg" alt=" " style="width: 1000px; height: 400px;">
                </div>

                <strong>Data-Driven Decision Making:</strong> In Brawl Stars, especially with a 65% win rate across 2600 games, I’m constantly making decisions based on my team’s strengths, the map layout, and the enemies' patterns. Similarly, as a data analyst, I gather and interpret data to make informed recommendations. My ability to assess situations in the game and make the right call mirrors how I evaluate datasets to guide business decisions.<br><br>

                <strong>Pattern Recognition and Problem-Solving:</strong> Games like Brawl Stars require me to recognize patterns in opponent behavior, predict their next move, and adapt. In data analysis, pattern recognition is crucial when identifying trends or anomalies in data. My experience of adapting to fast-paced game environments shows my ability to analyze situations and solve problems quickly, both of which are essential in data analysis.<br><br>

                <strong>Teamwork and Collaboration (2.2k games in 3v3 mode):</strong> With 2.2k team-based games, my win record shows that I excel in coordinating with others, which is critical as a data analyst who often works with cross-functional teams (engineers, marketers, etc.). Just like in the game where I play different roles to win, in the workplace, I might have to play different roles—sometimes leading, other times following—to complete a project.<br><br>

                <strong>Self-Reliance and Independence (400 solo wins):</strong> With 400 solo wins, I’ve shown I can thrive independently. This ability to take on challenges alone parallels the work of a data analyst, who sometimes must work autonomously to complete complex analysis or meet tight deadlines without always relying on others. My solo wins indicate resilience and accountability.<br><br>

                <strong>Quick Adaptation and Strategy:</strong> In Brawl Stars, especially in competitive matches, I have to adapt my strategy based on the ongoing dynamics. As a data analyst, the ability to adapt to new data, changing client requirements, or unexpected findings is critical. My in-game flexibility reflects how I could handle evolving datasets or shifting project goals.<br><br>

                <strong>Metrics-Driven:</strong> My focus on maintaining a 65% win rate shows a performance-driven mindset. In data analytics, tracking KPIs, measuring success, and using metrics to guide actions are key aspects. My gaming experience shows that I’m comfortable with assessing performance and making improvements based on measurable outcomes, which aligns with optimizing business processes using data.<br><br>

                <strong>Critical Thinking under Pressure:</strong> High-stakes moments in Brawl Stars—such as tight 3v3 battles or a close solo match—require quick decision-making under pressure. In data analysis, tight deadlines or critical business decisions based on my analysis require similar critical thinking skills under pressure. My ability to keep calm and win games shows my mental resilience and ability to perform well in such situations.<br><br>

                <strong>Professionalism and Integrity (100 Honor Points):</strong> My 100 honor points in Brawl Stars demonstrate that I have never been toxic in my games and have never been reported. This reflects strong emotional intelligence, the ability to work well under pressure, and a professional attitude in all interactions. In a work environment, these traits ensure I can collaborate effectively with team members, resolve conflicts, and maintain a positive, respectful atmosphere, all while keeping my focus on delivering high-quality results.
            `;
            break;
    }

    document.getElementById("modalTitle").innerHTML = `Why Brawl Stars is Relevant <br><a href="https://brawlify.com/stats/profile/20CL9C2JLR#gsc.tab=0" target="_blank">Click here to view me profile</a>`;
    document.getElementById("modalContent").innerHTML = details; // Use innerHTML for links and images
    modal.style.display = "block"; // Show the modal
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none"; // Hide the modal
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal(); // Hide the modal
    }
}
