export const parseDates = (shows) => {
    let upcomingShows = [];
    let currentDate = new Date();
  
    for(let i = 0; i < shows.length; i++){
      let date = new Date(shows[i].date);
      if(date > currentDate){
        upcomingShows.push(shows[i]);
      }
    }
    
    upcomingShows.sort((a, b) => new Date(a.date) - new Date(b.date));
  
    return upcomingShows;
}