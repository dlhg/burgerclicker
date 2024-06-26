import React, { useState, useEffect } from "react";

const level0quips = [
  "Click the big burger to start your journey",
  "A voice in your head says 'click that big burger'",
  "Your soul yearns to click the big burger",
  "The big burger beckons, will you answer?",
  "Destiny awaits, hidden behind the big burger click",
  "Unleash the power within, click the big burger",
  "The secret of the universe is just a click away, on the big burger",
  "The big burger holds the key to enlightenment, click it",
  "Click the big burger, and unlock the gates of possibilities",
  "Embrace the unknown, start by clicking the big burger",
  "A world of wonders lies behind the big burger, click it",
  "Dare to dream, dare to click the big burger",
  "The journey of a thousand clicks begins with the big burger",
  "As the ancient prophecy foretells, click the big burger",
  "The big burger is not just a button, it's a portal to adventure",
  "In a world of uncertainty, the big burger is your constant",
  "Wisdom whispers, 'click the big burger'",
  "The big burger is calling, will you heed its call?",

  "Unlock the achievement of curiosity, click the big burger",
  "The big burger is not just a symbol, it's a revelation",
  "The big burger is your guide in the maze of possibilities, follow it",
  "Click the big burger, and enter the realm of virtual wonders",
  "The big burger is the compass in the vast sea of pixels, follow it",
  "Click the big burger, and transcend the boundaries of the screen",

  "The big burger is the muse of your digital odyssey, click it",

  "The big burger is not just a button, it's a declaration",
  "The big burger is the philosopher's stone of the digital realm",
  "In the matrix of possibilities, the big burger is your chosen path",
  "Click the big burger, for it echoes in the halls of digital eternity",
];
const level1quips = [
  "Five customers enjoyed our burgers today.",
  "The chef is experimenting with new toppings.",
  "Your mom gave a thumbs up.",
  "Our fries are crispy perfection.",
  "The cashier is learning the menu by heart.",
  "The first-timer said our burgers are life-changing.",
  "We ran out of napkins during lunch rush (all 5 customers).",
  "The aroma of grilling patties fills the air.",
  "Our burgers are stealing the spotlight on social media.",
  "The janitor is whistling while cleaning an empty dining area.",
  "We introduced a loyalty card for frequent customers.",
  "Our homemade pickles are a hit among friends.",
  "The chef recommends trying our secret menu.",
  "The milkshake machine is getting a workout.",
  "The delivery guy complimented our burger packaging.",
  "A group of friends decided to make our place their hangout.",
  "The cashier mastered the art of making change.",
  "We received a positive review on a local food blog.",
  "The owner is personally thanking customers for their support.",
  "The WiFi password is spreading faster than the smell of fries.",
  "A customer requested extra pickles and got a high-five.",
  "Someone left a doodle on a napkin declaring love for our burgers.",
  "Our signature burger is the talk of the town.",
  "The chef is considering a veggie burger option.",
  "A local artist wants to display their work on our walls.",
  "A customer suggested a 'build your own burger' night.",
  "We're debating the best burger-to-fry ratio.",

  "A kid left with a balloon, a smile, and a full belly.",
  "The chef is perfecting a secret sauce recipe.",
  "An online order just came in!",

  "A regular customer convinced a friend to join the burger club.",
  "The chef's special got a standing ovation (from the staff).",

  "We're considering expanding the menu based on customer suggestions.",
  "A customer suggested a burger-naming contest.",
  "The cashier memorized a joke for the next order.",
  "The chef is proudly wearing their 'Grill Master' apron.",
  "A couple had their first date at our burger joint.",
  "We're brainstorming ideas for a burger-themed event.",
  "The grill is working overtime to meet demand (all 8 customers).",
  "A food critic walked in and left with a smile.",
  "The cashier's favorite burger is becoming a customer favorite too.",
  "We're contemplating adding a dessert burger to the menu.",
  "A customer requested a 'spicy surprise' and loved it.",
  "The cleaning crew is impressed with the lack of mess.",
  "We received a thank-you card from a satisfied customer.",
  "A regular suggested we host a 'Burger Olympics'.",
  "The chef is creating a 'Burger of the Month' feature.",
  "A customer suggested a drive-thru for convenience.",
  "We're considering themed nights for added fun.",
];

const level2quips = [
  "A line of customers formed during lunch hour!",
  "Word of mouth is bringing in new faces.",
  "Local influencers are raving about our burgers.",
  "We had a record-breaking 20 customers today.",
  "The chef is experimenting with gourmet toppings.",
  "Your mom now recommends our burgers to everyone.",
  "Our outdoor seating is getting more attention.",
  "We're considering expanding the seating area.",
  "A food blogger featured our signature burger.",
  "The cashier is getting faster at handling orders.",
  "The aroma of our burgers is drawing people in from the street.",
  "The cashier is learning to manage peak hours.",
  "A customer brought their friends to try our burgers.",
  "Our burgers are trending on social media.",
  "A customer suggested a collaboration with a local brewery.",
  "The janitor is cleaning tables between customers.",
  "We introduced a 'Burger of the Week' promotion.",
  "The chef is creating a 'fan favorite' burger.",
  "A local newspaper wrote a positive review about us.",
  "A customer asked for our burger recipe (politely declined).",
  "The cashier now recognizes regulars by name.",
  "The WiFi password is becoming well-known in the neighborhood.",
  "A group of coworkers made our place their weekly lunch spot.",
  "We're thinking of introducing a loyalty program.",
  "The chef is considering opening a 'Burger Academy'.",
  "The delivery guy is making more frequent stops.",
  "A customer suggested we participate in a local food festival.",
  "Our milkshake flavors are expanding.",
  "A customer praised our friendly and efficient staff.",
  "We're discussing options for online ordering.",
  "The restaurant playlist is now available on Spotify.",
  "A local celebrity mentioned our burgers on TV.",
  "The chef is getting creative with burger names.",
  "A customer suggested a 'Bring a Friend' discount night.",
  "We're exploring partnerships with nearby businesses.",
  "The cashier recommends our burgers to undecided customers.",
  "A couple celebrated their anniversary at our restaurant.",
  "We're contemplating a 'Burger Happy Hour'.",
  "The chef's specials are becoming customer favorites.",
  "A customer asked if we cater events (considering options).",
  "We received a thank-you email from a satisfied customer.",
  "The janitor found a thank-you note left on a table.",
  "We're thinking of hosting a burger-eating contest.",
  "A customer suggested we offer online cooking classes.",
  "The chef is considering a 'Create Your Own Burger' night.",
  "We're discussing ideas for a mural on the restaurant wall.",
  "A regular customer convinced a local sports team to try our burgers.",
  "We're brainstorming ideas for a loyalty card program.",
];

const level3quips = [
  "The line of customers extends out the door!",
  "We served a record-breaking 50 customers today.",
  "Word of our burgers has reached neighboring towns.",
  "Local celebrities are spotted enjoying our burgers.",
  "The chef is a local culinary sensation.",
  "Your mom proudly declares our burgers are the best.",
  "We're exploring options for a larger dining space.",
  "People are willing to wait for our mouthwatering burgers.",
  "A local magazine featured us on their cover.",
  "The cashier has mastered handling peak-hour rushes.",
  "Our burgers are recommended by local food critics.",
  "The aroma of our burgers wafts through the entire neighborhood.",
  "We introduced a 'Burger Fan Club' with exclusive perks.",
  "The janitor is a local hero for keeping the place spotless.",
  "We're considering opening a second location.",
  "A popular food show expressed interest in featuring us.",
  "The chef is creating a 'Legendary Burger' for the menu.",
  "A customer proposed a 'Burger Appreciation Day' in our honor.",
  "The cashier has a fan following on social media.",
  "The WiFi password is the worst-kept secret in town.",
  "We hosted a corporate event for a local tech giant.",
  "We're contemplating launching a burger-themed merchandise line.",
  "The chef is considering writing a burger recipe book.",
  "The delivery service now dedicates a driver exclusively to us.",
  "A customer suggested a 'Burger and Beer Pairing' event.",
  "Our milkshakes are now considered legendary.",
  "A customer brought their whole family to experience our burgers.",
  "We're thinking of expanding our hours to accommodate demand.",
  "A customer proposed a mural depicting the evolution of our burgers.",
  "The restaurant playlist is available on all major streaming platforms.",
  "A famous food blogger declared us their favorite burger joint.",
  "The cashier is featured in a local magazine as 'The Fastest Hands in Town.'",
  "We're discussing collaborations with renowned chefs.",
  "A customer suggested we host a 'Burger Fest' annually.",
  "The chef is experimenting with exotic ingredients for a new burger.",
  "A group of foodies declared our burgers a 'Culinary Masterpiece.'",
  "We're considering a partnership with a local charity.",
  "The cashier is training a new team member to keep up with demand.",
  "A couple had our burgers at their wedding reception.",
  "We're brainstorming ideas for a burger-themed carnival.",
  "A customer suggested we create a 'Burger Lovers' loyalty program.",
  "The janitor received a standing ovation from customers for their hard work.",
  "We're discussing the possibility of a 'Burger Truck' for events.",
  "A regular customer convinced a famous musician to try our burgers.",
  "We're considering a 'Burger Olympics' with other popular joints.",
];

