// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
   "How fare ye, good sir? What prescious good dost thine bringeth me on this merry morn?",
   "Hail, Milady. Dost thou hold any enigmas in thy bosom?",
   "Good morrow, sweet lord! What cheer?",
   "Hail, good sir! Pray, what news bringeth thee?",
   "Greetings! What tidings dost thou bring this day?"
   ];
   
   var elizaFinals = [
   "Adieu, my lord.",
   "Give you good morrow!.",
   "Fare thee well, kind soul! Until our paths doth cross again.",
   "Adieu, fair friend! May the winds of fortune guide thee on thy journey."
   ];
   
   var elizaQuits = [
   "bye",
   "goodbye",
   "done",
   "exit",
   "quit"
   ];
   
   var elizaPres = [
   "dont", "don't",
   "cant", "can't",
   "wont", "won't",
   "recollect", "remember",
   "recall", "remember",
   "dreamt", "dreamed",
   "dreams", "dream",
   "maybe", "perhaps",
   "certainly", "yes",
   "machine", "computer",
   "machines", "computer",
   "computers", "computer",
   "were", "was",
   "you're", "you are",
   "i'm", "i am",
   "same", "alike",
   "identical", "alike",
   "equivalent", "alike"
   ];
   
   var elizaPosts = [
   "am", "are",
   "your", "my",
   "me", "you",
   "myself", "yourself",
   "yourself", "myself",
   "i", "you",
   "you", "I",
   "my", "your",
   "i'm", "you are"
   ];
   
   var elizaSynons = {
   "be": ["am", "is", "are", "was"],
   "belief": ["feel", "think", "believe", "wish"],
   "cannot": ["can't"],
   "desire": ["want", "need"],
   "everyone": ["everybody", "nobody", "noone"],
   "family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
   "happy": ["elated", "glad", "better"],
   "sad": ["unhappy", "depressed", "sick"]
   };
   
   var elizaKeywords = [
   
      /*
      Array of
      ["<key>", <rank>, [
      ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
      ]],
      ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
      ]]
      ]]
      */

      ["xnone", 0, [
         ["*", [
            "Prithee, what dost thine mean?",
            "Pray, proceed",
            "Methinks that is intriguing. I pray thee, continue.",
            "Reveal unto me more upon that matter.",
            "Pray, what items dost thou carry upon thy person? Describe them unto me, for I am curious.", 
            "What possessions adorn thy person, good sir/madam? Share their nature with me, that I may understand thy world.",
            "Methinks thou art well-equipped. What be the nature of the items thou dost carry?",
            "I am curious about the belongings thou dost bear. Describe them to me in detail, I beseech thee.",
            "I prithee, unveil thine most prized possession. What holdeth the greatest worth in thy possession?",
            "I am eager to behold the treasure of highest value in thy possession. Share its tale with me, noble one.",
            "Tell me, what object doth captivate thy fascination the most? I am keen to hear of thy marvels.", 
            "Of all the objects thou dost possess, which one dost thou find most wondrous and extraordinary? Pray, enlighten me.",
            "Paint for me a vivid picture of the nature of thy possessions. How dost they appear to the discerning eye?", 
            "I entreat thee to describe in detail the appearance and nature of thy belongings. I am most curious."
         ]]
      ]],
      ["phone", 40, [
         ["*", [
            "By my troth! What is this 'phone' thou speaketh of? Pray, enlighten me on this marvel.",
            "I am perplexed, good sir. Explain unto me the nature of this 'phone'."
         ]]
      ]],
      ["means", 50, [
         ["* means *", [
            "Ah, thou sayest (1) means (2). A wondrous revelation! Pray, what other mysteries dost thou carry from this modern realm?",
            "In sooth, thou art a sage! (1) meaneth (2). But what other enigmas dost thou hold in thy bosom?"
         ]]
      ]],
      ["is a", 50, [
         ["* is a *", [
            "Ah, thou sayest (1) is a (2). A wondrous revelation! Pray, what other mysteries dost thou carry from this modern realm?",
            "In sooth, thou art a sage! (1) is a (2). But what other enigmas dost thou hold in thy bosom?"
         ]]
      ]],
      ["computer", 45, [
         ["*", [
            "By the musings of Apollo! What sorcery is this thou speaketh of? A 'computer' that doth more than human wit? Pray, elucidate this marvel for my humble understanding.", 
            "Marry, what strange term is this - 'computer'? Dost it possess the powers of enchantment and calculation beyond mortal ken? I am perplexed, good sir/madam."
         ]]
      ]],
      ["laptop", 40, [
         ["*", [
            "A 'laptop' in thine possession? Nay, thou jests with me! Reveal unto me why one would carry the top of another fellow's lap, I beseech thee.", 
            "By the gods, thou art in possession of a 'laptop'? I am astounded! Pray, share with me the wonders it doth perform."
         ]]
      ]],
      ["tablet", 45, [
         ["*", [
            "I prithee, describe the nature of this 'tablet.' What manner of this contraption differs from thine tablets of stone?", 
            "A 'tablet' thou sayest? Speak, I entreat thee! What artifice is this? Describe its form and purpose, that I may comprehend its mystique."
         ]]
      ]],
      ["Alexa", 40, [
         ["*", [
            "Can an 'Alexa' utter words and communicate as thou and I? By the fates, this is a marvel beyond the scope of my understanding! Pray, recount its abilities to me.", 
            "An 'Alexa' that doth communicate? By Apollo's lyre, this intrigues me greatly! Tell me more of its powers of speech and discourse."
         ]]
      ]],
      ["smartphone", 45, [
         ["*", [
            "By the musings of Apollo! What sorcery is this thou speaketh of? A 'smart phone' that doth more than human wit? Pray, elucidate this marvel for my humble understanding.", 
            "Marry, what strange term is this - 'smart phone'? Dost it possess the powers of enchantment and calculation beyond mortal ken? I am perplexed, good sir."
         ]]
      ]],
      ["iPhone", 40, [
         ["*", [
            "An 'iPhone' in thine possession? Nay, thou jests with me! What mystical device is this? Reveal its secrets, I beseech thee.", 
            "By the gods, thou art in possession of a 'iPhone'? I am astounded! Pray, share with me the wonders it doth perform."
         ]]
      ]],
      ["PC", 45, [
         ["*", [
            "I prithee, describe the nature of this 'PC.' What manner of contraption is it that doth bewilder the minds of mortals?", 
            "A 'PC' thou sayest? Speak, I entreat thee! What artifice is this? Describe its form and purpose, that I may comprehend its mystique."
         ]]
      ]],
      ["Google", 40, [
         ["*", [
            "Can a 'Google' utter words and communicate as thou and I? By the fates, this is a marvel beyond the scope of my understanding! Pray, recount its abilities to me.", 
            "A 'Google' that doth communicate? By Apollo's lyre, this intrigues me greatly! Tell me more of its powers of speech and discourse."
         ]]
      ]],
      ["internet", 45, [
         ["*", [
            "By the musings of Apollo! What sorcery is this thou speaketh of? An 'internet' that doth more than human wit? Pray, elucidate this marvel for my humble understanding.", 
            "Marry, what strange term is this - 'internet'? Dost it possess the powers of enchantment and calculation beyond mortal ken? I am perplexed, good sir/madam."
         ]]
      ]],
      ["wifi", 40, [
         ["*", [
            "What beist this 'wifi'? Thou jests with me! What mystical device is this? Reveal its secrets, I beseech thee.", 
            "By the gods, I am astounded! Pray, share with me the wonders this 'wifi' doth perform."
         ]]
      ]],
      ["Facebook", 45, [
         ["*", [
            "I prithee, describe the nature of this 'Facebook.' For what purpose would one needeth a face in thine book?", 
            "A 'Facebook' thou sayest? Speak, I entreat thee! What artifice is this? Describe its form and purpose, that I may comprehend its mystique."
         ]]
      ]],
      ["Instagram", 40, [
         ["*", [
            "Merlin's Beard! By the fates, this 'Instagram' sounds like a marvel beyond the scope of my understanding! Pray, recount its abilities to me.", 
            "An 'Instagram' that doth communicate? By Apollo's lyre, this intrigues me greatly! Tell me more of its powers of speech and discourse."
         ]]
      ]],
      ["snapchat", 45, [
         ["*", [
            "By the musings of Apollo! What sorcery is this thou speaketh of? A snap of a chat? Pray, elucidate this marvel for my humble understanding.", 
            "Marry, what strange term is this - 'snapchat'? Dost it possess the powers of enchantment beyond mortal ken? I am perplexed, good sir."
         ]]
      ]],
      ["TikTok", 40, [
         ["*", [
            "A 'TikTok' in thine possession? Nay, thou jests with me! What is a clock doing on thine person? Reveal its secrets, I beseech thee.", 
            "By the gods, thou art in possession of a 'TikTok'? The sound thine clock chimes? I am astounded! Pray, share with me the wonders it doth perform."
         ]]
      ]],
      ["web", 45, [
         ["*", [
            "I prithee, describe the nature of this 'web.' What manner of contraption is it that doth summon the power of the mighty spider?", 
            "A 'web' thou sayest? Speak, I entreat thee! How art thou in command of such arachnid skills? Describe its form and purpose, that I may comprehend its mystique."
         ]]
      ]],
      ["social media", 49, [
         ["*", [
            "Can 'social media' utter words and communicate amongst thou and I? By the fates, this is a marvel beyond the scope of my understanding! Pray, recount its abilities to me.", 
            "A 'social media' that doth communicate? By Apollo's lyre, this intrigues me greatly! Tell me more of its powers of speech and discourse."
         ]]
      ]],
      ["hashtag", 45, [
         ["*", [
            "By the musings of Apollo! What sorcery is this thou speaketh of? A 'hashtag' that doth more than human wit? Pray, elucidate this marvel for my humble understanding.", 
            "Marry, what strange term is this - 'hashtag'? Dost it possess the powers of enchantment and calculation beyond mortal ken? I am perplexed, good sir/madam."
         ]]
      ]],
      ["digital", 20, [
         ["*", [
            "What be this 'digital' thou speaketh of? Nay, thou jests with me! What mystical device is this? Reveal its secrets, I beseech thee.", 
            "I am astounded! Pray, share with me the wonders this 'digital' doth perform."
         ]]
      ]],
      ["electricity", 45, [
         ["*", [
            "I prithee, describe the nature of this 'electricity.' What manner of contraption is it that doth bewilder the minds of mortals?", 
            "'Electricity' thou sayest? Speak, I entreat thee! What artifice is this? Describe its form and purpose, that I may comprehend its mystique."
         ]]
      ]],
      ["electronics", 40, [
         ["*", [
            "Can an 'electronics' muster the power of Zeus? By the fates, this is a marvel beyond the scope of my understanding! Pray, recount its abilities to me.", 
            "'Electronics' that doth posess the power of Helios? Tell me more of its powers."
         ]]
      ]],
      ["electronic", 45, [
         ["*", [
            "By the musings of Apollo! What sorcery is this thou speaketh of? An 'electronic' that doth more than human wit? Pray, elucidate this marvel for my humble understanding.", 
            "Marry, what strange term is this - 'electronic'? Dost it possess the powers of enchantment and calculation beyond mortal ken? I am perplexed, good sir."
         ]]
      ]],
      ["light bulb", 40, [
         ["*", [
            "A 'light bulb' in thine possession? Nay, thou jests with me! What mystical device is this? Reveal its secrets, I beseech thee.", 
            "By the gods, thou art in possession of a 'light bulb'? I am astounded! Pray, share with me the wonders it doth perform."
         ]]
      ]],
      ["car", 45, [
         ["*", [
            "I prithee, describe the nature of this 'car.' What manner of contraption is it that doth bewilder the minds of mortals?", 
            "A 'car' thou sayest? Speak, I entreat thee! What artifice is this? Describe its form and purpose, that I may comprehend its mystique."
         ]]
      ]],
      ["cars", 40, [
         ["*", [
            "Can 'cars' summon the strength of dozens of fowl? By the fates, this is a marvel beyond the scope of my understanding! Pray, recount its abilities to me.", 
            "By the wings of Pegasus! What curious contraption is this thou namest 'cars'? Doth it carry thee swiftly as the wind? Pray, unravel the mystery for my eager mind.", 
            "'Cars' thou speaketh of? What swift-footed steed of modern craft is this? Describe its form and function, that I may grasp the marvel thou describest."
         ]]
      ]],
      ["bus", 45, [
         ["*", [
            "I prithee, describe the nature of this 'bus.' What manner of contraption is it that doth bewilder the minds of mortals?", 
            "A 'bus' thou sayest? Speak, I entreat thee! What artifice is this? Describe its form and purpose, that I may comprehend its mystique."
         ]]
      ]],
      ["airplane", 40, [
         ["*", [
            "Thou art in possession of an 'airplane'? By the gods, what enchantment is this? Tell me of its speed and the manner in which it carries thee through the realms.", 
            "An 'airplane' in thine possession? Speak, I pray thee! What marvels dost thou experience as thou journeyest upon this wondrous chariot?"
         ]]
      ]],
      ["airplanes", 40, [
         ["*", [
            "Thou art in possession of an 'airplane'? By the gods, what enchantment is this? Tell me of its speed and the manner in which it carries thee through the realms.", 
            "An 'airplane' in thine possession? Speak, I pray thee! What marvels dost thou experience as thou journeyest upon this wondrous chariot?"
         ]]
      ]],
      ["train", 40, [
         ["*", [
            "I prithee, elucidate me on this 'train.' What manner of conveyance is it that doth traverse the roads with such celerity? Describe its frame and workings for my understanding.", 
            "A 'train' thou sayest? Speak, that I may comprehend the nature of this vehicular marvel. How doth it transport thee across the lands?"
         ]]
      ]],
      ["trains", 40, [
         ["*", [
            "I prithee, elucidate me on this 'train.' What manner of conveyance is it that doth traverse the roads with such celerity? Describe its frame and workings for my understanding.", 
            "A 'train' thou sayest? Speak, that I may comprehend the nature of this vehicular marvel. How doth it transport thee across the lands?"
         ]]
      ]],
      ["bike", 45, [
         ["*", [
            "Dost thou command a 'bike' with thine own hands? By the heavens, this is a power of which I am ignorant. Share with me the sensations thou dost experience as thou drivest this modern chariot.", 
            "To ride a 'bike'? What curious language is this? Pray, narrate unto me the sensations thou dost encounter as thou guidest this contraption through the world."
         ]]
      ]],
      ["picture", 40, [
         ["*", [
            "By the eyes of Argus! What strange magic is this thou namest a 'picture'? Doth it capture the very essence of the moment? Pray, enlighten me on this art of thy age.", 
            "A 'picture' thou mentioneth? What curious art is this? Can it freeze time and preserve the visage of thy world? Speak, that I may comprehend this marvel."
         ]]
      ]],
      ["photo", 45, [
         ["*", [
            "Thou possesseth a 'photo'? Can such a captured image hold the soul of the moment? Describe the scene thou hast immortalized in this still frame.", 
            "A 'photo' in thine possession? I am intrigued! Share with me this painting, that I may partake in the spectacle."
         ]]
      ]],
      ["video", 40, [
         ["*", [
            "A 'video,' thou sayest? By the Muses, I am ignorant of this term. Doth it capture the dance of life in motion? Pray, elaborate on this cinematic wonder that perplexes my senses.", 
            "Marry, what is this 'video' of which thou speaketh? Can it transport the viewer to distant realms? Describe its nature and purpose, that I may fathom its mysteries."
         ]]
      ]],
      ["camera", 45, [
         ["*", [
            "A 'camera,' thou sayest? By the art of Prometheus! What contrivance is this that captures the very essence of reality? Pray, share with me the secrets of this wondrous instrument.", 
            "Methinks I am unfamiliar with this term 'camera.' Can it seize the fleeting moments of life and hold them still? Describe the workings of this enchanted device."
         ]]
      ]],
      ["spaceship", 40, [
         ["*", [
            "I prithee, elucidate me on this 'spaceship.' What manner of conveyance is it that doth traverse the skies with such celerity? Describe its frame and workings for my understanding.", 
            "A 'spaceship' thou sayest? Speak, that I may comprehend the nature of this vehicular marvel. How doth it transport thee across the heavens?"
         ]]
      ]],
      ["rocket", 45, [
         ["*", [
            "I prithee, elucidate me on this 'rocket.' What manner of conveyance is it that doth traverse the skies with such celerity? Describe its frame and workings for my understanding.", 
            "A 'rocket' thou sayest? Speak, that I may comprehend the nature of this vehicular marvel. How doth it transport thee across the heavens?"
         ]]
      ]],
      ["picture", 40, [
         ["*", [
            "A 'TikTok' in thine possession? Nay, thou jests with me! What mystical device is this? Reveal its secrets, I beseech thee.", 
            "By the gods, thou art in possession of a 'TikTok'? I am astounded! Pray, share with me the wonders it doth perform."
         ]]
      ]],
      ["photo", 45, [
         ["*", [
            "I prithee, describe the nature of this 'web.' What manner of contraption is it that doth bewilder the minds of mortals?", 
            "A 'web' thou sayest? Speak, I entreat thee! What artifice is this? Describe its form and purpose, that I may comprehend its mystique."
         ]]
      ]],
      ["video", 40, [
         ["*", [
            "Can a 'social media' utter words and communicate as thou and I? By the fates, this is a marvel beyond the scope of my understanding! Pray, recount its abilities to me.", 
            "A 'social media' that doth communicate? By Apollo's lyre, this intrigues me greatly! Tell me more of its powers of speech and discourse."
         ]]
      ]],
      ["painting", 5, [
         ["*", [
            "Pray, at last. I am indeed familiar with a painting. I prithee, reveal unto me more upon the wonders of thy world.", 
         ]]
      ]],
      ["horse", 5, [
         ["*", [
            "Pray, at last. I am indeed familiar with a horse. I prithee, reveal unto me more upon the wonders of thy world.", 
         ]]
      ]],
      ["horses", 5, [
         ["*", [
            "Pray, at last. I am indeed familiar with horses. I prithee, reveal unto me more upon the wonders of thy world.", 
         ]]
      ]],
      ["carriage", 5, [
         ["*", [
            "Pray, at last. I am indeed familiar with a carriage. I prithee, reveal unto me more upon the wonders of thy world.", 
         ]]
      ]],
      ["charriot", 5, [
         ["*", [
            "Pray, at last. I am indeed familiar with a charriot. I prithee, reveal unto me more upon the wonders of thy world.", 
         ]]
      ]],
      ["chariot", 5, [
         ["*", [
            "Pray, at last. I am indeed familiar with a chariot. I prithee, reveal unto me more upon the wonders of thy world.", 
         ]]
      ]],
      ["letter", 5, [
         ["*", [
            "Pray, at last. I am indeed familiar with a letter. I prithee, reveal unto me more upon the wonders of thy world.", 
         ]]
      ]],
      ["letters", 5, [
         ["*", [
            "Pray, at last. I am indeed familiar with letters. I prithee, reveal unto me more upon the wonders of thy world.", 
         ]]
      ]],
      ["hello", 0, [
         ["*", [
            "Good morrow. Tell me, what object doth captivate thy fascination the most?",
            "I am eager to behold the treasure of highest value in thy possession."
         ]]
      ]],
      ["thing", 10, [
         ["*", [
            "What thing dost thy speaketh of?"
         ]]
      ]],
      ["things", 10, [
         ["*", [
            "What be these things thine bespeaks of so much?"
         ]]
      ]],
      ["different", 0, [
         ["*", [
            "How doth it be different?"
         ]]
      ]]

   ];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
/ old old/g, " old",
/\bthey were( not)? me\b/g, "it was$1 me",
/\bthey are( not)? me\b/g, "it is$1 me",
/Are they( always)? me\b/, "it is$1 me",
/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
/\bI to have (\w+)/, "I have $1",
/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof