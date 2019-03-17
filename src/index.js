import "./styles.css";
import cytoscape from "cytoscape";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

var cy = cytoscape({
  container: document.getElementById("cy"), // container to render in

  boxSelectionEnabled: false,
  autounselectify: true,

  style: fetch("src/cy-style.json").then(function(res) {
    return res.json();
  }),

  elements: {
    nodes: [
      { data: { id: "Gorvas" } },
      { data: { id: "Gregory" } },
      { data: { id: "Lilia" } },
      { data: { id: "Lilliana" } },
      { data: { id: "Mayelre" } },
      { data: { id: "Orit" } },
      { data: { id: "Reave" } },
      { data: { id: "Rei" } },
      { data: { id: "Toad" } },
      { data: { id: "Xaikon" } },
      { data: { id: "Zhen" } }
    ],
    edges: [
      // GORVAS
      {
        data: {
          source: "Gorvas",
          target: "Gregory",
          label: "A bit indecent, but a fine fellow nonetheless :)"
        },
        classes: "autorotate",
        style: {
          "line-color": "blue",
          "target-arrow-color": "blue"
        }
      },
      {
        data: {
          source: "Gorvas",
          target: "Lilia",
          label:
            "Somewhat new to the party, but has shown herself to be capable :)"
        },
        classes: "autorotate",
        style: {
          "line-color": "blue",
          "target-arrow-color": "blue"
        }
      },
      {
        data: {
          source: "Gorvas",
          target: "Lilliana",
          label: "Heals me, making sure i don't die X)"
        },
        classes: "autorotate",
        style: {
          "line-color": "green",
          "target-arrow-color": "green"
        }
      },
      {
        data: {
          source: "Gorvas",
          target: "Mayelre",
          label: "A complete coward, will do whatever to save her own skin x("
        },
        classes: "autorotate",
        style: {
          "line-color": "red",
          "target-arrow-color": "red"
        }
      },
      {
        data: {
          source: "Gorvas",
          target: "Orit",
          label: "A compassionate man and a capable warrior :)"
        },
        classes: "autorotate",
        style: {
          "line-color": "blue",
          "target-arrow-color": "blue"
        }
      },
      {
        data: {
          source: "Gorvas",
          target: "Reave",
          label: "A tad eccentric. but seemed alright :|"
        },
        classes: "autorotate",
        style: {
          "line-color": "yellow",
          "target-arrow-color": "yellow"
        }
      },
      {
        data: {
          source: "Gorvas",
          target: "Rei",
          label: "A fine GF for Zhen, but needs more training for combat :)"
        },
        classes: "autorotate",
        style: {
          "line-color": "blue",
          "target-arrow-color": "blue"
        }
      },
      {
        data: {
          source: "Gorvas",
          target: "Toad",
          label: "A true warrior. Never gives up for his friends. x)"
        },
        classes: "autorotate",
        style: {
          "line-color": "green",
          "target-arrow-color": "green"
        }
      },
      {
        data: {
          source: "Gorvas",
          target: "Xaikon",
          label: "Gets the job done, no matter what :)"
        },
        classes: "autorotate",
        style: {
          "line-color": "blue",
          "target-arrow-color": "blue"
        }
      },
      {
        data: {
          source: "Gorvas",
          target: "Zhen",
          label: "Has grown to be a fine man, but still has room to mature. x)"
        },
        classes: "autorotate",
        style: {
          "line-color": "green",
          "target-arrow-color": "green"
        }
      },
      // GREGORY
      {
        data: {
          source: "Gregory",
          target: "Gorvas",
          label: "Good friend, good fighter. Glad to have you with us. :)"
        },
        classes: "autorotate",
        style: {
          "line-color": "blue",
          "target-arrow-color": "blue"
        }
      },
      {
        data: {
          source: "Gregory",
          target: "Lilia",
          label: "Didn't let me steal her painting, but is pretty cool :)"
        },
        classes: "autorotate",
        style: {
          "line-color": "blue",
          "target-arrow-color": "blue"
        }
      },
      {
        data: {
          source: "Gregory",
          target: "Lilliana",
          label: "Knowledgable and kind. Hard to dislike. :)"
        },
        classes: "autorotate",
        style: {
          "line-color": "blue",
          "target-arrow-color": "blue"
        }
      },
      {
        data: {
          source: "Gregory",
          target: "Mayelre",
          label:
            "Kind of a bitch. Has few redeemable qualities, but is a good drinking buddy :| "
        },
        classes: "autorotate",
        style: {
          "line-color": "yellow",
          "target-arrow-color": "yellow"
        }
      },
      {
        data: {
          source: "Gregory",
          target: "Orit",
          label: "Is a rock. Does good shit, but bark tea is bad. :)"
        },
        classes: "autorotate",
        style: {
          "line-color": "blue",
          "target-arrow-color": "blue"
        }
      },
      {
        data: {
          source: "Gregory",
          target: "Reave",
          label:
            "Chopped off my horn, gave me a way out of my old pact. feelsgoodman. :)"
        },
        classes: "autorotate",
        style: {
          "line-color": "blue",
          "target-arrow-color": "blue"
        }
      },
      {
        data: {
          source: "Gregory",
          target: "Rei",
          label:
            "Friendly, but don't really know much about her besides the restaurant. :|"
        },
        classes: "autorotate",
        style: {
          "line-color": "yellow",
          "target-arrow-color": "yellow"
        }
      },
      {
        data: {
          source: "Gregory",
          target: "Toad",
          label: "Total badass. Great fighter and planner. X)"
        },
        classes: "autorotate",
        style: {
          "line-color": "green",
          "target-arrow-color": "green"
        }
      },
      {
        data: {
          source: "Gregory",
          target: "Xaikon",
          label:
            "Edgyboy is edgy. Needs to take a chill pill and hop into toad's hot tub for a bit. :|"
        },
        classes: "autorotate",
        style: {
          "line-color": "yellow",
          "target-arrow-color": "yellow"
        }
      },
      {
        data: {
          source: "Gregory",
          target: "Zhen",
          label:
            "Stampede is hilarious. A little bit naive, but still pretty smart. :)"
        },
        classes: "autorotate",
        style: {
          "line-color": "blue",
          "target-arrow-color": "blue"
        }
      },
      // Lilia
      {
        data: { source: "Lilia", target: "Gorvas", label: "IDK :|" },
        classes: "autorotate",
        style: { "line-color": "yellow", "target-arrow-color": "yellow" }
      },
      {
        data: {
          source: "Lilia",
          target: "Gregory",
          label:
            "Tried to steal my painting but also agreed to help rescue princess Reia :)"
        },
        classes: "autorotate",
        style: { "line-color": "blue", "target-arrow-color": "blue" }
      },
      {
        data: {
          source: "Lilia",
          target: "Lilliana",
          label: "A good friend! Very knowledgeable and I admire that X)"
        },
        classes: "autorotate",
        style: { "line-color": "green", "target-arrow-color": "green" }
      },
      {
        data: {
          source: "Lilia",
          target: "Mayelre",
          label:
            "Had a rough past few years. I feel ya. Also took my beer for me :)"
        },
        classes: "autorotate",
        style: { "line-color": "blue", "target-arrow-color": "blue" }
      },
      {
        data: { source: "Lilia", target: "Orit", label: "Funny :)" },
        classes: "autorotate",
        style: { "line-color": "blue", "target-arrow-color": "blue" }
      },
      {
        data: { source: "Lilia", target: "Reave", label: "No comment. x(" },
        classes: "autorotate",
        style: { "line-color": "red", "target-arrow-color": "red" }
      },
      {
        data: {
          source: "Lilia",
          target: "Rei",
          label: "Seems friendly, but I only really see you in battle :)"
        },
        classes: "autorotate",
        style: { "line-color": "blue", "target-arrow-color": "blue" }
      },
      {
        data: {
          source: "Lilia",
          target: "Toad",
          label: "Takes a lot of jokes from the party, can kill some stuff :|"
        },
        classes: "autorotate",
        style: { "line-color": "yellow", "target-arrow-color": "yellow" }
      },
      {
        data: {
          source: "Lilia",
          target: "Xaikon",
          label: "Shielded me in battle :)"
        },
        classes: "autorotate",
        style: { "line-color": "blue", "target-arrow-color": "blue" }
      },
      {
        data: {
          source: "Lilia",
          target: "Zhen",
          label: "Very friendly but can't keep a secret :)"
        },
        classes: "autorotate",
        style: { "line-color": "blue", "target-arrow-color": "blue" }
      },
      // Lilliana
      {
        data: {
          source: "Lilliana",
          target: "Gorvas",
          label: "Takes hits and distracts enemies so I don't die! :)"
        },
        classes: "autorotate",
        style: { "line-color": "blue", "target-arrow-color": "blue" }
      },
      {
        data: {
          source: "Lilliana",
          target: "Gregory",
          label: "Pretty cool dude, level headed during party discussions :)"
        },
        classes: "autorotate",
        style: { "line-color": "blue", "target-arrow-color": "blue" }
      },
      {
        data: {
          source: "Lilliana",
          target: "Lilia",
          label: "A wise gentle soul worthy of emulating X)"
        },
        classes: "autorotate",
        style: { "line-color": "green", "target-arrow-color": "green" }
      },
      {
        data: {
          source: "Lilliana",
          target: "Mayelre",
          label:
            "Thinks we're definitely great friends because female bonding X)"
        },
        classes: "autorotate",
        style: { "line-color": "green", "target-arrow-color": "green" }
      },
      {
        data: {
          source: "Lilliana",
          target: "Orit",
          label: "Cool cause deity things but kinda reserved :) "
        },
        classes: "autorotate",
        style: { "line-color": "blue", "target-arrow-color": "blue" }
      },
      {
        data: { source: "Lilliana", target: "Reave", label: ":|" },
        classes: "autorotate",
        style: { "line-color": "yellow", "target-arrow-color": "yellow" }
      },
      {
        data: {
          source: "Lilliana",
          target: "Rei",
          label: "Cool magical being! X)"
        },
        classes: "autorotate",
        style: { "line-color": "green", "target-arrow-color": "green" }
      },
      {
        data: {
          source: "Lilliana",
          target: "Toad",
          label: "Good fighter, good compromiser :)"
        },
        classes: "autorotate",
        style: { "line-color": "blue", "target-arrow-color": "blue" }
      },
      {
        data: {
          source: "Lilliana",
          target: "Xaikon",
          label: "Quiet and dark but seems pretty smart :)"
        },
        classes: "autorotate",
        style: { "line-color": "blue", "target-arrow-color": "blue" }
      },
      {
        data: {
          source: "Lilliana",
          target: "Zhen",
          label:
            "Well intentioned, but probably shouldn't talk diplomatically. Cool magic though! X)"
        },
        classes: "autorotate",
        style: { "line-color": "green", "target-arrow-color": "green" }
      },
      //Mayelre
      {
        data: {
          source: "Mayelre",
          target: "Gorvas",
          label: "X("
        },
        classes: "autorotate",
        style: { "line-color": "red", "target-arrow-color": "red" }
      },
      {
        data: {
          source: "Mayelre",
          target: "Gregory",
          label: "accepts drinks from me :)"
        },
        classes: "autorotate",
        style: { "line-color": "blue", "target-arrow-color": "blue" }
      },
      {
        data: {
          source: "Mayelre",
          target: "Lilia",
          label:
            "not as clueless about non-aboleth stuff as I thought you'd be. Cares. :)"
        },
        classes: "autorotate",
        style: { "line-color": "blue", "target-arrow-color": "blue" }
      },
      {
        data: {
          source: "Mayelre",
          target: "Lilliana",
          label:
            "You kind of forced your friendship on me but I'll never admit it :)"
        },
        classes: "autorotate",
        style: { "line-color": "blue", "target-arrow-color": "blue" }
      },
      {
        data: {
          source: "Mayelre",
          target: "Orit",
          label: "tolerates when not complaining about my alcohol problem :|"
        },
        classes: "autorotate",
        style: { "line-color": "yellow", "target-arrow-color": "yellow" }
      },
      {
        data: {
          source: "Mayelre",
          target: "Reave",
          label:
            "Something about you kind of freaks me out but I can't pinpoint what it is :|"
        },
        classes: "autorotate",
        style: { "line-color": "yellow", "target-arrow-color": "yellow" }
      },
      {
        data: { source: "Mayelre", target: "Rei", label: "Actively avoids :(" },
        classes: "autorotate",
        style: { "line-color": "orange", "target-arrow-color": "orange" }
      },
      {
        data: {
          source: "Mayelre",
          target: "Toad",
          label: "doesn't hate you as much as Xaikon :("
        },
        classes: "autorotate",
        style: { "line-color": "orange", "target-arrow-color": "orange" }
      },
      {
        data: {
          source: "Mayelre",
          target: "Xaikon",
          label: "Mayelre hates you X("
        },
        classes: "autorotate",
        style: { "line-color": "red", "target-arrow-color": "red" }
      },
      {
        data: {
          source: "Mayelre",
          target: "Zhen",
          label: "asks dumb questions but isnt annoying :|"
        },
        classes: "autorotate",
        style: { "line-color": "yellow", "target-arrow-color": "yellow" }
      },
      // Orit
      {
        data: {
          source: "Orit",
          target: "Gorvas",
          label: "A good warrior, but could drink less. Kind of rude. :)"
        },
        classes: "autorotate",
        style: { "line-color": "blue", "target-arrow-color": "blue" }
      },
      {
        data: {
          source: "Orit",
          target: "Gregory",
          label:
            "A strong and intelligent man. Reliable, but likes to drink. :)"
        },
        classes: "autorotate",
        style: { "line-color": "blue", "target-arrow-color": "blue" }
      },
      {
        data: {
          source: "Orit",
          target: "Lilia",
          label: "A good friend. Reliable and friendly. X)"
        },
        classes: "autorotate",
        style: { "line-color": "green", "target-arrow-color": "green" }
      },
      {
        data: {
          source: "Orit",
          target: "Lilliana",
          label:
            "A good person, though I feel they are slightly disingenuous. :)"
        },
        classes: "autorotate",
        style: { "line-color": "blue", "target-arrow-color": "blue" }
      },
      {
        data: {
          source: "Orit",
          target: "Mayelre",
          label:
            "Though well-meaning-ish, she is a belligerant drunk. I have hope for her yet. :|"
        },
        classes: "autorotate",
        style: { "line-color": "yellow", "target-arrow-color": "yellow" }
      },
      {
        data: {
          source: "Orit",
          target: "Reave",
          label: "A person I respect, albeit rude at times. :)"
        },
        classes: "autorotate",
        style: { "line-color": "blue", "target-arrow-color": "blue" }
      },
      {
        data: {
          source: "Orit",
          target: "Rei",
          label: "A useful and friendly enough companion. :)"
        },
        classes: "autorotate",
        style: { "line-color": "blue", "target-arrow-color": "blue" }
      },
      {
        data: {
          source: "Orit",
          target: "Toad",
          label:
            "A well-rounded and helpful friend. I trust him and respect his opinion. X)"
        },
        classes: "autorotate",
        style: { "line-color": "green", "target-arrow-color": "green" }
      },
      {
        data: {
          source: "Orit",
          target: "Xaikon",
          label:
            "Though we do not se eye to eye, he is a good friend who is (mostly) trustworthy. :)"
        },
        classes: "autorotate",
        style: { "line-color": "blue", "target-arrow-color": "COblueLOR" }
      },
      {
        data: {
          source: "Orit",
          target: "Zhen",
          label:
            "Means well, must has much to learn. He is a very good warrior. :)"
        },
        classes: "autorotate",
        style: { "line-color": "blue", "target-arrow-color": "blue" }
      },
      // Reave
      {
        data: { source: "Reave", target: "Gorvas", label: "Job Competitor :|" },
        classes: "autorotate",
        style: { "line-color": "yellow", "target-arrow-color": "yellow" }
      },
      {
        data: {
          source: "Reave",
          target: "Gregory",
          label: "Simultaneously Amusing and Depressing :|"
        },
        classes: "autorotate",
        style: { "line-color": "yellow", "target-arrow-color": "yellow" }
      },
      {
        data: { source: "Reave", target: "Lilia", label: "Too Sentient :(" },
        classes: "autorotate",
        style: { "line-color": "orange", "target-arrow-color": "orange" }
      },
      {
        data: {
          source: "Reave",
          target: "Lilliana",
          label: "Get's in the way of the Hunt :|"
        },
        classes: "autorotate",
        style: { "line-color": "yellow", "target-arrow-color": "yellow" }
      },
      {
        data: {
          source: "Reave",
          target: "Mayelre",
          label: "Might Have Attacked You if It wasn't Against the Rules :|"
        },
        classes: "autorotate",
        style: { "line-color": "yellow", "target-arrow-color": "yellow" }
      },
      {
        data: { source: "Reave", target: "Orit", label: "Optimist :|" },
        classes: "autorotate",
        style: { "line-color": "yellow", "target-arrow-color": "yellow" }
      },
      {
        data: {
          source: "Reave",
          target: "Rei",
          label: "Might be Able to Hunt If Zhen Died :|"
        },
        classes: "autorotate",
        style: { "line-color": "yellow", "target-arrow-color": "yellow" }
      },
      {
        data: { source: "Reave", target: "Toad", label: "Toad :)" },
        classes: "autorotate",
        style: { "line-color": "blue", "target-arrow-color": "blue" }
      },
      {
        data: {
          source: "Reave",
          target: "Xaikon",
          label: "Why Didn't You Kill Me :|"
        },
        classes: "autorotate",
        style: { "line-color": "yellow", "target-arrow-color": "yellow" }
      },
      {
        data: { source: "Reave", target: "Zhen", label: "Young and Menace :|" },
        classes: "autorotate",
        style: { "line-color": "yellow", "target-arrow-color": "yellow" }
      },
      // Rei
      {
        data: {
          source: "Rei",
          target: "Gorvas",
          label: "Boyfriend's Strict Fam :) "
        },
        classes: "autorotate",
        style: { "line-color": "blue", "target-arrow-color": "blue" }
      },
      {
        data: { source: "Rei", target: "Gregory", label: "Decent Jokes :)" },
        classes: "autorotate",
        style: { "line-color": "blue", "target-arrow-color": "blue" }
      },
      {
        data: {
          source: "Rei",
          target: "Lilia",
          label: "Princess Role Model  X)"
        },
        classes: "autorotate",
        style: { "line-color": "green", "target-arrow-color": "green" }
      },
      {
        data: { source: "Rei", target: "Lilliana", label: "Friends X)" },
        classes: "autorotate",
        style: { "line-color": "green", "target-arrow-color": "green" }
      },
      {
        data: { source: "Rei", target: "Mayelre", label: "Rude :(" },
        classes: "autorotate",
        style: { "line-color": "orange", "target-arrow-color": "orange" }
      },
      {
        data: { source: "Rei", target: "Orit", label: "Bad Tea :|" },
        classes: "autorotate",
        style: { "line-color": "yellow", "target-arrow-color": "yellow" }
      },
      {
        data: { source: "Rei", target: "Reave", label: "Pervy Misogynist  X(" },
        classes: "autorotate",
        style: { "line-color": "red", "target-arrow-color": "red" }
      },
      {
        data: { source: "Rei", target: "Toad", label: "Rude :(" },
        classes: "autorotate",
        style: { "line-color": "orange", "target-arrow-color": "orange" }
      },
      {
        data: {
          source: "Rei",
          target: "Xaikon",
          label: "Rei hates you too X("
        },
        classes: "autorotate",
        style: { "line-color": "red", "target-arrow-color": "red" }
      },
      {
        data: { source: "Rei", target: "Zhen", label: "<3" },
        classes: "autorotate",
        style: { "line-color": "pink", "target-arrow-color": "pink" }
      },
      //Toad
      {
        data: {
          source: "Toad",
          target: "Gorvas",
          label: "A terrifying enemy, but a steadfast friend :)"
        },
        classes: "autorotate",
        style: { "line-color": "blue", "target-arrow-color": "blue" }
      },
      {
        data: {
          source: "Toad",
          target: "Gregory",
          label:
            "Theocracy nobleman, but one of the good ones, his jokes suck though :|"
        },
        classes: "autorotate",
        style: { "line-color": "yellow", "target-arrow-color": "yellow" }
      },
      {
        data: {
          source: "Toad",
          target: "Lilia",
          label:
            "A Near total stranger, but Lilliana trusts her, dealt with the party fairly before :)"
        },
        classes: "autorotate",
        style: { "line-color": "blue", "target-arrow-color": "blue" }
      },
      {
        data: {
          source: "Toad",
          target: "Lilliana",
          label:
            " Toad trusts her for teaching him a little about the common tounge X)"
        },
        classes: "autorotate",
        style: { "line-color": "green", "target-arrow-color": "green" }
      },
      {
        data: {
          source: "Toad",
          target: "Mayelre",
          label: "A coward and a liar, she is both incompetent and disloyal X("
        },
        classes: "autorotate",
        style: { "line-color": "red", "target-arrow-color": "red" }
      },
      {
        data: {
          source: "Toad",
          target: "Orit",
          label:
            "His compassion for others is a great strength, although his habits are odd :)"
        },
        classes: "autorotate",
        style: { "line-color": "blue", "target-arrow-color": "blue" }
      },
      {
        data: {
          source: "Toad",
          target: "Reave",
          label: "Reave and i have grown apart, FAR apart :("
        },
        classes: "autorotate",
        style: { "line-color": "orange", "target-arrow-color": "orange" }
      },
      {
        data: {
          source: "Toad",
          target: "Rei",
          label:
            "Aglebemu finds it easier to think of Rei as an extension of Zhen than a true person :("
        },
        classes: "autorotate",
        style: { "line-color": "orange", "target-arrow-color": "orange" }
      },
      {
        data: {
          source: "Toad",
          target: "Xaikon",
          label: "He is dependable, and competent, :)"
        },
        classes: "autorotate",
        style: { "line-color": "blue", "target-arrow-color": "blue" }
      },
      {
        data: {
          source: "Toad",
          target: "Zhen",
          label:
            "Naive, polite, and a good spellcaster  seems oblivious to consequences :|"
        },
        classes: "autorotate",
        style: { "line-color": "yellow", "target-arrow-color": "yellow" }
      },
      //Xaikon
      {
        data: {
          source: "Xaikon",
          target: "Gorvas",
          label: ":) Reliable and grounded in reality (usually)"
        },
        classes: "autorotate",
        style: { "line-color": "blue", "target-arrow-color": "blue" }
      },
      {
        data: {
          source: "Xaikon",
          target: "Gregory",
          label: ":| A bit too indulgent"
        },
        classes: "autorotate",
        style: { "line-color": "yellow", "target-arrow-color": "yellow" }
      },
      {
        data: {
          source: "Xaikon",
          target: "Lilia",
          label: ":| Don't really know"
        },
        classes: "autorotate",
        style: { "line-color": "yellow", "target-arrow-color": "yellow" }
      },
      {
        data: {
          source: "Xaikon",
          target: "Lilliana",
          label: ":) Not Xaikon's usual type, but can respect her morals"
        },
        classes: "autorotate",
        style: { "line-color": "blue", "target-arrow-color": "blue" }
      },
      {
        data: {
          source: "Xaikon",
          target: "Mayelre",
          label: "X( Foolish, irate, and worse, unpredictable and unreliable."
        },
        classes: "autorotate",
        style: { "line-color": "red", "target-arrow-color": "red" }
      },
      {
        data: {
          source: "Xaikon",
          target: "Orit",
          label:
            ":) A bit eccentric, but a kindred spirit who took a different path"
        },
        classes: "autorotate",
        style: { "line-color": "blue", "target-arrow-color": "blue" }
      },
      {
        data: {
          source: "Xaikon",
          target: "Reave",
          label: ":| Annoying but reliable"
        },
        classes: "autorotate",
        style: { "line-color": "yellow", "target-arrow-color": "yellow" }
      },
      {
        data: {
          source: "Xaikon",
          target: "Rei",
          label: ":( Finds her annoying and tactless"
        },
        classes: "autorotate",
        style: { "line-color": "orange", "target-arrow-color": "orange" }
      },
      {
        data: {
          source: "Xaikon",
          target: "Toad",
          label: ":) Knows how to do a job right"
        },
        classes: "autorotate",
        style: { "line-color": "blue", "target-arrow-color": "blue" }
      },
      {
        data: {
          source: "Xaikon",
          target: "Zhen",
          label: ":| Oblivious, naive, eccentric, but not stupid"
        },
        classes: "autorotate",
        style: { "line-color": "yellow", "target-arrow-color": "yellow" }
      },
      //Zhen
      {
        data: {
          source: "Zhen",
          target: "Gorvas",
          label: "Unclely Authority Figure X)"
        },
        classes: "autorotate",
        style: { "line-color": "green", "target-arrow-color": "green" }
      },
      {
        data: {
          source: "Zhen",
          target: "Gregory",
          label: "Relatable Drunk Bro X)"
        },
        classes: "autorotate",
        style: { "line-color": "green", "target-arrow-color": "green" }
      },
      {
        data: { source: "Zhen", target: "Lilia", label: "Friends X)" },
        classes: "autorotate",
        style: { "line-color": "green", "target-arrow-color": "green" }
      },
      {
        data: {
          source: "Zhen",
          target: "Lilliana",
          label: "Sarenrae Friends X)"
        },
        classes: "autorotate",
        style: { "line-color": "green", "target-arrow-color": "green" }
      },
      {
        data: { source: "Zhen", target: "Mayelre", label: "Aloof Comrade :)" },
        classes: "autorotate",
        style: { "line-color": "blue", "target-arrow-color": "blue" }
      },
      {
        data: { source: "Zhen", target: "Orit", label: "Aloof Comrade :)" },
        classes: "autorotate",
        style: { "line-color": "blue", "target-arrow-color": "blue" }
      },
      {
        data: { source: "Zhen", target: "Reave", label: "Associate :|" },
        classes: "autorotate",
        style: { "line-color": "yellow", "target-arrow-color": "yellow" }
      },
      {
        data: { source: "Zhen", target: "Rei", label: "<3" },
        classes: "autorotate",
        style: { "line-color": "pink", "target-arrow-color": "pink" }
      },
      {
        data: {
          source: "Zhen",
          target: "Toad",
          label: "Knowledgable Comrade :)"
        },
        classes: "autorotate",
        style: { "line-color": "blue", "target-arrow-color": "blue" }
      },
      {
        data: { source: "Zhen", target: "Xaikon", label: "Associate :|" },
        classes: "autorotate",
        style: { "line-color": "yellow", "target-arrow-color": "yellow" }
      }
    ]
  },

  layout: {
    name: "circle",
    rows: 3
  }
});