const level4quips = [
  "The expanded dining area is buzzing with activity!",
  "Today, we served a whopping 100 customers and counting.",
  "People travel from neighboring cities to taste our burgers.",
  "Renowned food critics have declared us the best in the region.",
  "Netflix is filming a documentary about our burger journey.",
  "Local and international food content creators are featuring us in their videos.",
  "Your mom boasts about our burgers to everyone she meets.",
  "We've become a local landmark for burger enthusiasts.",
  "The chef is a celebrity in the culinary world.",
  "Our burgers are featured on the cover of a prestigious food magazine.",
  "The aroma of our burgers is a neighborhood signature.",
  "We introduced a 'VIP Burger Experience' for special occasions.",
  "The janitor is a local legend for maintaining a spotless restaurant.",
  "We've opened a new location in a nearby trendy neighborhood.",
  "A famous food critic named us the 'Burger Kings.'",
  "Our chef is invited to share burger secrets on cooking shows.",
  "A customer proposed a 'Burger Week' celebration.",
  "The cashier is recognized on the street by burger enthusiasts.",
  "We've launched a limited edition 'Signature Burger Collection.'",
  "The WiFi password is practically a town password now.",
  "We hosted a burger-themed event attended by thousands.",
  "We're contemplating opening franchises in other cities.",
  "The chef is writing a book about the art of burger creation.",
  "We're featured in a Netflix series showcasing the best eateries.",
  "A customer suggested a 'Burger and Wine Pairing' night.",
  "Our milkshakes are now considered iconic.",
  "A famous chef expressed interest in collaborating with us.",
  "A customer brought a famous actor to try our burgers.",
  "We're exploring partnerships with international food festivals.",
  "Our restaurant playlist is trending on music streaming platforms.",
  "A renowned travel blogger recommends our burgers worldwide.",
  "We're in talks to launch a line of signature burger sauces.",
  "The cashier is a social media sensation with thousands of followers.",
  "A customer suggested we host a 'Burger Carnival' annually.",
  "We're considering a burger-themed reality show collaboration.",
  "The chef is experimenting with futuristic burger concepts.",
  "A group of foodies declared our burgers a 'Global Culinary Phenomenon.'",
  "We're planning a grand opening for our latest location.",
  "A regular customer convinced a famous chef to visit our restaurant.",
  "We're discussing a 'Burger Connoisseur Club' for exclusive events.",
  "A food critic declared our restaurant a 'Burger Paradise.'",
  "We're brainstorming ideas for a burger-themed amusement park.",
  "A customer suggested a 'Burger and Beer Festival' partnership.",
  "We're in negotiations for a burger-themed TV series.",
];

const level5quips = [
  "Lines are snaking out the door and around the block!",
  "Today, we served an astounding 200 customers and counting.",
  "People from across the country pilgrimage to taste our legendary burgers.",
  "National food critics are hailing us as the burger revolution.",
  "Major TV networks are featuring our story in prime time.",
  "Our chef is a household name in the culinary world.",
  "Even your mom can't stop talking about our burgers to everyone she meets.",
  "We've become a destination for burger enthusiasts worldwide.",
  "The aroma of our burgers is famous across the nation.",
  "We introduced a 'Burger World Tour' for dedicated fans.",
  "The janitor is now considered a guardian of the burger realm.",
  "We've expanded to multiple locations in key cities.",
  "A famous food critic bestowed upon us the title of 'Burger Royalty.'",
  "Our chef is a regular on national talk shows, discussing burger artistry.",
  "Netflix produced a documentary series showcasing our rise to fame.",
  "A customer proposed a 'Burger Hall of Fame' in our honor.",
  "The cashier has fans creating fan clubs in their name.",
  "We've launched a 'Global Burger Passport' for international enthusiasts.",
  "The WiFi password is practically a national secret.",
  "We hosted a burger festival attended by thousands from around the globe.",
  "Major franchises are nervously monitoring our growth.",
  "We're considering international expansions and partnerships.",
  "The chef is writing a groundbreaking book on the philosophy of burgers.",
  "A renowned chef expressed admiration and curiosity about our techniques.",
  "Our milkshakes are now considered a symbol of culinary innovation.",
  "A customer brought a famous politician to try our burgers.",
  "We're in talks for a Hollywood film depicting our burger journey.",
  "Our restaurant playlist is now an official Spotify playlist with millions of followers.",
  "A prominent travel blogger recommends our burgers in every country.",
  "We're collaborating with renowned chefs for exclusive burger creations.",
  "A customer suggested a 'Burger Olympics' with global participation.",
  "Our signature burger is being considered a national treasure.",
  "We're exploring the possibility of a burger-themed reality TV show.",
  "A group of international foodies declared our burgers a 'Culinary Marvel.'",
  "We're planning grand openings for locations in major cities.",
  "A regular customer convinced a famous musician to compose a burger anthem.",
  "We're in discussions for a 'Burger Connoisseur Society' for elite enthusiasts.",
  "A food critic declared our restaurant a 'Global Burger Phenomenon.'",
  "We're brainstorming ideas for a burger-themed museum.",
  "A customer suggested a 'Burger and Music Festival' partnership.",
  "Major burger chains are starting to take inspiration from our menu.",
];

