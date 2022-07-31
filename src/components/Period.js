function Period() {
    const currentMonth = new Date().getMonth() + 1
    const isPlayoff = currentMonth >= 4 && currentMonth <= 6
    const isEndOfSeason = currentMonth >= 7 && currentMonth <= 10
    console.log(currentMonth)
    
    if (isPlayoff) { 
        return(
            <div>It's Playoff time baby !</div>
        )
    } else if (isEndOfSeason) {
        return (
            <div>It's the end of season, wait for October !</div>
        )
    } else {
        <div>It's the regular season !</div>
    }
}

export default Period