import joe from "../assets/meetpics/joepic.png";
import mike1 from "../assets/meetpics/mikepic.png";
import mike2 from "../assets/meetpics/mikedrumpic.png";
import mike3 from "../assets/meetpics/uptonpic.png";

const Meet = () => {
  return (
    <div className="meet-container">
      <h3>Meet the Band</h3>
      <div className="joe-container">
        <img src={joe}></img>
        <p>
          Joe Orlando, originally from the San Francisco Bay Area, now residing
          in Roseville, started his musical journey playing nightclubs at the
          age of 16 years old. He has played in multiple bands over the years,
          and has toured extensively in the United States, his bands opening
          shows for Queensrych, Donnie Iris, The Beach Boys, Linda Ronstadt, The
          Gatlin Brothers, The Neville Brothers, Jan and Dean, and countless
          others. Joe also played in the backup band for artists such as The
          Shirelles, The Coasters, The Drifters, Chuck Berry, Alice Cooper,
          Little Anthony & The Imperials, and The Diamonds. Joe is credited for
          his recording work with Johnny Mars, a well-known UK blues harmonica
          player known as the Jimi Hendrix of harmonica. In 2003, after a near
          20 year run supporting artists, Joe left the band to concentrate on
          his family. In 2005 started volunteering at his local church on guitar
          and vocals. He co-led as worship leader until moving to the Sacramento
          area in early 2018. After a 45+ year career in music he is still at it
          playing in his own bands locally in the Sacramento and Bay Area.
        </p>
      </div>
      <div className="mike1-container">
        <img src={mike1}></img>
        <p>
          Michael Gregory, a Sacramento native, has toured/recorded with
          multiple #1 artists in several genres including Steve Holy, Jo Dee
          Messina, Shane McAnally, SWV, Eric Benet, Roger Smith, Wayman Tisdale,
          Robert Brookins, Brent Bourgeois, and The Osmond Brothers. His first
          real band experience came at age 14, playing with Buck Owens' cousin,
          Dale Owens, in the gospel group Joy. The band also provided Michael
          with his first experience in a recording studio when the band made a
          record with Merle Haggard guitarist, Jimmy Baughman. TV appearances
          include Tonight Show, David Letterman, Today Show, CNN's Entertainment
          This Week and five appearances on the Grand Ole Opry. He has played on
          hundreds of artist CDs, TV show themes and national TV & radio ad
          campaigns. Michael returned to his hometown of Sacramento to marry his
          wife, Jenann, in 2018 after 20 years in Nashville and is currently
          playing with a host of local bands.
        </p>
      </div>
      <div className="mike2-container">
        <img src={mike2}></img>
        <p>
          Michael Curtis Jr., originally from Seatle, now living in the greater
          Sacramento, started his musical journey in the mid 1980's. In school
          Michael was lucky enough to have good musical guidance, pushing him to
          his limits. Michael toured Japan in the late eighties supporting jazz
          great, Bobby Shew. Fast forward 40 years later…. Michael has performed
          with countless musicians, working as a professional side musician.
          Michael has worked with producers and musicians such as: Stanley
          Turrentine, Harry “Sweets” Edison, Mike Pinder (Moody Blues) Roger
          Smith (Tower of Power) Fred Radke (Harry James Orchestra) as well as
          playing over the years in various Blues, Funk, Jazz, Jam Bands. In the
          early 2000's Michael started working with and endorsing drum
          manufacturers, Trick Drums USA, Amedia Cymbals, and Headhunters Sticks
          & Creations. Michael is a master of the groove, which is what makes
          him a perfect fit for his current projects that include several Local
          Bands and The Collective.
        </p>
      </div>
      <div className="mike3-container">
        <img src={mike3}></img>
        <p>
          Michael Upton, originally from the San Francisco Bay Area and is now
          residing in Petaluma California. Michael grew up in a musical
          household. He is a lifelong music lover and longtime working Bassist
          with a passion and keen interest in the incredible benefits of making
          music and the musical lifestyle. He spent much of the eighties in the
          Los Angeles and San Francisco rock music scene playing high profile
          clubs, Troubadour, The Whiskey, Great American Music Hall, Wolfgang's,
          alongside bands Racer X, Guns N' Roses, Poison, and Cinderella. Mike
          has shared the stage and supported artists Charlie Musslewhite, Dick
          Dale, Leo Kottke, Keb Mo, and Darrell Mansfield, among others. Mike
          took a break from the rigors of band life to go on and start the
          highly successful Kala Brand Music Company, with locations in
          Petaluma, Ca., Ashland, Va., and Honolulu, Hi. Kala is one of the most
          well-known instrument brands and focuses on everything Ukulele and is
          also known for the U-Bass, bass guitar. Mike is back at it continuing
          his music career playing in the SF Bay Area and Sacramento regions
          with his favorite local bands.
        </p>
      </div>
    </div>
  );
};

export default Meet;