const level6quips = [
  "Our burgers have achieved legendary status around the world!",
  "Every day, we serve an astonishing 500 customers and more.",
  "People travel from every corner of the globe for a taste of our iconic burgers.",
  "International food critics unanimously declare us the epitome of burger perfection.",
  "Top-tier documentaries on major streaming platforms delve into our unparalleled burger journey.",
  "Our chef is hailed as the maestro of burger artistry on every continent.",
  "Even your mom is on a global tour, spreading the gospel of our burgers.",
  "We've become a pilgrimage site for burger connoisseurs from all walks of life.",
  "The aroma of our burgers is considered the eighth wonder of the world.",
  "We've established a 'Burger Odyssey' for the most dedicated fans, spanning continents.",
  "The janitor is now considered the guardian of burger transcendence.",
  "Our empire spans across major cities, each location a temple dedicated to burger excellence.",
  "A renowned critic bestowed upon us the title of 'Supreme Burger Deity.'",
  "Our chef is not only on talk shows but is invited to culinary symposiums globally.",
  "Global streaming services produce an entire series dedicated to decoding our burger secrets.",
  "A customer proposed a 'Burger Utopia' in our honor, a theme park of culinary ecstasy.",
  "The cashier has fans around the world, with followers creating international fan clubs.",
  "We've launched a 'Burger Galactic Passport' for enthusiasts from other planets.",
  "The WiFi password is a cryptic code, known only to the chosen few who've tasted our burgers.",
  "We hosted a mega burger festival attended by enthusiasts from every country.",
  "Major franchises and culinary institutions are humbled by our culinary prowess.",
  "Our expansion includes locations on every continent, even Antarctica.",
  "The chef is working on a culinary manifesto, a treatise on the philosophy of burgers.",
  "A legendary chef expressed awe and declared our burgers a cosmic culinary phenomenon.",
  "Our milkshakes are not just drinks; they're considered elixirs of gastronomic enlightenment.",
  "A customer brought an alien dignitary to try our intergalactic burgers.",
  "We're in talks for a blockbuster film featuring our burgers as the saviors of taste.",
  "Our restaurant playlist is now playing on satellites orbiting the Earth.",
  "A famous astronaut recommends our burgers for interstellar travelers.",
  "We're collaborating with extraterrestrial chefs for a truly out-of-this-world burger creation.",
  "A customer suggested a 'Burger Olympics' with competitors from every galaxy.",
  "Our signature burger is declared a universal symbol of flavor harmony.",
  "We're considering a space-themed reality show centered around our culinary voyage.",
  "A group of intergalactic foodies declared our burgers a 'Culinary Cosmos Marvel.'",
  "We're planning a celestial grand opening for our lunar location.",
  "A regular customer convinced a famous alien artist to create a burger-themed masterpiece.",
  "We're in discussions for a 'Burger Supreme Council' gathering the wisest burger enthusiasts.",
  "A cosmic food critic declared our restaurant the 'Eternal Burger Nexus.'",
  "We're brainstorming ideas for a burger-themed space station.",
  "A customer suggested a 'Burger and Nebula Festival' partnership.",
  "Burger chains across the universe are quaking as they bow to the supremacy of our menu.",
];

