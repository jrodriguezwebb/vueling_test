Develop an SPA in Angular 4 that shows NBA statistics using this api: https://stats.nba.com/stats

The aplication should show a list of players indicating their name, surname, equipment and their age.

For this case, the following endpoint will be user:
**leaguedashplayerbiostats**

Parameters:

- PerMode: "Totals"
- LeagueID: NBA = 00, ABA = 01
- Season Format NNNN-NN (ex. 2016-17)
- SeasonType: One of "Regular Season", "Pre Season", "Playoffs", "All-Star", "All Star", "Preseason"

When you select a player, display a screen with the player's data (Name, Surname and date of birth in format: Sep 3, 2010) using the following endpoint: 
**commonplayerinfo**

Parameters:

- PlayerID

Do not focus your efforts in the UI or UX. The important part is the readability of the code, as well as the architecture and maintainability. The development of tests will be evaluated.

**Please, write "Finished" on final commit comment, this comment inform us that is finished and we can proceed to validate the code.**

**USE PLUGIN CORS FOR CHROME**