const level7quips = [
  "Our burger automation has streamlined global logistics, making deliveries faster than the speed of light!",
  "The peaceful burger revolution not only brought world peace but also declared burgers the universal symbol of unity.",
  "Every person on Earth now works for and eats at our restaurant — the global hub of culinary delight!",
  "Burger drones fill the skies, ensuring everyone, everywhere, has access to our legendary creations.",
  "The International Burger Day is now a global holiday, celebrated by billions with joyous burger feasts.",
  "Our automated burger chefs are so efficient that they've become honorary members of the International Space Station crew.",
  "The aroma of our burgers is carried by the winds to the farthest corners of the Earth, tempting taste buds globally.",
  "Burger diplomacy is now the preferred method of resolving international conflicts — a burger for peace!",
  "The United Nations adopted a resolution declaring our burgers a fundamental human right.",
  "Our restaurant is the first stop for extraterrestrial visitors, who arrive for a taste of the universe's best burgers.",
  "A burger-inspired anthem is played daily in every country, fostering a sense of harmony and joy.",
  "Our burger chain is now the largest employer in the world, providing jobs and delicious meals for every individual.",
  "Burger enthusiasts participate in a yearly pilgrimage to our birthplace, where they're welcomed with open arms and buns.",
  "The International Burger Council, composed of leaders from every nation, convenes regularly to discuss the future of burger excellence.",
  "Our restaurant's logo is now etched on the moon, visible to all who gaze at the night sky.",
  "Burger-themed space shuttles offer exclusive rides to our orbital burger paradise for lucky patrons.",
  "Our automated burger assembly lines are so advanced that they're studied by aspiring engineers from every educational institution.",
  "The world has embraced burger-based currency, and our burgers are the gold standard of economic prosperity.",
  "Burger festivals are held on every continent, attracting millions in celebration of the ultimate culinary experience.",
  "The global language of happiness is now the language of burger appreciation.",
  "Our restaurant's success is so vast that it's featured in textbooks as a case study in business and gastronomic achievement.",
  "The International Burger Games, a prestigious sporting event, draws athletes from around the globe to compete in burger-themed challenges.",
  "Burger-themed fashion has taken over runways, and our logo is a symbol of style and good taste.",
  "The aroma of our burgers has become a recognized scent in the perfume industry, creating a fragrance of happiness and satisfaction.",
  "Our chefs have become global celebrities, with fans around the world eagerly awaiting their next culinary masterpiece.",
  "The world's transportation networks have adapted to deliver our burgers with unprecedented efficiency, ensuring no one goes without a taste of perfection.",
  "Burger enthusiasts from every culture collaborate to create new and innovative burger recipes, adding to our ever-expanding menu.",
  "Our burger-inspired art installations are displayed in renowned museums, inspiring generations with the beauty of gastronomy.",
  "Every newborn is gifted a burger-shaped rattle, symbolizing a lifelong journey of burger enjoyment and appreciation.",
  "Our restaurant is the official sponsor of the World Burger Olympics, a spectacular event that showcases the talents of burger chefs from every nation.",
];

export default function Quips(props) {
  const [currentQuip, setCurrentQuip] = useState(level0quips[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newQuip = getQuipBasedOnLevel(props.currentQuipLevel);
      setCurrentQuip(newQuip);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [props.currentQuipLevel]);

  function getQuipBasedOnLevel(level) {
    switch (level) {
      case 0:
        return level0quips[Math.floor(Math.random() * level0quips.length)];
      case 1:
        return level1quips[Math.floor(Math.random() * level1quips.length)];
      case 2:
        return level2quips[Math.floor(Math.random() * level2quips.length)];
      case 3:
        return level3quips[Math.floor(Math.random() * level3quips.length)];
      case 4:
        return level4quips[Math.floor(Math.random() * level4quips.length)];
      case 5:
        return level5quips[Math.floor(Math.random() * level5quips.length)];
      case 6:
        return level6quips[Math.floor(Math.random() * level6quips.length)];
      case 7:
        return level7quips[Math.floor(Math.random() * level7quips.length)];
      default:
        return ""; // Handle unknown levels
    }
  }
  function handleClick() {
    const newQuip = getQuipBasedOnLevel(props.currentQuipLevel);
    setCurrentQuip(newQuip);
  }
  return (
    <>
      <div
        className={
          props.isBoostActive ? "quip--text--boost--active" : "quip--text"
        }
        onClick={() => handleClick()}
      >
        {props.isBoostActive ? "B O O S T" : currentQuip}
      </div>
      <br />
    </>
  );
}
