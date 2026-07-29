/* 周易六十四卦数据 · 爻一爻
 * 字段：name 卦名 | en 英文名 | sym 卦画 | tri 上下卦 | triEn 英文上下卦
 *       gua 卦辞原文 | guaBai 卦辞白话 | guaEn 卦辞英译
 *       xiang 大象传 | xiangEn 大象英译
 *       lines[] 六爻(自下而上)：yao 爻题 | text 爻辞 | bai 白话 | en 英译
 *       yong 用九/用六(仅乾坤)
 */
const YI = {
1: {
  name:"乾为天", en:"Qián · The Creative (Heaven)", sym:"䷀",
  tri:"乾上乾下", triEn:"Heaven over Heaven",
  gua:"元亨利贞。", guaBai:"至为亨通，利于守持正固。", guaEn:"Supremely successful; it furthers one to be steadfast and correct.",
  xiang:"天行健，君子以自强不息。", xiangEn:"Heaven moves with unceasing strength; the superior person strengthens themselves without ceasing.",
  lines:[
    {yao:"初九", text:"潜龙勿用。", bai:"潜伏的龙，暂不施展。", en:"A hidden dragon. Do not act."},
    {yao:"九二", text:"见龙在田，利见大人。", bai:"龙出现在田野，利于见到大人物。", en:"The dragon appears in the field. It furthers one to see the great person."},
    {yao:"九三", text:"君子终日乾乾，夕惕若厉，无咎。", bai:"君子整日勤奋不懈，夜晚仍警惕如临危境，便无灾祸。", en:"The superior person is diligent all day and cautious at night; though danger looms, there is no blame."},
    {yao:"九四", text:"或跃在渊，无咎。", bai:"或腾跃而起，或退处深渊，无灾祸。", en:"Perhaps leaping up, perhaps still in the depths. No blame."},
    {yao:"九五", text:"飞龙在天，利见大人。", bai:"龙飞翔于天空，利于见到大人物。", en:"The dragon flies in the heavens. It furthers one to see the great person."},
    {yao:"上九", text:"亢龙有悔。", bai:"龙飞得过高，将有悔恨。", en:"An arrogant dragon will have cause for regret."}
  ],
  yong:{yao:"用九", text:"见群龙无首，吉。", bai:"出现群龙而无为首者，吉祥。", en:"A flight of dragons without a leader appears. Good fortune."}
},
2: {
  name:"坤为地", en:"Kūn · The Receptive (Earth)", sym:"䷁",
  tri:"坤上坤下", triEn:"Earth over Earth",
  gua:"元亨，利牝马之贞。君子有攸往，先迷后得主，利。西南得朋，东北丧朋。安贞吉。", guaBai:"至为亨通，宜守持如母马般柔顺的正道。君子有所前往，先迷失方向而后找到主人，有利。往西南得到朋友，往东北失去朋友。安于正道则吉祥。", guaEn:"Supreme success, furthered by the perseverance of a mare. The superior person has somewhere to go; first he goes astray, then finds his lord. Gaining friends in the southwest, losing friends in the northeast. Quiet perseverance brings good fortune.",
  xiang:"地势坤，君子以厚德载物。", xiangEn:"The earth's condition is receptive devotion; the superior person carries the outer world with the breadth of their virtue.",
  lines:[
    {yao:"初六", text:"履霜，坚冰至。", bai:"脚踏上霜，坚冰即将到来。", en:"Treading on hoarfrost—solid ice is not far off."},
    {yao:"六二", text:"直方大，不习无不利。", bai:"正直、端方、宏大，不必刻意学习也无所不利。", en:"Straight, square, and great; without effort, nothing is unfavorable."},
    {yao:"六三", text:"含章可贞。或从王事，无成有终。", bai:"含藏文采而能守正。或辅佐君王之事，不居功而有善终。", en:"Hidden lines that one can hold to. If following in a king's service, claim no success but bring things to completion."},
    {yao:"六四", text:"括囊，无咎无誉。", bai:"扎紧口袋般谨慎收敛，无灾祸也无赞誉。", en:"A tied-up sack. No blame, no praise."},
    {yao:"六五", text:"黄裳，元吉。", bai:"黄色的下裳，大为吉祥。", en:"A yellow lower garment brings supreme good fortune."},
    {yao:"上六", text:"龙战于野，其血玄黄。", bai:"群龙争战于郊野，流出青黄相杂的血。", en:"Dragons fight in the meadow; their blood is black and yellow."}
  ],
  yong:{yao:"用六", text:"利永贞。", bai:"利于长久守持正道。", en:"Lasting perseverance furthers."}
},
3: {
  name:"水雷屯", en:"Zhūn · Difficulty at the Beginning", sym:"䷂",
  tri:"坎上震下", triEn:"Water over Thunder",
  gua:"元亨利贞，勿用有攸往，利建侯。", guaBai:"大为亨通，利于守正，不宜急于前往，利于分封诸侯（建立根基）。", guaEn:"Supreme success, furthered by perseverance. Do not rush to undertake anything; it furthers one to appoint helpers.",
  xiang:"云雷屯，君子以经纶。", xiangEn:"Clouds and thunder: the image of Difficulty; the superior person brings order out of confusion.",
  lines:[
    {yao:"初九", text:"磐桓，利居贞，利建侯。", bai:"徘徊难进，利于安守正道，利于分封诸侯以立基业。", en:"Hesitation and hindrance. It furthers one to remain steadfast and to appoint helpers."},
    {yao:"六二", text:"屯如邅如，乘马班如。匪寇婚媾，女子贞不字，十年乃字。", bai:"艰难徘徊，骑马盘旋不进。来者非强盗而是求婚者，女子守贞不嫁，十年后才出嫁。", en:"Beset by difficulty, riders wheel about. They are not robbers but suitors. The maiden stays true and does not pledge; after ten years she pledges."},
    {yao:"六三", text:"即鹿无虞，惟入于林中，君子几不如舍，往吝。", bai:"追逐鹿而无猎官引导，只会陷入林中。君子见机不如放弃，继续前往会有憾惜。", en:"Chasing deer without a forester, one only enters the forest. The superior person sees the signs and desists; to go on brings regret."},
    {yao:"六四", text:"乘马班如，求婚媾，往吉，无不利。", bai:"骑马盘旋不前，前去求婚，前往吉祥，无所不利。", en:"Riders wheel about. Go and seek union; to go brings good fortune, nothing but benefit."},
    {yao:"九五", text:"屯其膏，小贞吉，大贞凶。", bai:"施泽艰难难以广布，小事守正吉祥，大事守正则凶险。", en:"Difficulty in bestowing bounty. In small matters perseverance brings fortune; in great matters it brings misfortune."},
    {yao:"上六", text:"乘马班如，泣血涟如。", bai:"骑马盘旋不进，血泪涟涟而下。", en:"Riders wheel about, weeping tears of blood in streams."}
  ]
},
4: {
  name:"山水蒙", en:"Méng · Youthful Folly", sym:"䷃",
  tri:"艮上坎下", triEn:"Mountain over Water",
  gua:"亨。匪我求童蒙，童蒙求我。初筮告，再三渎，渎则不告。利贞。", guaBai:"亨通。不是我求教于蒙昧的孩童，而是孩童来求教于我。初次占问就告知，一再轻慢地追问就是亵渎，亵渎便不再告知。利于守正。", guaEn:"Success. It is not I who seek the young fool; the young fool seeks me. At the first oracle I inform him; asking twice or thrice is troublesome, and I do not inform. Perseverance furthers.",
  xiang:"山下出泉，蒙，君子以果行育德。", xiangEn:"A spring wells up at the foot of the mountain: Youthful Folly; the superior person acts decisively and nurtures virtue.",
  lines:[
    {yao:"初六", text:"发蒙，利用刑人，用说桎梏，以往吝。", bai:"启发蒙昧，宜用刑罚立威以为示范，解除其桎梏；若一味如此下去则有憾惜。", en:"To dispel folly, it furthers one to apply discipline and to remove fetters; but to go on so brings regret."},
    {yao:"九二", text:"包蒙吉，纳妇吉，子克家。", bai:"包容教化蒙昧者吉祥，娶妻吉祥，子能持家。", en:"To bear with the foolish brings good fortune. To take a wife brings good fortune. The son can manage the household."},
    {yao:"六三", text:"勿用取女，见金夫，不有躬，无攸利。", bai:"不宜娶这样的女子，她见到有钱男子便失身相从，娶她无所利。", en:"Do not take this maiden; seeing a wealthy man, she loses herself. Nothing furthers."},
    {yao:"六四", text:"困蒙，吝。", bai:"困于蒙昧而无人开导，会有憾惜。", en:"Entangled in folly. Regret."},
    {yao:"六五", text:"童蒙，吉。", bai:"如孩童般虚心受教，吉祥。", en:"A childlike, teachable folly. Good fortune."},
    {yao:"上九", text:"击蒙，不利为寇，利御寇。", bai:"以严厉手段治蒙，过于严酷如同为寇则不利，用以抵御外患则有利。", en:"In striking at folly, it does not further to act as a robber, but to ward off robbers."}
  ]
},
5: {
  name:"水天需", en:"Xū · Waiting (Nourishment)", sym:"䷄",
  tri:"坎上乾下", triEn:"Water over Heaven",
  gua:"有孚，光亨，贞吉。利涉大川。", guaBai:"心怀诚信，光明亨通，守正吉祥。利于渡越大河（成就大事）。", guaEn:"If you are sincere, you have light and success. Perseverance brings good fortune. It furthers one to cross the great water.",
  xiang:"云上于天，需，君子以饮食宴乐。", xiangEn:"Clouds rise up to heaven: Waiting; the superior person eats, drinks, and is joyous while awaiting the right time.",
  lines:[
    {yao:"初九", text:"需于郊，利用恒，无咎。", bai:"在郊外等待，利于持之以恒，无灾祸。", en:"Waiting in the meadow. It furthers one to abide in what endures. No blame."},
    {yao:"九二", text:"需于沙，小有言，终吉。", bai:"在沙滩上等待，稍有言语中伤，最终吉祥。", en:"Waiting on the sand. There is some gossip. The end brings good fortune."},
    {yao:"九三", text:"需于泥，致寇至。", bai:"在泥沼中等待，招致强盗到来。", en:"Waiting in the mud brings the robbers on."},
    {yao:"六四", text:"需于血，出自穴。", bai:"在血泊中等待，须设法脱出险境。", en:"Waiting in blood. Get out of the pit."},
    {yao:"九五", text:"需于酒食，贞吉。", bai:"在酒食安乐中等待，守正吉祥。", en:"Waiting amid wine and food. Perseverance brings good fortune."},
    {yao:"上六", text:"入于穴，有不速之客三人来，敬之终吉。", bai:"落入陷穴，有三位不请自来的客人到访，恭敬相待终获吉祥。", en:"One falls into the pit. Three uninvited guests arrive. Honor them, and in the end there is good fortune."}
  ]
},
6: {
  name:"天水讼", en:"Sòng · Conflict", sym:"䷅",
  tri:"乾上坎下", triEn:"Heaven over Water",
  gua:"有孚，窒惕，中吉，终凶。利见大人，不利涉大川。", guaBai:"心怀诚信却受阻塞，须警惕，持中则吉，争讼到底则凶。利于见大人物评断，不利于冒险渡大河。", guaEn:"You are sincere but obstructed; caution brings good fortune, but carrying conflict to the end brings misfortune. It furthers one to see the great person; it does not further to cross the great water.",
  xiang:"天与水违行，讼，君子以作事谋始。", xiangEn:"Heaven and water go in opposite directions: Conflict; the superior person, in all transactions, considers the beginning.",
  lines:[
    {yao:"初六", text:"不永所事，小有言，终吉。", bai:"不把争讼之事延续下去，虽稍有口舌，终获吉祥。", en:"If one does not perpetuate the affair, there is a little gossip; in the end, good fortune."},
    {yao:"九二", text:"不克讼，归而逋，其邑人三百户，无眚。", bai:"争讼不能取胜，逃归躲避，退居仅三百户的小邑，可免灾祸。", en:"One cannot win the conflict; he retreats and hides. The people of his town, three hundred households, remain free of guilt."},
    {yao:"六三", text:"食旧德，贞厉，终吉。或从王事，无成。", bai:"安享旧有的德业俸禄，守正防危，终获吉祥。若辅佐君王之事，不居其功。", en:"Living on ancient virtue; perseverance amid danger. In the end, good fortune. If in a king's service, seek no success."},
    {yao:"九四", text:"不克讼，复即命，渝，安贞吉。", bai:"争讼不能取胜，回心转意顺从正理，改变态度，安守正道则吉。", en:"One cannot win the conflict; he turns back and submits to fate, changes his attitude, finds peace in perseverance. Good fortune."},
    {yao:"九五", text:"讼，元吉。", bai:"公正裁断争讼，大为吉祥。", en:"To contend before this one brings supreme good fortune."},
    {yao:"上九", text:"或锡之鞶带，终朝三褫之。", bai:"即使因争讼获赐显贵的大带，一天之内也会被多次剥夺。", en:"Even if one is awarded a leather belt, by morning's end it is snatched away three times."}
  ]
},
7: {
  name:"地水师", en:"Shī · The Army", sym:"䷆",
  tri:"坤上坎下", triEn:"Earth over Water",
  gua:"贞，丈人吉，无咎。", guaBai:"用兵须守正，由德高望重的老成之人统领则吉，无灾祸。", guaEn:"The army needs perseverance and a strong, experienced leader. Good fortune without blame.",
  xiang:"地中有水，师，君子以容民畜众。", xiangEn:"Water within the earth: the Army; the superior person nourishes the people and gathers a host.",
  lines:[
    {yao:"初六", text:"师出以律，否臧凶。", bai:"出兵须以纪律约束，纪律不良则凶险。", en:"An army must set out in good order; if the order is not good, misfortune."},
    {yao:"九二", text:"在师中，吉，无咎，王三锡命。", bai:"身处军中主帅之位，吉祥，无灾祸，君王多次颁赐嘉命。", en:"In the midst of the army. Good fortune, no blame. The king bestows a triple decoration."},
    {yao:"六三", text:"师或舆尸，凶。", bai:"军队可能载尸而归，凶险。", en:"Perchance the army carries corpses in the wagon. Misfortune."},
    {yao:"六四", text:"师左次，无咎。", bai:"军队退守驻扎，无灾祸。", en:"The army retreats and camps. No blame."},
    {yao:"六五", text:"田有禽，利执言，无咎。长子帅师，弟子舆尸，贞凶。", bai:"田中有禽兽为害，宜出兵讨伐，无灾祸。由长者统率军队，若用无能之辈则载尸而归，守此则凶。", en:"Game is in the field; it furthers to catch it. No blame. Let the eldest lead the army; if the younger drive the corpse wagon, perseverance brings misfortune."},
    {yao:"上六", text:"大君有命，开国承家，小人勿用。", bai:"天子颁下封赏之命，功臣或封国或承家，但不可任用小人。", en:"The great ruler issues commands, founds states, and endows families. Inferior people should not be employed."}
  ]
},
8: {
  name:"水地比", en:"Bǐ · Holding Together (Union)", sym:"䷇",
  tri:"坎上坤下", triEn:"Water over Earth",
  gua:"吉。原筮，元永贞，无咎。不宁方来，后夫凶。", guaBai:"吉祥。再三占问，若为首者具备至善、恒久、贞正之德，则无灾祸。不安顺者也来归附，迟来者则有凶险。", guaEn:"Good fortune. Inquire of the oracle once again whether you possess sublimity, constancy, and perseverance; then there is no blame. Those unsure come; whoever comes too late meets misfortune.",
  xiang:"地上有水，比，先王以建万国，亲诸侯。", xiangEn:"Water over the earth: Holding Together; the ancient kings established the many states and drew the feudal lords close.",
  lines:[
    {yao:"初六", text:"有孚比之，无咎。有孚盈缶，终来有他，吉。", bai:"以诚信亲附，无灾祸。诚信充满如盈满瓦缶，终会招来更多福庆，吉祥。", en:"Hold to him in truth and loyalty; no blame. Truth fills the earthen bowl; in the end, unexpected good fortune comes."},
    {yao:"六二", text:"比之自内，贞吉。", bai:"从内心真诚地亲附，守正吉祥。", en:"Hold together with others from within. Perseverance brings good fortune."},
    {yao:"六三", text:"比之匪人。", bai:"所亲附的却是不当之人。", en:"You hold together with the wrong people."},
    {yao:"六四", text:"外比之，贞吉。", bai:"向外亲附贤明者，守正吉祥。", en:"Hold together with one outside. Perseverance brings good fortune."},
    {yao:"九五", text:"显比，王用三驱，失前禽，邑人不诫，吉。", bai:"光明正大地亲附，君王田猎三面驱围而网开一面，任前方禽兽逃走，属民不须戒备，吉祥。", en:"Manifest holding together. The king lets game escape on one side of three; the townsfolk need no warning. Good fortune."},
    {yao:"上六", text:"比之无首，凶。", bai:"亲附而无所归依、失去领导，凶险。", en:"Holding together without a head. Misfortune."}
  ]
},
9: {
  name:"风天小畜", en:"Xiǎo Xù · Small Taming", sym:"䷈",
  tri:"巽上乾下", triEn:"Wind over Heaven",
  gua:"亨。密云不雨，自我西郊。", guaBai:"亨通。浓云密布却不下雨，云气来自我西方的郊野（蓄势未发）。", guaEn:"Success. Dense clouds, no rain, from our western region.",
  xiang:"风行天上，小畜，君子以懿文德。", xiangEn:"The wind drives across heaven: Small Taming; the superior person refines the outward aspect of their nature.",
  lines:[
    {yao:"初九", text:"复自道，何其咎，吉。", bai:"回归自己的正道，能有什么灾祸，吉祥。", en:"Return to the way. How could there be blame in this? Good fortune."},
    {yao:"九二", text:"牵复，吉。", bai:"受牵引而一同回归正道，吉祥。", en:"He is led back to the way. Good fortune."},
    {yao:"九三", text:"舆说辐，夫妻反目。", bai:"车轮脱落辐条不能前行，如夫妻反目失和。", en:"The spokes burst out of the wagon wheels. Husband and wife turn their eyes away from each other."},
    {yao:"六四", text:"有孚，血去惕出，无咎。", bai:"心怀诚信，血光之灾消去，恐惧解除，无灾祸。", en:"If you are sincere, blood vanishes and fear gives way. No blame."},
    {yao:"九五", text:"有孚挛如，富以其邻。", bai:"以诚信牵系众人，与邻里共享富足。", en:"If you are sincere and loyally attached, you are rich in your neighbor."},
    {yao:"上九", text:"既雨既处，尚德载，妇贞厉。月几望，君子征凶。", bai:"雨已降下、事已安定，是积德所致；妇人若过于守持则有危厉。月近圆满，君子此时进取则凶。", en:"The rain comes, there is rest; this is the fruit of accumulated virtue. Perseverance in the wife brings danger. The moon is nearly full; if the superior person persists, misfortune."}
  ]
},
10: {
  name:"天泽履", en:"Lǚ · Treading (Conduct)", sym:"䷉",
  tri:"乾上兑下", triEn:"Heaven over Lake",
  gua:"履虎尾，不咥人，亨。", guaBai:"踩踏在老虎尾巴上，老虎却不咬人，亨通。", guaEn:"Treading on the tail of the tiger; it does not bite the man. Success.",
  xiang:"上天下泽，履，君子以辩上下，定民志。", xiangEn:"Heaven above, lake below: Treading; the superior person distinguishes high and low and settles the will of the people.",
  lines:[
    {yao:"初九", text:"素履，往无咎。", bai:"以质朴无华之道行事，前往无灾祸。", en:"Simple conduct. Progress without blame."},
    {yao:"九二", text:"履道坦坦，幽人贞吉。", bai:"行走于平坦大道，恬静自守之人守正吉祥。", en:"Treading a smooth, level path. The quiet, steadfast person has good fortune."},
    {yao:"六三", text:"眇能视，跛能履，履虎尾，咥人，凶。武人为于大君。", bai:"独眼自以为能看，跛脚自以为能走，踩虎尾被咬，凶险；如同勇武之人妄图充任君主。", en:"A one-eyed man thinks he can see, a lame man thinks he can walk; treading on the tiger's tail, he is bitten. Misfortune. A warrior acting as a great prince."},
    {yao:"九四", text:"履虎尾，愬愬，终吉。", bai:"踩踏虎尾，戒慎恐惧，最终吉祥。", en:"Treading on the tiger's tail with caution and dread. In the end, good fortune."},
    {yao:"九五", text:"夬履，贞厉。", bai:"刚决果断地行事，守正而仍需防危。", en:"Resolute conduct. Perseverance amid danger."},
    {yao:"上九", text:"视履考祥，其旋元吉。", bai:"回顾所行、审察祸福征兆，若能周全反复则大为吉祥。", en:"Look to your conduct and weigh the signs; when all is complete, supreme good fortune."}
  ]
},
11: {
  name:"地天泰", en:"Tài · Peace", sym:"䷊",
  tri:"坤上乾下", triEn:"Earth over Heaven",
  gua:"小往大来，吉亨。", guaBai:"阴柔者往外、阳刚者来内，吉祥亨通。", guaEn:"The small departs, the great approaches. Good fortune and success.",
  xiang:"天地交，泰，后以财成天地之道，辅相天地之宜，以左右民。", xiangEn:"Heaven and earth unite: Peace; the ruler shapes and completes the course of heaven and earth, aiding the people.",
  lines:[
    {yao:"初九", text:"拔茅茹，以其汇，征吉。", bai:"拔起茅草根须相连，同类相牵而进，前往吉祥。", en:"When ribbon grass is pulled, the sod comes with it, each according to its kind. To go brings good fortune."},
    {yao:"九二", text:"包荒，用冯河，不遐遗，朋亡，得尚于中行。", bai:"包容荒秽，敢于徒步涉河，不遗弃远方，不结党营私，合于中庸之道。", en:"Bearing with the uncultured, crossing the river resolutely, not neglecting the distant, not clinging to a faction—thus one accords with the middle way."},
    {yao:"九三", text:"无平不陂，无往不复，艰贞无咎。勿恤其孚，于食有福。", bai:"没有只平不斜的，没有只去不返的；在艰难中守正则无灾祸。不必忧虑诚信，于饮食生养上自有福分。", en:"No plain not followed by a slope, no going not followed by a return. Persevere through hardship, no blame. Do not worry about your truth; in nourishment there is blessing."},
    {yao:"六四", text:"翩翩，不富以其邻，不戒以孚。", bai:"轻快下降，不倚仗财富而与邻里同心，出于诚信而无须相戒。", en:"He flutters down, not boasting of wealth, together with his neighbor; not on guard, but in good faith."},
    {yao:"六五", text:"帝乙归妹，以祉元吉。", bai:"帝乙嫁出少女（下嫁贤者），因此得福，大为吉祥。", en:"The sovereign Yi gives his daughter in marriage; thereby comes blessing and supreme good fortune."},
    {yao:"上六", text:"城复于隍，勿用师，自邑告命，贞吝。", bai:"城墙倾覆坍入城壕，此时不宜用兵，只宜从自己封邑发布政令，守此仍有憾惜。", en:"The wall falls back into the moat. Use no army now; announce your commands within your own town. Perseverance brings regret."}
  ]
},
12: {
  name:"天地否", en:"Pǐ · Standstill (Obstruction)", sym:"䷋",
  tri:"乾上坤下", triEn:"Heaven over Earth",
  gua:"否之匪人，不利君子贞，大往小来。", guaBai:"闭塞之世由小人当道，不利于君子守正，阳刚者往外、阴柔者来内。", guaEn:"Standstill; evil people do not further the perseverance of the superior person. The great departs, the small approaches.",
  xiang:"天地不交，否，君子以俭德辟难，不可荣以禄。", xiangEn:"Heaven and earth do not unite: Standstill; the superior person restrains their virtue to escape difficulties and refuses honors and salary.",
  lines:[
    {yao:"初六", text:"拔茅茹，以其汇，贞吉，亨。", bai:"拔起茅草根须相连，同类相牵，守正吉祥，亨通。", en:"When ribbon grass is pulled, the sod comes with it, each according to its kind. Perseverance brings good fortune and success."},
    {yao:"六二", text:"包承，小人吉，大人否，亨。", bai:"顺承包容，小人得吉，大人则安于否闭而不苟合，可致亨通。", en:"They bear and endure; this means good fortune for the inferior. The great person accepts the standstill; success."},
    {yao:"六三", text:"包羞。", bai:"心怀羞愧而隐忍。", en:"They bear shame."},
    {yao:"九四", text:"有命无咎，畴离祉。", bai:"秉承天命而行则无灾祸，同类共享福泽。", en:"He who acts at the command of the highest remains without blame; those of like mind partake of the blessing."},
    {yao:"九五", text:"休否，大人吉。其亡其亡，系于苞桑。", bai:"止息否闭之世，大人吉祥。常念危亡将至，如系于丛生的桑根般牢固可安。", en:"Standstill is giving way. Good fortune for the great person. 'What if it should fail?' Thus bound to a cluster of mulberry shoots."},
    {yao:"上九", text:"倾否，先否后喜。", bai:"倾覆否闭之局，先经闭塞而后转为喜庆。", en:"The standstill is overturned. First standstill, then joy."}
  ]
},
13: {
  name:"天火同人", en:"Tóng Rén · Fellowship with Others", sym:"䷌",
  tri:"乾上离下", triEn:"Heaven over Fire",
  gua:"同人于野，亨。利涉大川，利君子贞。", guaBai:"在旷野与人和同（无私广纳），亨通。利于渡越大河，利于君子守正。", guaEn:"Fellowship with others in the open. Success. It furthers one to cross the great water. The perseverance of the superior person furthers.",
  xiang:"天与火，同人，君子以类族辨物。", xiangEn:"Heaven together with fire: Fellowship; the superior person organizes the clans and makes distinctions among things.",
  lines:[
    {yao:"初九", text:"同人于门，无咎。", bai:"走出门外与人和同（无所偏私），无灾祸。", en:"Fellowship with others at the gate. No blame."},
    {yao:"六二", text:"同人于宗，吝。", bai:"只在宗族内部结党和同，有憾惜。", en:"Fellowship with others confined to one's clan. Regret."},
    {yao:"九三", text:"伏戎于莽，升其高陵，三岁不兴。", bai:"埋伏兵于草莽，登上高陵窥探，三年不敢兴兵。", en:"He hides weapons in the thicket and climbs the high hill; for three years he does not rise up."},
    {yao:"九四", text:"乘其墉，弗克攻，吉。", bai:"登上敌人城墙却不发动攻击（悟而知止），吉祥。", en:"He climbs upon his wall but cannot bring himself to attack. Good fortune."},
    {yao:"九五", text:"同人，先号咷而后笑，大师克相遇。", bai:"与人和同，先痛哭而后欢笑，大军得胜而相遇会合。", en:"Fellowship: first weeping and wailing, then laughter. After great struggles, they meet."},
    {yao:"上九", text:"同人于郊，无悔。", bai:"在郊外与人和同（志同者尚少），虽未大得志，无悔恨。", en:"Fellowship with others in the meadow. No remorse."}
  ]
},
14: {
  name:"火天大有", en:"Dà Yǒu · Great Possession", sym:"䷍",
  tri:"离上乾下", triEn:"Fire over Heaven",
  gua:"元亨。", guaBai:"大为亨通。", guaEn:"Supreme success.",
  xiang:"火在天上，大有，君子以遏恶扬善，顺天休命。", xiangEn:"Fire in heaven above: Great Possession; the superior person curbs evil and furthers good, obeying the benevolent will of heaven.",
  lines:[
    {yao:"初九", text:"无交害，匪咎，艰则无咎。", bai:"未与祸害交涉，本无灾咎，能戒慎艰守则无灾祸。", en:"No relationship with what is harmful; there is no blame in this. If one remains mindful of hardship, no blame."},
    {yao:"九二", text:"大车以载，有攸往，无咎。", bai:"用大车装载重物，有所前往，无灾祸。", en:"A big wagon for loading. One may undertake something. No blame."},
    {yao:"九三", text:"公用亨于天子，小人弗克。", bai:"王公以其所有献享于天子，小人则不能担此。", en:"A prince offers it in tribute to the Son of Heaven. A petty person cannot do this."},
    {yao:"九四", text:"匪其彭，无咎。", bai:"不过分张扬盛势，无灾祸。", en:"He makes a difference between himself and his neighbor. No blame."},
    {yao:"六五", text:"厥孚交如，威如，吉。", bai:"以诚信与人交往，又不失威严，吉祥。", en:"His truth is accessible, yet dignified. Good fortune."},
    {yao:"上九", text:"自天祐之，吉无不利。", bai:"上天保佑，吉祥而无所不利。", en:"He is blessed by heaven. Good fortune. Nothing that does not further."}
  ]
},
15: {
  name:"地山谦", en:"Qiān · Modesty", sym:"䷎",
  tri:"坤上艮下", triEn:"Earth over Mountain",
  gua:"亨，君子有终。", guaBai:"亨通，君子能保持谦德而有善终。", guaEn:"Success. The superior person carries things through to the end.",
  xiang:"地中有山，谦，君子以裒多益寡，称物平施。", xiangEn:"Within the earth, a mountain: Modesty; the superior person reduces what is too much and augments what is too little, weighing things to make giving even.",
  lines:[
    {yao:"初六", text:"谦谦君子，用涉大川，吉。", bai:"谦而又谦的君子，凭此可渡越大河，吉祥。", en:"A superior person modest about their modesty may cross the great water. Good fortune."},
    {yao:"六二", text:"鸣谦，贞吉。", bai:"谦德流露于声名，守正吉祥。", en:"Modesty that expresses itself. Perseverance brings good fortune."},
    {yao:"九三", text:"劳谦，君子有终，吉。", bai:"有功劳而仍谦逊，君子能保之善终，吉祥。", en:"A superior person of merit who remains modest carries things to the end. Good fortune."},
    {yao:"六四", text:"无不利，撝谦。", bai:"无所不利，处处发挥谦逊之德。", en:"Nothing that does not further. Modesty in movement."},
    {yao:"六五", text:"不富以其邻，利用侵伐，无不利。", bai:"不倚仗财富而能与邻里同心，利于讨伐不服者，无所不利。", en:"Not boasting of wealth with one's neighbors; it furthers one to attack with force. Nothing that does not further."},
    {yao:"上六", text:"鸣谦，利用行师，征邑国。", bai:"谦德著于声名，利于出兵，以整治自己的邑国。", en:"Modesty that expresses itself. It furthers one to set armies marching to chastise one's own city and country."}
  ]
},
16: {
  name:"雷地豫", en:"Yù · Enthusiasm", sym:"䷏",
  tri:"震上坤下", triEn:"Thunder over Earth",
  gua:"利建侯行师。", guaBai:"利于分封诸侯、出师用兵。", guaEn:"It furthers one to install helpers and to set armies marching.",
  xiang:"雷出地奋，豫，先王以作乐崇德，殷荐之上帝，以配祖考。", xiangEn:"Thunder comes resounding out of the earth: Enthusiasm; the ancient kings made music to honor virtue, offering it in splendor to the Supreme Deity and joining their ancestors to it.",
  lines:[
    {yao:"初六", text:"鸣豫，凶。", bai:"自鸣得意、张扬安乐，凶险。", en:"Enthusiasm that expresses itself for show. Misfortune."},
    {yao:"六二", text:"介于石，不终日，贞吉。", bai:"耿介如磐石，见机而作不待终日，守正吉祥。", en:"Firm as a rock; not a whole day passes before he acts. Perseverance brings good fortune."},
    {yao:"六三", text:"盱豫，悔，迟有悔。", bai:"谄媚上视以求安乐，将有悔；若醒悟迟缓则更添悔恨。", en:"Enthusiasm that looks upward to fawn creates remorse. Hesitation brings remorse."},
    {yao:"九四", text:"由豫，大有得，勿疑，朋盍簪。", bai:"众人由他而得安乐，大有所得，不必疑虑，朋友如发簪聚发般聚合而来。", en:"The source of enthusiasm; great things are achieved. Do not doubt; friends gather around you as around a hairpin."},
    {yao:"六五", text:"贞疾，恒不死。", bai:"守持正固却似久病缠身，然长久而不至于亡。", en:"Persistently ill, yet never dying."},
    {yao:"上六", text:"冥豫，成有渝，无咎。", bai:"沉溺于安乐至于昏冥，然事已成而能悔悟改变，则无灾祸。", en:"Deluded enthusiasm. But if after completion one changes, there is no blame."}
  ]
},
17: {
  name:"泽雷随", en:"Suí · Following", sym:"䷐",
  tri:"兑上震下", triEn:"Lake over Thunder",
  gua:"随，元亨利贞，无咎。", guaBai:"随顺，大为亨通，利于守持正固，没有灾祸。", guaEn:"Following. Supreme success. Favorable to be steadfast. No blame.",
  xiang:"泽中有雷，随；君子以向晦入宴息。", xiangEn:"Thunder within the lake: Following. The noble one, as darkness falls, goes indoors to rest.",
  lines:[
    {yao:"初九", text:"官有渝，贞吉。出门交有功。", bai:"主事之职有所变动，守正则吉。出门与人交往会有功效。", en:"The office undergoes change; steadfastness brings good fortune. Going out to associate with others brings achievement."},
    {yao:"六二", text:"系小子，失丈夫。", bai:"系恋于年少者，便失去了成熟的丈夫。", en:"Clinging to the little boy, one loses the strong man."},
    {yao:"六三", text:"系丈夫，失小子。随有求得，利居贞。", bai:"系随于成熟的丈夫，便舍弃了年少者。随顺而有所求则得，利于安居守正。", en:"Clinging to the strong man, one loses the little boy. In following one seeks and gains; favorable to abide in steadfastness."},
    {yao:"九四", text:"随有获，贞凶。有孚在道，以明，何咎。", bai:"随顺而有所猎获，守此则有凶险。心存诚信合于正道，明察事理，又有何咎害。", en:"Following brings gains, but steadfastness here brings misfortune. With sincerity on the right path, made clear, what blame can there be?"},
    {yao:"九五", text:"孚于嘉，吉。", bai:"以诚信归向美善，吉祥。", en:"Sincere toward what is excellent. Good fortune."},
    {yao:"上六", text:"拘系之，乃从维之。王用亨于西山。", bai:"牢牢拘系着他，又进而缠绕维系。君王因此在西山祭享。", en:"He is held fast, then bound and tied. The king makes offerings on the Western Mountain."}
  ]
},
18: {
  name:"山风蛊", en:"Gǔ · Work on the Decayed", sym:"䷑",
  tri:"艮上巽下", triEn:"Mountain over Wind",
  gua:"蛊，元亨，利涉大川。先甲三日，后甲三日。", guaBai:"整治积弊，大为亨通，利于渡越大河。事前反复筹划三日，事后详加考察三日。", guaEn:"Decay. Supreme success. Favorable to cross the great river. Three days before the turning point, three days after.",
  xiang:"山下有风，蛊；君子以振民育德。", xiangEn:"Wind below the mountain: Decay. The noble one rouses the people and nurtures their virtue.",
  lines:[
    {yao:"初六", text:"干父之蛊，有子，考无咎，厉终吉。", bai:"匡正父辈遗留的弊乱，有这样的儿子，先父可无咎害，虽有危厉终得吉祥。", en:"Setting right what the father spoiled. Having such a son, the departed father is without blame. Danger, but in the end good fortune."},
    {yao:"九二", text:"干母之蛊，不可贞。", bai:"匡正母辈遗留的弊乱，不可过于刚正固执。", en:"Setting right what the mother spoiled. One must not be too rigidly firm."},
    {yao:"九三", text:"干父之蛊，小有悔，无大咎。", bai:"匡正父辈遗留的弊乱，稍有悔恨，但无大的咎害。", en:"Setting right what the father spoiled. Slight regret, but no great blame."},
    {yao:"六四", text:"裕父之蛊，往见吝。", bai:"宽缓姑息父辈遗留的弊乱，如此前往必致憾惜。", en:"Tolerating what the father spoiled. To go on brings humiliation."},
    {yao:"六五", text:"干父之蛊，用誉。", bai:"匡正父辈遗留的弊乱，因而获得赞誉。", en:"Setting right what the father spoiled. One gains praise."},
    {yao:"上九", text:"不事王侯，高尚其事。", bai:"不侍奉王侯，把自身志节看得高洁可贵。", en:"He does not serve kings and princes; he holds his own affairs in high esteem."}
  ]
},
19: {
  name:"地泽临", en:"Lín · Approach", sym:"䷒",
  tri:"坤上兑下", triEn:"Earth over Lake",
  gua:"临，元亨利贞。至于八月有凶。", guaBai:"临进，大为亨通，利于守正。到了八月将有凶险。", guaEn:"Approach. Supreme success. Favorable to be steadfast. By the eighth month there will be misfortune.",
  xiang:"泽上有地，临；君子以教思无穷，容保民无疆。", xiangEn:"Earth above the lake: Approach. The noble one teaches and reflects without end, and embraces and protects the people without limit.",
  lines:[
    {yao:"初九", text:"咸临，贞吉。", bai:"以感应之道临进，守正则吉。", en:"Approach with mutual influence. Steadfastness brings good fortune."},
    {yao:"九二", text:"咸临，吉，无不利。", bai:"以感应之道临进，吉祥，无所不利。", en:"Approach with mutual influence. Good fortune. Nothing that is not favorable."},
    {yao:"六三", text:"甘临，无攸利。既忧之，无咎。", bai:"以甜言巧媚临进，无所利益。既已忧惧改过，则无咎害。", en:"Approach with flattery. Nothing favorable. But if one is anxious about it, there is no blame."},
    {yao:"六四", text:"至临，无咎。", bai:"以极其亲切的态度临进，没有咎害。", en:"Complete approach. No blame."},
    {yao:"六五", text:"知临，大君之宜，吉。", bai:"以明智临进，正合大君的适宜之道，吉祥。", en:"Approach with wisdom. This befits a great ruler. Good fortune."},
    {yao:"上六", text:"敦临，吉，无咎。", bai:"以敦厚之德临进，吉祥，没有咎害。", en:"Approach with genuine kindness. Good fortune. No blame."}
  ]
},
20: {
  name:"风地观", en:"Guān · Contemplation", sym:"䷓",
  tri:"巽上坤下", triEn:"Wind over Earth",
  gua:"观，盥而不荐，有孚颙若。", guaBai:"观仰，如祭祀时已洁手灌酒降神而尚未献飨，心怀诚敬而肃然仰望。", guaEn:"Contemplation. The ablution has been made, but not yet the offering. Full of sincerity, they look up with reverence.",
  xiang:"风行地上，观；先王以省方观民设教。", xiangEn:"Wind moving over the earth: Contemplation. The ancient kings surveyed the regions, observed the people, and set up teaching.",
  lines:[
    {yao:"初六", text:"童观，小人无咎，君子吝。", bai:"如孩童般浅陋地观看，小人如此无咎，君子如此则可惜。", en:"Childlike contemplation. For a small person, no blame; for the noble one, humiliation."},
    {yao:"六二", text:"窥观，利女贞。", bai:"从门缝中窥视般狭隘地观看，利于女子的守正。", en:"Contemplation through a crack. Favorable for a woman's steadfastness."},
    {yao:"六三", text:"观我生，进退。", bai:"省察自己的行为得失，以决定进退。", en:"Contemplating my own life, I decide whether to advance or withdraw."},
    {yao:"六四", text:"观国之光，利用宾于王。", bai:"观仰国家的盛德光辉，宜于做君王的宾客而受重用。", en:"Contemplating the glory of the realm. Favorable to be a guest of the king."},
    {yao:"九五", text:"观我生，君子无咎。", bai:"省察自己的行为，若合于君子之道则无咎害。", en:"Contemplating my own life. For the noble one, no blame."},
    {yao:"上九", text:"观其生，君子无咎。", bai:"观察众人对己的观瞻反应，若能常保君子之德则无咎害。", en:"Contemplating his life as seen by others. For the noble one, no blame."}
  ]
},
21: {
  name:"火雷噬嗑", en:"Shì Kè · Biting Through", sym:"䷔",
  tri:"离上震下", triEn:"Fire over Thunder",
  gua:"噬嗑，亨。利用狱。", guaBai:"咬合，亨通。利于施用刑狱。", guaEn:"Biting through. Success. Favorable to administer justice.",
  xiang:"雷电，噬嗑；先王以明罚敕法。", xiangEn:"Thunder and lightning: Biting through. The ancient kings made punishments clear and laws firm.",
  lines:[
    {yao:"初九", text:"屦校灭趾，无咎。", bai:"脚上戴着刑具，遮没了脚趾，没有大的咎害。", en:"Fettered feet, the toes hidden. No blame."},
    {yao:"六二", text:"噬肤灭鼻，无咎。", bai:"咬啮软肉深至没鼻，没有咎害。", en:"Biting through tender flesh so that the nose disappears. No blame."},
    {yao:"六三", text:"噬腊肉，遇毒。小吝，无咎。", bai:"咬啮坚硬的腊肉，遇到毒味。稍有憾惜，但无咎害。", en:"Biting dried meat and meeting something poisonous. Slight humiliation, but no blame."},
    {yao:"九四", text:"噬干胏，得金矢，利艰贞，吉。", bai:"咬啮带骨的干肉，得到金属箭镞。利于在艰难中守正，吉祥。", en:"Biting dried gristly meat and finding a metal arrowhead. Favorable to be steadfast amid hardship. Good fortune."},
    {yao:"六五", text:"噬干肉，得黄金，贞厉，无咎。", bai:"咬啮干肉，得到黄金。守正防危，则无咎害。", en:"Biting dried meat and finding yellow gold. Steadfast amid danger. No blame."},
    {yao:"上九", text:"何校灭耳，凶。", bai:"颈上荷着刑枷，遮没了耳朵，有凶险。", en:"His neck bears the cangue so that the ears disappear. Misfortune."}
  ]
},
22: {
  name:"山火贲", en:"Bì · Adornment", sym:"䷕",
  tri:"艮上离下", triEn:"Mountain over Fire",
  gua:"贲，亨。小利有攸往。", guaBai:"文饰，亨通。小有利于前往行事。", guaEn:"Adornment. Success. In small matters it is favorable to have somewhere to go.",
  xiang:"山下有火，贲；君子以明庶政，无敢折狱。", xiangEn:"Fire below the mountain: Adornment. The noble one clarifies the many affairs of government but dares not decide criminal cases by mere show.",
  lines:[
    {yao:"初九", text:"贲其趾，舍车而徒。", bai:"文饰其脚趾，舍弃车乘而安于步行。", en:"Adorning his toes; he gives up the carriage and walks on foot."},
    {yao:"六二", text:"贲其须。", bai:"文饰其胡须（随所附而动）。", en:"Adorning his beard."},
    {yao:"九三", text:"贲如濡如，永贞吉。", bai:"文饰得光润有泽，长久守正则吉。", en:"Adorned and glossy. Lasting steadfastness brings good fortune."},
    {yao:"六四", text:"贲如皤如，白马翰如，匪寇婚媾。", bai:"文饰而返归素白，乘白马疾驰而来，来者非强寇，而是求婚的佳偶。", en:"Adorned yet plain white; the white horse comes as if on wings. Not a robber, but a suitor for marriage."},
    {yao:"六五", text:"贲于丘园，束帛戋戋，吝，终吉。", bai:"文饰于山丘园圃，束帛微薄，虽显吝啬，终得吉祥。", en:"Adornment in the hills and gardens; the roll of silk is meager. Humiliation, but in the end good fortune."},
    {yao:"上九", text:"白贲，无咎。", bai:"以质朴素白为饰，没有咎害。", en:"Plain white adornment. No blame."}
  ]
},
23: {
  name:"山地剥", en:"Bō · Splitting Apart", sym:"䷖",
  tri:"艮上坤下", triEn:"Mountain over Earth",
  gua:"剥，不利有攸往。", guaBai:"剥落，不利于前往行事。", guaEn:"Splitting apart. It is not favorable to have somewhere to go.",
  xiang:"山附于地，剥；上以厚下安宅。", xiangEn:"The mountain rests upon the earth: Splitting apart. Those above make firm their foundations below and secure their dwellings.",
  lines:[
    {yao:"初六", text:"剥床以足，蔑贞凶。", bai:"剥落床体从床脚开始，灭弃正道，有凶险。", en:"The bed is split at the legs. To reject steadfastness brings misfortune."},
    {yao:"六二", text:"剥床以辨，蔑贞凶。", bai:"剥落床体到了床身与床脚交接处，灭弃正道，有凶险。", en:"The bed is split at the frame. To reject steadfastness brings misfortune."},
    {yao:"六三", text:"剥之，无咎。", bai:"处剥落之时而能自守，没有咎害。", en:"He splits with them, yet is without blame."},
    {yao:"六四", text:"剥床以肤，凶。", bai:"剥落已及于床上人的肌肤，有凶险。", en:"The bed is split up to the skin. Misfortune."},
    {yao:"六五", text:"贯鱼，以宫人宠，无不利。", bai:"如群鱼贯串而进，率领宫人依次承宠，无所不利。", en:"A string of fish; the palace ladies receive favor in order. Nothing that is not favorable."},
    {yao:"上九", text:"硕果不食，君子得舆，小人剥庐。", bai:"硕大的果实未被摘食（阳德犹存），君子因此得众如得车乘，小人则终致剥毁其庐舍。", en:"A great fruit remains uneaten. The noble one gains a carriage; the small person's own house is torn down."}
  ]
},
24: {
  name:"地雷复", en:"Fù · Return", sym:"䷗",
  tri:"坤上震下", triEn:"Earth over Thunder",
  gua:"复，亨。出入无疾，朋来无咎。反复其道，七日来复，利有攸往。", guaBai:"回复，亨通。阳气出入没有疾患，朋类到来没有咎害。往返循其正道，七日即来回复，利于前往行事。", guaEn:"Return. Success. Going out and coming in without harm; friends arrive without blame. The way turns and returns; in seven days comes the return. Favorable to have somewhere to go.",
  xiang:"雷在地中，复；先王以至日闭关，商旅不行，后不省方。", xiangEn:"Thunder within the earth: Return. On the solstice the ancient kings closed the passes; merchants and travelers did not move, and the ruler did not inspect the regions.",
  lines:[
    {yao:"初九", text:"不远复，无祗悔，元吉。", bai:"走得不远便回复，没有大的悔恨，大为吉祥。", en:"Returning before going far. No great regret. Supreme good fortune."},
    {yao:"六二", text:"休复，吉。", bai:"美好地回复，吉祥。", en:"A fine return. Good fortune."},
    {yao:"六三", text:"频复，厉，无咎。", bai:"屡失屡返地回复，虽有危厉，但无咎害。", en:"Repeated return. Danger, but no blame."},
    {yao:"六四", text:"中行独复。", bai:"行于众阴之中而独能回复正道。", en:"Walking in the midst, alone he returns."},
    {yao:"六五", text:"敦复，无悔。", bai:"敦厚笃实地回复，没有悔恨。", en:"Noble-hearted return. No regret."},
    {yao:"上六", text:"迷复，凶，有灾眚。用行师，终有大败，以其国君凶，至于十年不克征。", bai:"迷失而不能回复，有凶险，招致灾祸。若用以行军，终将大败，殃及国君遭凶，以至十年不能出征。", en:"Confused return. Misfortune, with disaster and calamity. If armies are set marching, they suffer a great defeat, and the ruler comes to misfortune; for ten years no campaign can be undertaken."}
  ]
},
25: {
  name:"天雷无妄", en:"Wú Wàng · Without Falsehood", sym:"䷘",
  tri:"乾上震下", triEn:"Heaven over Thunder",
  gua:"无妄，元亨利贞。其匪正有眚，不利有攸往。", guaBai:"不妄为，大为亨通，利于守正。若行为不正便有灾祸，不利于前往行事。", guaEn:"Without falsehood. Supreme success. Favorable to be steadfast. If one is not correct, there is calamity, and it is not favorable to have somewhere to go.",
  xiang:"天下雷行，物与无妄；先王以茂对时育万物。", xiangEn:"Under heaven thunder rolls, and all things are endowed without falsehood. The ancient kings, richly responding to the seasons, nurtured all beings.",
  lines:[
    {yao:"初九", text:"无妄，往吉。", bai:"不妄为而行，前往吉祥。", en:"Without falsehood. To go forward brings good fortune."},
    {yao:"六二", text:"不耕获，不菑畬，则利有攸往。", bai:"不为图收获而耕，不为求熟田而垦，如此顺其自然则利于前往。", en:"Not plowing for the harvest, not clearing land for its yield: then it is favorable to have somewhere to go."},
    {yao:"六三", text:"无妄之灾，或系之牛，行人之得，邑人之灾。", bai:"意外的灾祸：有人拴系着一头牛，被过路人牵走，却成了邑中人的无妄之灾。", en:"Undeserved misfortune. Someone ties up an ox; a passerby takes it, and the townsman suffers the loss."},
    {yao:"九四", text:"可贞，无咎。", bai:"可以守持正固，没有咎害。", en:"One can be steadfast. No blame."},
    {yao:"九五", text:"无妄之疾，勿药有喜。", bai:"意外得来的疾病，不用药自会痊愈而有喜。", en:"An unexpected illness. Use no medicine, and there will be joy."},
    {yao:"上九", text:"无妄，行有眚，无攸利。", bai:"处无妄之极，此时妄动前行必有灾祸，无所利益。", en:"Without falsehood. To act now brings calamity. Nothing is favorable."}
  ]
},
26: {
  name:"山天大畜", en:"Dà Chù · Great Taming", sym:"䷙",
  tri:"艮上乾下", triEn:"Mountain over Heaven",
  gua:"大畜，利贞。不家食吉，利涉大川。", guaBai:"大为畜聚，利于守正。不食于家而食禄于朝则吉，利于渡越大河。", guaEn:"Great taming. Favorable to be steadfast. Not eating at home brings good fortune. Favorable to cross the great river.",
  xiang:"天在山中，大畜；君子以多识前言往行，以畜其德。", xiangEn:"Heaven within the mountain: Great taming. The noble one acquaints himself with many sayings of old and deeds of the past, so as to nurture his virtue.",
  lines:[
    {yao:"初九", text:"有厉，利已。", bai:"有危险，利于停止不进。", en:"There is danger; it is favorable to stop."},
    {yao:"九二", text:"舆说輹。", bai:"车子脱落了车轴的伏兔（自止不行）。", en:"The cart's axle straps are removed."},
    {yao:"九三", text:"良马逐，利艰贞。曰闲舆卫，利有攸往。", bai:"良马奔逐，利于在艰难中守正。要日日熟习驾车防卫之术，利于前往。", en:"Fine horses in pursuit. Favorable to be steadfast amid hardship. Daily practice driving and defense; favorable to have somewhere to go."},
    {yao:"六四", text:"童牛之牿，元吉。", bai:"给小牛角上加木以防触人（防患于初），大为吉祥。", en:"A guard-board on a young ox's horns. Supreme good fortune."},
    {yao:"六五", text:"豮豕之牙，吉。", bai:"制服已阉小猪的利牙（除害于本），吉祥。", en:"The tusks of a gelded boar. Good fortune."},
    {yao:"上九", text:"何天之衢，亨。", bai:"承载着上天的通衢大道，畜极而通，亨通。", en:"He bears the highway of heaven. Success."}
  ]
},
27: {
  name:"山雷颐", en:"Yí · Nourishment", sym:"䷚",
  tri:"艮上震下", triEn:"Mountain over Thunder",
  gua:"颐，贞吉。观颐，自求口实。", guaBai:"颐养，守正则吉。观察养生之道，靠自己求取口中食物。", guaEn:"Nourishment. Steadfastness brings good fortune. Observe how one nourishes, and how one seeks to fill his own mouth.",
  xiang:"山下有雷，颐；君子以慎言语，节饮食。", xiangEn:"Thunder below the mountain: Nourishment. The noble one is careful in his words and moderate in eating and drinking.",
  lines:[
    {yao:"初九", text:"舍尔灵龟，观我朵颐，凶。", bai:"舍弃你自身如灵龟般的美质，却眼馋地看着我大嚼，有凶险。", en:"You forsake your own magic tortoise and watch me with mouth drooping. Misfortune."},
    {yao:"六二", text:"颠颐，拂经，于丘颐，征凶。", bai:"颠倒地向下求养，违背常理；又向上求养于高处，前往有凶。", en:"Nourishment turned upside down, against the norm; seeking nourishment on the hill. To go forward brings misfortune."},
    {yao:"六三", text:"拂颐，贞凶，十年勿用，无攸利。", bai:"违背颐养正道，守此则凶，十年也不可有所作为，无所利益。", en:"Turning away from proper nourishment. Steadfastness brings misfortune. For ten years do nothing. Nothing is favorable."},
    {yao:"六四", text:"颠颐，吉。虎视眈眈，其欲逐逐，无咎。", bai:"向下求养于贤者，吉祥。如虎视般专注威严，欲求相继不绝，没有咎害。", en:"Nourishment turned downward. Good fortune. Watching like a tiger, with insatiable desire. No blame."},
    {yao:"六五", text:"拂经，居贞吉，不可涉大川。", bai:"违背常理（不能自养而赖上养），安居守正则吉，但不可涉越大河。", en:"Against the norm. To abide steadfast brings good fortune, but one must not cross the great river."},
    {yao:"上九", text:"由颐，厉吉，利涉大川。", bai:"天下由此得养，虽处危而终吉，利于渡越大河。", en:"The source of nourishment. Danger, yet good fortune. Favorable to cross the great river."}
  ]
},
28: {
  name:"泽风大过", en:"Dà Guò · Great Exceeding", sym:"䷛",
  tri:"兑上巽下", triEn:"Lake over Wind",
  gua:"大过，栋桡，利有攸往，亨。", guaBai:"大为过甚，如栋梁弯曲，利于前往行事，亨通。", guaEn:"Great exceeding. The ridgepole sags. Favorable to have somewhere to go. Success.",
  xiang:"泽灭木，大过；君子以独立不惧，遁世无闷。", xiangEn:"The lake rises over the trees: Great exceeding. The noble one stands alone without fear and withdraws from the world without distress.",
  lines:[
    {yao:"初六", text:"藉用白茅，无咎。", bai:"用洁白的茅草作垫来承放祭品，谨慎至此，没有咎害。", en:"Spreading white rushes underneath. No blame."},
    {yao:"九二", text:"枯杨生稊，老夫得其女妻，无不利。", bai:"枯萎的杨树重生嫩芽，老夫娶得少妻，无所不利。", en:"A withered poplar puts forth shoots; an old man takes a young wife. Nothing that is not favorable."},
    {yao:"九三", text:"栋桡，凶。", bai:"栋梁弯曲将折，有凶险。", en:"The ridgepole sags to breaking. Misfortune."},
    {yao:"九四", text:"栋隆，吉；有它吝。", bai:"栋梁高隆坚挺，吉祥；但若另有他意则有憾惜。", en:"The ridgepole is braced up. Good fortune; but other intentions bring humiliation."},
    {yao:"九五", text:"枯杨生华，老妇得其士夫，无咎无誉。", bai:"枯萎的杨树开出花，老妇嫁得少夫，无咎害也无称誉。", en:"A withered poplar puts forth flowers; an old woman takes a young husband. No blame, no praise."},
    {yao:"上六", text:"过涉灭顶，凶，无咎。", bai:"涉水过深以致没顶，有凶险，但（为义而然）无可咎责。", en:"Wading through the water till it covers the head. Misfortune, but no blame."}
  ]
},
29: {
  name:"坎为水", en:"Kǎn · The Abysmal Water", sym:"䷜",
  tri:"坎上坎下", triEn:"Water over Water",
  gua:"习坎，有孚，维心亨，行有尚。", guaBai:"重重险陷，心怀诚信，唯有内心亨通，前行才会受尊尚。", guaEn:"The doubled abyss. With sincerity, the heart alone attains success; to act brings esteem.",
  xiang:"水洊至，习坎；君子以常德行，习教事。", xiangEn:"Water flows on unceasingly: the doubled abyss. The noble one keeps constant in virtuous conduct and practices the work of teaching.",
  lines:[
    {yao:"初六", text:"习坎，入于坎窞，凶。", bai:"重重险陷中，又落入坑穴的最深处，有凶险。", en:"The doubled abyss. One falls into the pit within the pit. Misfortune."},
    {yao:"九二", text:"坎有险，求小得。", bai:"陷于险中，力求脱险只能小有所得。", en:"The pit is full of danger. One seeks and gains only a little."},
    {yao:"六三", text:"来之坎坎，险且枕，入于坎窞，勿用。", bai:"来往都是险陷，险境重叠而暂止，又落入深坑，不可轻举妄动。", en:"Coming and going, pit upon pit; danger, and one halts. Falling into the deep pit. Do not act."},
    {yao:"六四", text:"樽酒簋贰，用缶，纳约自牖，终无咎。", bai:"一樽酒、两簋饭，用瓦缶盛之，从窗牖简约地进献诚信，终无咎害。", en:"A jug of wine, two bowls of rice, in earthen vessels; simple offerings passed through the window. In the end, no blame."},
    {yao:"九五", text:"坎不盈，祗既平，无咎。", bai:"坑陷之水尚未盈满，只要注到平满即将出险，没有咎害。", en:"The pit is not yet full; only until it is level. No blame."},
    {yao:"上六", text:"系用徽纆，寘于丛棘，三岁不得，凶。", bai:"用绳索捆绑，囚置于荆棘丛中，三年不得脱身，有凶险。", en:"Bound with cords and ropes, set among thorn hedges; for three years no release. Misfortune."}
  ]
},
30: {
  name:"离为火", en:"Lí · The Clinging Fire", sym:"䷝",
  tri:"离上离下", triEn:"Fire over Fire",
  gua:"离，利贞，亨。畜牝牛，吉。", guaBai:"附丽，利于守正，亨通。畜养母牛（取其柔顺），吉祥。", guaEn:"The clinging. Favorable to be steadfast. Success. Rearing a cow brings good fortune.",
  xiang:"明两作，离；大人以继明照于四方。", xiangEn:"Brightness rises twice: the clinging. The great one, with continuing brightness, illumines the four quarters.",
  lines:[
    {yao:"初九", text:"履错然，敬之无咎。", bai:"步履交错杂乱（初动之时），能持敬慎则无咎害。", en:"The steps are confused. Treat this with reverence, and there is no blame."},
    {yao:"六二", text:"黄离，元吉。", bai:"附丽于中正之德如黄色之美，大为吉祥。", en:"Yellow clinging. Supreme good fortune."},
    {yao:"九三", text:"日昃之离，不鼓缶而歌，则大耋之嗟，凶。", bai:"如日偏西时的附丽，不能鼓缶而歌乐天知命，便会有暮年的悲叹，有凶险。", en:"The clinging of the setting sun. If one does not drum on the jar and sing, the aged will lament. Misfortune."},
    {yao:"九四", text:"突如其来如，焚如，死如，弃如。", bai:"突然而来，如烈火焚烧，转瞬而死，终被遗弃。", en:"Sudden its coming, like fire, like death, like being cast away."},
    {yao:"六五", text:"出涕沱若，戚嗟若，吉。", bai:"忧惧而涕泪滂沱，哀戚叹息，（因忧惧而得吉）吉祥。", en:"Tears flowing in streams, sighing in grief. Good fortune."},
    {yao:"上九", text:"王用出征，有嘉折首，获匪其丑，无咎。", bai:"君王出兵征讨，有嘉美之功斩获首恶，所俘非其党羽（只惩元凶），没有咎害。", en:"The king sends forth an army. There is honor in beheading the leaders, capturing only the chief and not his followers. No blame."}
  ]
},
31: {
  name:"泽山咸", en:"Xián · Influence", sym:"䷞",
  tri:"兑上艮下", triEn:"Lake over Mountain",
  gua:"咸，亨，利贞，取女吉。", guaBai:"交感，亨通，利于守正，娶妻则吉。", guaEn:"Influence. Success. Favorable to be steadfast. Taking a wife brings good fortune.",
  xiang:"山上有泽，咸；君子以虚受人。", xiangEn:"A lake upon the mountain: Influence. The noble one, with an open heart, receives others.",
  lines:[
    {yao:"初六", text:"咸其拇。", bai:"感应在脚的大拇趾（感之微而未动）。", en:"Influence in the big toe."},
    {yao:"六二", text:"咸其腓，凶，居吉。", bai:"感应在小腿肚，妄动则凶，安居守静则吉。", en:"Influence in the calves. Misfortune. To stay still brings good fortune."},
    {yao:"九三", text:"咸其股，执其随，往吝。", bai:"感应在大腿，随人而动不能自主，前往有憾惜。", en:"Influence in the thighs, clinging to what follows. To go on brings humiliation."},
    {yao:"九四", text:"贞吉，悔亡。憧憧往来，朋从尔思。", bai:"守正则吉，悔恨消失。若心意不定地往来奔忙，则只有朋类顺从你偏私的思念。", en:"Steadfastness brings good fortune; regret vanishes. If you come and go in restless agitation, only friends will follow your thoughts."},
    {yao:"九五", text:"咸其脢，无悔。", bai:"感应在脊背之肉（无心之感），没有悔恨。", en:"Influence in the flesh of the back. No regret."},
    {yao:"上六", text:"咸其辅颊舌。", bai:"感应只在牙床、面颊和舌头（徒以言语相感）。", en:"Influence in the jaws, cheeks, and tongue."}
  ]
},
32: {
  name:"雷风恒", en:"Héng · Duration", sym:"䷟",
  tri:"震上巽下", triEn:"Thunder over Wind",
  gua:"恒，亨，无咎，利贞，利有攸往。", guaBai:"恒久，亨通，没有咎害，利于守正，利于前往行事。", guaEn:"Duration. Success. No blame. Favorable to be steadfast. Favorable to have somewhere to go.",
  xiang:"雷风，恒；君子以立不易方。", xiangEn:"Thunder and wind: Duration. The noble one stands firm and does not change his course.",
  lines:[
    {yao:"初六", text:"浚恒，贞凶，无攸利。", bai:"求恒过深（急于常久之道），守此则凶，无所利益。", en:"Seeking duration too deeply. Steadfastness brings misfortune. Nothing is favorable."},
    {yao:"九二", text:"悔亡。", bai:"悔恨消失。", en:"Regret vanishes."},
    {yao:"九三", text:"不恒其德，或承之羞，贞吝。", bai:"不能恒守其德，有时会招致羞辱，守此则憾惜。", en:"Not making his virtue lasting, he meets with disgrace. Steadfastness here brings humiliation."},
    {yao:"九四", text:"田无禽。", bai:"田猎而无所获（久处非位）。", en:"Hunting and catching no game."},
    {yao:"六五", text:"恒其德，贞，妇人吉，夫子凶。", bai:"恒守其柔顺之德，守此，对妇人吉，对男子则凶。", en:"Making one's virtue lasting and steadfast: for a wife, good fortune; for a husband, misfortune."},
    {yao:"上六", text:"振恒，凶。", bai:"躁动不安而求恒（动极不能守常），有凶险。", en:"Restless agitation as a constant state. Misfortune."}
  ]
},
33: {
  name:"天山遁", en:"Dùn · Retreat", sym:"䷠",
  tri:"乾上艮下", triEn:"Heaven over Mountain",
  gua:"遁，亨，小利贞。", guaBai:"遁卦：退避可以亨通，在小的方面利于守持正固。", guaEn:"Retreat brings success. In small matters it is favorable to remain persevering.",
  xiang:"天下有山，遁；君子以远小人，不恶而严。", xiangEn:"Under heaven there is the mountain: the image of Retreat. The superior man keeps small men at a distance, not with anger but with reserve and dignity.",
  lines:[
    {yao:"初六", text:"遁尾，厉，勿用有攸往。", bai:"退避落在最后（如尾），有危险，此时不宜有所前往。", en:"At the tail of the retreat; this is dangerous. One should not undertake anything."},
    {yao:"六二", text:"执之用黄牛之革，莫之胜说。", bai:"用黄牛皮革牢牢捆住，谁也无法把它解脱。", en:"He holds fast with the hide of a yellow ox; no one can loosen his grip."},
    {yao:"九三", text:"系遁，有疾厉，畜臣妾吉。", bai:"被牵系而不能果断退避，如患病般危险；但用来蓄养臣仆婢妾则吉利。", en:"A retreat that is entangled brings sickness and danger; yet for keeping servants and maids it is good fortune."},
    {yao:"九四", text:"好遁，君子吉，小人否。", bai:"能有所喜好仍毅然退避，君子如此则吉，小人则做不到。", en:"Retreat willingly despite one's liking: for the superior man good fortune, for the inferior man not so."},
    {yao:"九五", text:"嘉遁，贞吉。", bai:"美好而适时的退避，守正则吉。", en:"An admirable, timely retreat. Perseverance brings good fortune."},
    {yao:"上九", text:"肥遁，无不利。", bai:"从容宽裕、毫无系累地退避，无所不利。", en:"A generous, untrammeled retreat. Nothing that does not further."}
  ]
},
34: {
  name:"雷天大壮", en:"Dà Zhuàng · The Power of the Great", sym:"䷡",
  tri:"震上乾下", triEn:"Thunder over Heaven",
  gua:"大壮，利贞。", guaBai:"大壮卦：利于守持正固。", guaEn:"The Power of the Great. It is favorable to persevere.",
  xiang:"雷在天上，大壮；君子以非礼弗履。", xiangEn:"Thunder in heaven above: the image of the Power of the Great. The superior man does not tread upon paths that do not accord with propriety.",
  lines:[
    {yao:"初九", text:"壮于趾，征凶，有孚。", bai:"强壮表现在脚趾上（急于前进），贸然前行必有凶险，这是确实可信的。", en:"Power in the toes: to advance brings misfortune. This is certainly true."},
    {yao:"九二", text:"贞吉。", bai:"守持正固则吉利。", en:"Perseverance brings good fortune."},
    {yao:"九三", text:"小人用壮，君子用罔，贞厉。羝羊触藩，羸其角。", bai:"小人逞强用壮，君子则视强壮如无（不恃强），固执前行有危险。公羊用角顶撞篱笆，反被卡住了角。", en:"The inferior man works through power, the superior man does not; to persist is dangerous. A ram butts against a hedge and entangles its horns."},
    {yao:"九四", text:"贞吉，悔亡。藩决不羸，壮于大舆之輹。", bai:"守正则吉，悔恨消失。篱笆已被撞开，角不再被卡住；强壮如大车的车轴般稳固有力。", en:"Perseverance brings good fortune; remorse vanishes. The hedge opens, no entanglement; power lies in the axle of a great cart."},
    {yao:"六五", text:"丧羊于易，无悔。", bai:"在田畔和易之处丧失了羊（放弃逞强），没有悔恨。", en:"He loses the ram with ease; no remorse."},
    {yao:"上六", text:"羝羊触藩，不能退，不能遂，无攸利，艰则吉。", bai:"公羊角顶在篱笆上，进退两难，无所利益；但能安于艰难持守则终获吉。", en:"A ram butts against a hedge; it can neither retreat nor advance. Nothing furthers. If one endures the difficulty, good fortune comes."}
  ]
},
35: {
  name:"火地晋", en:"Jìn · Progress", sym:"䷢",
  tri:"离上坤下", triEn:"Fire over Earth",
  gua:"晋，康侯用锡马蕃庶，昼日三接。", guaBai:"晋卦：使邦国安康的诸侯获赏众多的车马，一天之内三次受到接见。", guaEn:"Progress. The prince who brings peace to the land is honored with horses in great numbers and received three times in a single day.",
  xiang:"明出地上，晋；君子以自昭明德。", xiangEn:"The light rises above the earth: the image of Progress. The superior man himself brightens his shining virtue.",
  lines:[
    {yao:"初六", text:"晋如摧如，贞吉。罔孚，裕无咎。", bai:"上进时或受阻挫，守正则吉。即便不被信任，也从容宽裕，便无咎害。", en:"Progressing yet checked; perseverance brings good fortune. If one meets no trust, remain calm and generous—no blame."},
    {yao:"六二", text:"晋如愁如，贞吉。受兹介福，于其王母。", bai:"上进时心怀忧愁，守正则吉。将从王母（尊长）那里承受这样的大福。", en:"Progressing, yet in sorrow; perseverance brings good fortune. One receives great blessing from one's ancestress."},
    {yao:"六三", text:"众允，悔亡。", bai:"得到众人的信从，悔恨消失。", en:"All are in accord; remorse disappears."},
    {yao:"九四", text:"晋如鼫鼠，贞厉。", bai:"上进时像贪婪的鼫鼠（窃据高位而不称职），固守则有危险。", en:"Progress like a marmot (greedy and fearful); to persist is dangerous."},
    {yao:"六五", text:"悔亡，失得勿恤，往吉，无不利。", bai:"悔恨消失，不必忧虑得失，前往则吉，无所不利。", en:"Remorse vanishes. Do not worry over loss and gain; to go forward brings good fortune, nothing but advantage."},
    {yao:"上九", text:"晋其角，维用伐邑，厉吉，无咎，贞吝。", bai:"上进到了顶端如兽角，只宜用来征讨自己的城邑（自治），虽危而吉，无咎，但固执下去会有憾惜。", en:"Progress with the horns is used only to punish one's own city; danger yet good fortune, no blame, but perseverance brings regret."}
  ]
},
36: {
  name:"地火明夷", en:"Míng Yí · Darkening of the Light", sym:"䷣",
  tri:"坤上离下", triEn:"Earth over Fire",
  gua:"明夷，利艰贞。", guaBai:"明夷卦：光明受损之时，利于在艰难中守持正固。", guaEn:"Darkening of the Light. In adversity it is favorable to be persevering.",
  xiang:"明入地中，明夷；君子以莅众，用晦而明。", xiangEn:"The light has sunk into the earth: the image of the Darkening of the Light. The superior man, in governing the people, veils his brightness yet still shines.",
  lines:[
    {yao:"初九", text:"明夷于飞，垂其翼。君子于行，三日不食，有攸往，主人有言。", bai:"光明受损时如鸟飞而垂下翅膀。君子在路途中三日不进食，有所前往，遇到的主人会有责难之言。", en:"Darkening of the light in flight, it lowers its wings. The superior man on his journey does not eat for three days; wherever he goes, the host has words of criticism."},
    {yao:"六二", text:"明夷，夷于左股，用拯马壮，吉。", bai:"光明受损，伤在左腿；若能借助强壮的马来拯救自己，则吉。", en:"Darkening of the light wounds him in the left thigh; he saves himself with a strong horse. Good fortune."},
    {yao:"九三", text:"明夷于南狩，得其大首，不可疾贞。", bai:"光明受损之时向南出猎，擒获了首恶（大首），但不可操之过急地求正。", en:"Darkening of the light during the hunt in the south: he seizes the great chief. One must not expect perseverance to come too quickly."},
    {yao:"六四", text:"入于左腹，获明夷之心，于出门庭。", bai:"深入到左侧腹地，探知了造成光明受损者的心思，于是走出门庭（远离）。", en:"He penetrates the left side of the belly, gets at the very heart of the darkening, and leaves through gate and courtyard."},
    {yao:"六五", text:"箕子之明夷，利贞。", bai:"像箕子那样在黑暗中晦藏其明（佯狂守志），利于守正。", en:"The darkening of the light as with Prince Ji. Perseverance furthers."},
    {yao:"上六", text:"不明晦，初登于天，后入于地。", bai:"不再光明而陷入昏暗；起初升到天上（居于高位），最终坠落到地下。", en:"Not light but darkness. First he climbs to heaven, then he plunges into the earth."}
  ]
},
37: {
  name:"风火家人", en:"Jiā Rén · The Family", sym:"䷤",
  tri:"巽上离下", triEn:"Wind over Fire",
  gua:"家人，利女贞。", guaBai:"家人卦：利于女子守持正固。", guaEn:"The Family. It is favorable for the woman to be persevering.",
  xiang:"风自火出，家人；君子以言有物而行有恒。", xiangEn:"Wind comes forth from fire: the image of the Family. The superior man has substance in his words and consistency in his conduct.",
  lines:[
    {yao:"初九", text:"闲有家，悔亡。", bai:"治家之初就防范于未然、立下规矩，悔恨消失。", en:"Firm seclusion within the family. Remorse disappears."},
    {yao:"六二", text:"无攸遂，在中馈，贞吉。", bai:"不擅自作主行事，安于操持家中饮食之事，守正则吉。", en:"She should not follow her own whims; she attends to the food within. Perseverance brings good fortune."},
    {yao:"九三", text:"家人嗃嗃，悔厉吉；妇子嘻嘻，终吝。", bai:"治家过于严厉，虽有悔而危，却终得吉；若妇孺嬉笑无度、放纵松弛，则终致憾惜。", en:"When the family is treated with severity, remorse and danger yet good fortune; when wife and children giggle unrestrained, it ends in regret."},
    {yao:"六四", text:"富家，大吉。", bai:"能使家庭富足，大为吉利。", en:"She enriches the family. Great good fortune."},
    {yao:"九五", text:"王假有家，勿恤，吉。", bai:"君王以美德感化、临御其家，不必忧虑，吉利。", en:"As a king he approaches his family. Fear not; good fortune."},
    {yao:"上九", text:"有孚威如，终吉。", bai:"以诚信治家而又有威严，最终吉利。", en:"His sincerity commands respect. In the end, good fortune."}
  ]
},
38: {
  name:"火泽睽", en:"Kuí · Opposition", sym:"䷥",
  tri:"离上兑下", triEn:"Fire over Lake",
  gua:"睽，小事吉。", guaBai:"睽卦：乖违背离之时，在小事上可获吉利。", guaEn:"Opposition. In small matters, good fortune.",
  xiang:"上火下泽，睽；君子以同而异。", xiangEn:"Above fire, below the lake: the image of Opposition. The superior man, amid all fellowship, retains his individuality.",
  lines:[
    {yao:"初九", text:"悔亡，丧马勿逐，自复；见恶人，无咎。", bai:"悔恨消失；丢失的马不必去追，它会自己回来；即使会见所憎恶的人，也无咎害。", en:"Remorse vanishes. If you lose your horse, do not run after it; it will come back of itself. When you see evil people, guard yourself against mistakes—no blame."},
    {yao:"九二", text:"遇主于巷，无咎。", bai:"在小巷中遇见了君主（志同之人），无咎。", en:"One meets his lord in a narrow street. No blame."},
    {yao:"六三", text:"见舆曳，其牛掣，其人天且劓，无初有终。", bai:"看见大车被拖拽，牛被牵制难行，赶车之人受了黥额割鼻之刑；起初不顺，但终能有好结果。", en:"One sees the wagon dragged back, the oxen halted, the man's hair and nose cut off. No good beginning, but a good end."},
    {yao:"九四", text:"睽孤，遇元夫，交孚，厉无咎。", bai:"乖离而孤独，遇到了志同的善人（元夫），彼此以诚相交，虽危而无咎。", en:"Isolated through opposition, one meets a like-minded man with whom one joins in good faith. Danger, but no blame."},
    {yao:"六五", text:"悔亡，厥宗噬肤，往何咎。", bai:"悔恨消失，同宗之人相亲相合如咬合柔嫩之肤，前往有何咎害？", en:"Remorse disappears. The companion bites through the covering. To go forward—what blame could there be?"},
    {yao:"上九", text:"睽孤，见豕负涂，载鬼一车，先张之弧，后说之弧，匪寇婚媾，往遇雨则吉。", bai:"乖离孤独之极，疑心生暗鬼：看见猪背满泥，看见一车鬼怪，先张弓欲射，后又放下弓；原来对方不是强寇而是婚配之人，前往逢雨（阴阳和合）则吉。", en:"Isolated through opposition, one sees a pig covered with mud, a wagon full of devils. First one draws the bow, then lays it aside. He is not a robber but a suitor. As one goes, rain falls; then good fortune."}
  ]
},
39: {
  name:"水山蹇", en:"Jiǎn · Obstruction", sym:"䷦",
  tri:"坎上艮下", triEn:"Water over Mountain",
  gua:"蹇，利西南，不利东北；利见大人，贞吉。", guaBai:"蹇卦：利于往西南方，不利于往东北方；利于出现大人，守正则吉。", guaEn:"Obstruction. The southwest furthers, the northeast does not. It furthers one to see the great man. Perseverance brings good fortune.",
  xiang:"山上有水，蹇；君子以反身修德。", xiangEn:"Water upon the mountain: the image of Obstruction. The superior man turns his attention to himself and cultivates his virtue.",
  lines:[
    {yao:"初六", text:"往蹇，来誉。", bai:"前往会遇险难，归来（暂止）则得赞誉。", en:"Going leads to obstruction, coming back brings praise."},
    {yao:"六二", text:"王臣蹇蹇，匪躬之故。", bai:"王之忠臣在艰险中奋力赴难，并非为了自身的私利。", en:"The king's servant is beset by obstruction upon obstruction, but it is not for his own sake."},
    {yao:"九三", text:"往蹇来反。", bai:"前往会遇险，返回则得安。", en:"Going leads to obstruction; hence he comes back."},
    {yao:"六四", text:"往蹇来连。", bai:"前往会遇险，归来则能与人联合（团结互助）。", en:"Going leads to obstruction; coming back leads to union."},
    {yao:"九五", text:"大蹇朋来。", bai:"处于大险难之中，朋友前来相助。", en:"In the midst of the greatest obstruction, friends come."},
    {yao:"上六", text:"往蹇来硕，吉，利见大人。", bai:"前往会遇险，归来则有大的收获，吉利，利于出现大人。", en:"Going leads to obstruction, coming brings great achievement. Good fortune. It furthers one to see the great man."}
  ]
},
40: {
  name:"雷水解", en:"Xiè · Deliverance", sym:"䷧",
  tri:"震上坎下", triEn:"Thunder over Water",
  gua:"解，利西南，无所往，其来复吉。有攸往，夙吉。", guaBai:"解卦：利于往西南方；若无所往，返回复常则吉；若有所往，及早行动则吉。", guaEn:"Deliverance. The southwest furthers. If there is no longer anything to which one must go, return brings good fortune. If there is still something to be done, hasten to do it, and good fortune comes.",
  xiang:"雷雨作，解；君子以赦过宥罪。", xiangEn:"Thunder and rain set in: the image of Deliverance. The superior man pardons mistakes and forgives misdeeds.",
  lines:[
    {yao:"初六", text:"无咎。", bai:"没有咎害。", en:"Without blame."},
    {yao:"九二", text:"田获三狐，得黄矢，贞吉。", bai:"田猎捕获三只狐狸，得到黄色的箭（象征中直之道），守正则吉。", en:"One kills three foxes in the field and receives a yellow arrow. Perseverance brings good fortune."},
    {yao:"六三", text:"负且乘，致寇至，贞吝。", bai:"背着货物却又乘车（身份不称，炫耀财物），招致强盗前来，固执下去有憾惜。", en:"A man carries a burden on his back yet rides in a carriage; he invites robbers to draw near. Perseverance brings humiliation."},
    {yao:"九四", text:"解而拇，朋至斯孚。", bai:"解除脚拇指的牵累（远离小人），志同的朋友到来并以诚相待。", en:"Deliver yourself from your big toe. Then the companion comes, and him you can trust."},
    {yao:"六五", text:"君子维有解，吉，有孚于小人。", bai:"君子只有真正解脱（摆脱小人纠缠）才吉，此举也能取信、感化小人。", en:"If only the superior man can deliver himself, it brings good fortune. Thus he proves to inferior men that he is in earnest."},
    {yao:"上六", text:"公用射隼于高墉之上，获之，无不利。", bai:"王公在高墙之上射猎凶鹰，一举擒获，无所不利。", en:"The prince shoots at a hawk on a high wall. He kills it. Everything furthers."}
  ]
},
41: {
  name:"山泽损", en:"Sǔn · Decrease", sym:"䷨",
  tri:"艮上兑下", triEn:"Mountain over Lake",
  gua:"损，有孚，元吉，无咎，可贞，利有攸往。曷之用，二簋可用享。", guaBai:"损卦：心怀诚信而有所减损，大吉，无咎，可以守正，利于有所前往。用什么来祭祀呢？两簋薄物也可用来奉献。", guaEn:"Decrease combined with sincerity brings supreme good fortune without blame. One may persevere in this. It furthers one to undertake something. How is this to be carried out? Two small bowls may be used for the offering.",
  xiang:"山下有泽，损；君子以惩忿窒欲。", xiangEn:"At the foot of the mountain, the lake: the image of Decrease. The superior man curbs his anger and restrains his desires.",
  lines:[
    {yao:"初九", text:"已事遄往，无咎，酌损之。", bai:"办完自己的事就赶快前去（助上），无咎，但要斟酌着减损自己（适度）。", en:"Going quickly when one's own affairs are finished is without blame. But one must reflect on how far one may decrease oneself."},
    {yao:"九二", text:"利贞，征凶，弗损益之。", bai:"利于守正，冒进则凶；不减损自己反而能增益于上。", en:"Perseverance furthers. To undertake something brings misfortune. Without decreasing oneself, one is able to bring increase to others."},
    {yao:"六三", text:"三人行，则损一人；一人行，则得其友。", bai:"三人同行，则会减去一人（生嫌隙）；一人独行，则会得到志同的伙伴。", en:"When three people journey together, their number decreases by one. When one man journeys alone, he finds a companion."},
    {yao:"六四", text:"损其疾，使遄有喜，无咎。", bai:"减损、革除自己的过失毛病，使人迅速来相助而有喜庆，无咎。", en:"If a man decreases his faults, it makes the other hasten to come and rejoice. No blame."},
    {yao:"六五", text:"或益之十朋之龟，弗克违，元吉。", bai:"有人赐予价值十朋的大宝龟，无法推辞，大吉。", en:"Someone increases him by ten pairs of tortoises; this cannot be opposed. Supreme good fortune."},
    {yao:"上九", text:"弗损益之，无咎，贞吉，利有攸往，得臣无家。", bai:"不减损他人而广益于人，无咎，守正则吉，利于有所前往，能得到不分内外、公而忘私的臣属。", en:"If one is increased without depriving others, there is no blame. Perseverance brings good fortune. It furthers one to undertake something. One obtains servants but no longer has a separate home."}
  ]
},
42: {
  name:"风雷益", en:"Yì · Increase", sym:"䷩",
  tri:"巽上震下", triEn:"Wind over Thunder",
  gua:"益，利有攸往，利涉大川。", guaBai:"益卦：利于有所前往，利于渡越大河。", guaEn:"Increase. It furthers one to undertake something. It furthers one to cross the great water.",
  xiang:"风雷，益；君子以见善则迁，有过则改。", xiangEn:"Wind and thunder: the image of Increase. The superior man, when he sees good, imitates it; when he has faults, he corrects them.",
  lines:[
    {yao:"初九", text:"利用为大作，元吉，无咎。", bai:"利于借此有所增益去干一番大事业，大吉，无咎。", en:"It furthers one to accomplish great deeds. Supreme good fortune. No blame."},
    {yao:"六二", text:"或益之十朋之龟，弗克违，永贞吉。王用享于帝，吉。", bai:"有人赐予价值十朋的大宝龟，无法推辞，长久守正则吉。王用此诚敬来祭享上帝，吉。", en:"Someone increases him by ten pairs of tortoises; this cannot be opposed. Constant perseverance brings good fortune. The king presents his offering to God. Good fortune."},
    {yao:"六三", text:"益之用凶事，无咎。有孚中行，告公用圭。", bai:"把增益用于救凶济难之事，无咎。心存诚信、行事守中，持玉圭禀告王公。", en:"One is enriched through unfortunate events. No blame, if you are sincere and walk in the middle, and report to the prince with a seal of authority."},
    {yao:"六四", text:"中行，告公从，利用为依迁国。", bai:"行事守持中道，禀告王公便得听从，利于依托（大局）而迁徙国都。", en:"If you walk in the middle and report to the prince, he will follow. It furthers one to be used in the removal of the capital."},
    {yao:"九五", text:"有孚惠心，勿问元吉。有孚惠我德。", bai:"心怀诚信、施惠于民之心，不必占问即知大吉。民众也会以诚信感念、报答我的恩德。", en:"If in truth you have a kind heart, ask not. Supreme good fortune. Truly, kindness will be recognized as your virtue."},
    {yao:"上九", text:"莫益之，或击之，立心勿恒，凶。", bai:"没有人来增益他，反而有人来攻击他；因为其立心不能持久坚定（求益不已），凶。", en:"He brings increase to no one. Indeed, someone even strikes him. He does not keep his heart constantly steady. Misfortune."}
  ]
},
43: {
  name:"泽天夬", en:"Guài · Breakthrough", sym:"䷪",
  tri:"兑上乾下", triEn:"Lake over Heaven",
  gua:"夬，扬于王庭，孚号有厉，告自邑，不利即戎，利有攸往。", guaBai:"夬卦：在王庭上公开揭发（小人罪状），诚信地号令众人并申明危险；先从自己的邑邦告诫做起，不宜贸然动武，利于有所前往。", guaEn:"Breakthrough. One must resolutely make the matter known at the court of the king. It must be announced truthfully. Danger. One must notify one's own city. It does not further to resort to arms. It furthers one to undertake something.",
  xiang:"泽上于天，夬；君子以施禄及下，居德则忌。", xiangEn:"The lake has risen up to heaven: the image of Breakthrough. The superior man dispenses riches downward and refrains from resting on his virtue.",
  lines:[
    {yao:"初九", text:"壮于前趾，往不胜为咎。", bai:"强壮表现在前进的脚趾上（急躁冒进），前往若不能取胜就会招致咎害。", en:"Powerful in the forward-striding toes. When one goes and is not equal to the task, one makes a mistake."},
    {yao:"九二", text:"惕号，莫夜有戎，勿恤。", bai:"心怀警惕并发出号令，即使夜间有敌来犯，也不必忧惧。", en:"A cry of alarm. Arms at evening and at night. Fear nothing."},
    {yao:"九三", text:"壮于頄，有凶。君子夬夬独行，遇雨若濡，有愠，无咎。", bai:"强壮表现在颧骨上（怒形于色），有凶。君子决然独行去清除小人，途中遇雨被沾湿，虽招人愠怒（一时受疑），终无咎害。", en:"To be powerful in the cheekbones brings misfortune. The superior man is firmly resolved; he walks alone and is caught in the rain. He becomes soiled, and people murmur against him. No blame."},
    {yao:"九四", text:"臀无肤，其行次且。牵羊悔亡，闻言不信。", bai:"臀部受伤没有好皮肉，行走艰难迟疑。若能像牵羊一样随人而行则悔恨消失，可惜听了忠言却不肯相信。", en:"There is no skin on his thighs, and walking comes hard. If a man were to let himself be led like a sheep, remorse would disappear. But if these words are heard they will not be believed."},
    {yao:"九五", text:"苋陆夬夬，中行无咎。", bai:"像铲除苋陆（柔脆之草）那样果断清除小人，行事守中则无咎。", en:"In dealing with weeds, firm resolution is necessary. Walking in the middle remains free of blame."},
    {yao:"上六", text:"无号，终有凶。", bai:"再哭号呼救也无济于事，最终有凶。", en:"No cry. In the end, misfortune comes."}
  ]
},
44: {
  name:"天风姤", en:"Gòu · Coming to Meet", sym:"䷫",
  tri:"乾上巽下", triEn:"Heaven over Wind",
  gua:"姤，女壮，勿用取女。", guaBai:"姤卦：女子过于强盛（一阴渐长），不宜娶这样的女子。", guaEn:"Coming to Meet. The maiden is powerful. One should not marry such a maiden.",
  xiang:"天下有风，姤；后以施命诰四方。", xiangEn:"Under heaven, wind: the image of Coming to Meet. The prince issues his commands and proclaims them to the four quarters of heaven.",
  lines:[
    {yao:"初六", text:"系于金柅，贞吉，有攸往，见凶，羸豕孚蹢躅。", bai:"用金属的刹车器把它牢牢系住（制止阴之滋长），守正则吉；若放纵前往，必见凶险，正如瘦弱的母猪也躁动不安、不可轻信。", en:"It must be checked with a brake of bronze. Perseverance brings good fortune. If one lets it take its course, one experiences misfortune. Even a lean pig has it in it to rage around."},
    {yao:"九二", text:"包有鱼，无咎，不利宾。", bai:"厨房里包着鱼（暂时控制住了阴），无咎，但不利于用它款待宾客（不可外扩）。", en:"There is a fish in the kitchen. No blame. But it does not further guests."},
    {yao:"九三", text:"臀无肤，其行次且，厉，无大咎。", bai:"臀部受伤没有好皮肉，行走艰难迟疑，有危险，但无大的咎害。", en:"There is no skin on his thighs, and walking comes hard. If one is mindful of the danger, no great mistake is made."},
    {yao:"九四", text:"包无鱼，起凶。", bai:"厨房里没有鱼了（失去所应亲附者），会引起凶险。", en:"No fish in the kitchen. This gives rise to misfortune."},
    {yao:"九五", text:"以杞包瓜，含章，有陨自天。", bai:"用高大的杞树叶包裹甜瓜（以尊护贤、含蓄内美），内含章美，福庆将如从天而降。", en:"A melon covered with willow leaves. Hidden lines. Then it drops down to one from heaven."},
    {yao:"上九", text:"姤其角，吝，无咎。", bai:"相遇于坚硬的角端（高亢难合），有憾惜，但无咎害。", en:"He comes to meet with his horns. Humiliation. No blame."}
  ]
},
45: {
  name:"泽地萃", en:"Cuì · Gathering Together", sym:"䷬",
  tri:"兑上坤下", triEn:"Lake over Earth",
  gua:"萃，亨。王假有庙，利见大人，亨，利贞。用大牲吉，利有攸往。", guaBai:"萃卦：亨通。君王以至诚感格于宗庙，利于出现大人，亨通，利于守正。用大的牺牲祭祀则吉，利于有所前往。", guaEn:"Gathering Together. Success. The king approaches his temple. It furthers one to see the great man. This brings success. Perseverance furthers. To bring great offerings creates good fortune. It furthers one to undertake something.",
  xiang:"泽上于地，萃；君子以除戎器，戒不虞。", xiangEn:"The lake rises up over the earth: the image of Gathering Together. The superior man renews his weapons to meet the unforeseen.",
  lines:[
    {yao:"初六", text:"有孚不终，乃乱乃萃，若号，一握为笑，勿恤，往无咎。", bai:"心怀诚信却不能始终如一，于是时而涣乱时而聚合；若能真诚呼求，则由纷乱转为一握手言欢，不必忧虑，前往无咎。", en:"If you are sincere but not to the end, there will be sometimes confusion, sometimes gathering. If you call out, then after one grasp of the hand you can laugh again. Do not worry. Going is without blame."},
    {yao:"六二", text:"引吉，无咎，孚乃利用禴。", bai:"被引荐、相牵引而聚则吉，无咎；心怀诚信，即使用微薄的禴祭也能感通神明。", en:"Letting oneself be drawn brings good fortune and remains blameless. If one is sincere, even a small offering suffices."},
    {yao:"六三", text:"萃如嗟如，无攸利，往无咎，小吝。", bai:"想聚合却不得而嗟叹，无所利益；但前往（上求于外）则无咎，只有小的憾惜。", en:"Gathering together amid sighs. Nothing that would further. Going is without blame. Slight humiliation."},
    {yao:"九四", text:"大吉，无咎。", bai:"大为吉利，才能无咎。", en:"Great good fortune. No blame."},
    {yao:"九五", text:"萃有位，无咎。匪孚，元永贞，悔亡。", bai:"聚合天下而居于尊位，无咎；对尚未信服者，应长久保持至诚中正之德，则悔恨消失。", en:"If in gathering together one has position, this brings no blame. If there are some who are not yet sincerely in the work, sublime and enduring perseverance is needed. Then remorse disappears."},
    {yao:"上六", text:"赍咨涕洟，无咎。", bai:"（孤处难聚而）悲叹哭泣、涕泪交流，能如此警醒自责则无咎。", en:"Lamenting and sighing, floods of tears. No blame."}
  ]
},
46: {
  name:"地风升", en:"Shēng · Pushing Upward", sym:"䷭",
  tri:"坤上巽下", triEn:"Earth over Wind",
  gua:"升，元亨，用见大人，勿恤，南征吉。", guaBai:"升卦：大为亨通，宜于进见大人，不必忧虑，向南进发则吉。", guaEn:"Pushing Upward has supreme success. One must see the great man. Fear not. Departure toward the south brings good fortune.",
  xiang:"地中生木，升；君子以顺德，积小以高大。", xiangEn:"Within the earth, wood grows: the image of Pushing Upward. The superior man, of devoted character, heaps up small things in order to achieve something high and great.",
  lines:[
    {yao:"初六", text:"允升，大吉。", bai:"得到信任而顺利上升，大吉。", en:"Pushing upward that meets with confidence brings great good fortune."},
    {yao:"九二", text:"孚乃利用禴，无咎。", bai:"心怀诚信，即使用微薄的禴祭也能感通，无咎。", en:"If one is sincere, it furthers one to bring even a small offering. No blame."},
    {yao:"九三", text:"升虚邑。", bai:"上升如进入空无阻挡的城邑，畅通无阻。", en:"One pushes upward into an empty city."},
    {yao:"六四", text:"王用亨于岐山，吉，无咎。", bai:"君王在岐山举行祭亨之礼（顺天应人），吉，无咎。", en:"The king offers him Mount Ch'i. Good fortune. No blame."},
    {yao:"六五", text:"贞吉，升阶。", bai:"守正则吉，如循着台阶稳步上升。", en:"Perseverance brings good fortune. One pushes upward by steps."},
    {yao:"上六", text:"冥升，利于不息之贞。", bai:"昏昧不知止地一味上升，唯有利于在自强不息、持之以恒地修德守正上。", en:"Pushing upward in darkness. It furthers one only to be unremittingly persevering."}
  ]
},
47: {
  name:"泽水困", en:"Kùn · Oppression", sym:"䷮",
  tri:"兑上坎下", triEn:"Lake over Water",
  gua:"困，亨，贞，大人吉，无咎，有言不信。", guaBai:"困卦：（身处困境而道可）亨通，守正，大人则吉，无咎；此时纵有言辩也不被人信。", guaEn:"Oppression. Success. Perseverance. The great man brings about good fortune. No blame. When one has something to say, it is not believed.",
  xiang:"泽无水，困；君子以致命遂志。", xiangEn:"There is no water in the lake: the image of Oppression. The superior man stakes his life on following his will.",
  lines:[
    {yao:"初六", text:"臀困于株木，入于幽谷，三岁不觌。", bai:"臀部困坐在枯木桩上（处境窘迫），退入幽暗的深谷，三年都不见天日。", en:"He sits oppressed under a bare tree and strays into a gloomy valley. For three years he sees nothing."},
    {yao:"九二", text:"困于酒食，朱绂方来，利用享祀，征凶，无咎。", bai:"困顿于酒食（暂受安逸之困），象征禄位的朱色蔽膝正将到来，此时利于祭祀祈福，贸然进取则凶，然守静无咎。", en:"He is oppressed while at meat and drink. The man with the scarlet knee bands is just coming. It furthers one to offer sacrifice. To set forth brings misfortune. No blame."},
    {yao:"六三", text:"困于石，据于蒺藜，入于其宫，不见其妻，凶。", bai:"被巨石所困阻，又踩坐在蒺藜之上，回到家中却不见妻子，凶。", en:"A man permits himself to be oppressed by stone, and leans on thorns and thistles. He enters his house and does not see his wife. Misfortune."},
    {yao:"九四", text:"来徐徐，困于金车，吝，有终。", bai:"缓缓而来（迟疑不前），被华贵的金车所困（受阻于财势），有憾惜，但终能相合而有好结果。", en:"He comes very quietly, oppressed in a golden carriage. Humiliation, but the end is reached."},
    {yao:"九五", text:"劓刖，困于赤绂，乃徐有说，利用祭祀。", bai:"（志士受刑）遭割鼻断足之难，为赤色蔽膝（高位之责）所困；但渐渐能获得解脱，利于以祭祀之诚感通神人。", en:"His nose and feet are cut off. Oppression at the hands of the man with the scarlet knee bands. Joy comes softly. It furthers one to make offerings and libations."},
    {yao:"上六", text:"困于葛藟，于臲卼，曰动悔。有悔，征吉。", bai:"被葛藤缠绕所困，处境摇摇欲坠、动辄生悔；若能悔悟而奋起前行，则吉。", en:"He is oppressed by creeping vines. He moves uncertainly and says, 'Movement brings remorse.' If one feels remorse over this and makes a start, good fortune comes."}
  ]
},
48: {
  name:"水风井", en:"Jǐng · The Well", sym:"䷯",
  tri:"坎上巽下", triEn:"Water over Wind",
  gua:"井，改邑不改井，无丧无得，往来井井。汔至，亦未繘井，羸其瓶，凶。", guaBai:"井卦：城邑可以迁改，水井却不能移动；井水不减不增，往来汲水的人都取用它。若汲水将到井口，却尚未拉出井绳，反而打破了水瓶，凶。", guaEn:"The Well. The town may be changed, but the well cannot be changed. It neither decreases nor increases. They come and go and draw from the well. If one gets down almost to the water and the rope does not go all the way, or the jug breaks, it brings misfortune.",
  xiang:"木上有水，井；君子以劳民劝相。", xiangEn:"Water over wood: the image of the Well. The superior man encourages the people at their work, and exhorts them to help one another.",
  lines:[
    {yao:"初六", text:"井泥不食，旧井无禽。", bai:"井底淤泥浑浊，井水不能饮用；废旧的枯井连禽鸟都不来。", en:"One does not drink the mud of the well. No animals come to an old well."},
    {yao:"九二", text:"井谷射鲋，瓮敝漏。", bai:"井水如山谷小流般漏泄，只能射取井中的小鱼；打水的瓮破败渗漏。", en:"At the wellhole one shoots small fish. The jug is broken and leaks."},
    {yao:"九三", text:"井渫不食，为我心恻，可用汲，王明，并受其福。", bai:"井已淘洗洁净却无人饮用，令我心中恻然悲伤；这井分明可以汲用，倘若君王英明（举贤任用），上下都能同受其福。", en:"The well is cleaned, but no one drinks from it. This is my heart's sorrow, for one might draw from it. If the king were clear-minded, good fortune might be enjoyed in common."},
    {yao:"六四", text:"井甃，无咎。", bai:"用砖石修砌井壁（暂加整治），无咎。", en:"The well is being lined with stone. No blame."},
    {yao:"九五", text:"井冽，寒泉食。", bai:"井水清澈甘美，如清冽的寒泉可供饮用。", en:"In the well there is a clear, cold spring from which one can drink."},
    {yao:"上六", text:"井收勿幕，有孚元吉。", bai:"井水汲取有成而不加遮盖（惠泽普施），心怀诚信，大吉。", en:"One draws from the well without hindrance. It is dependable. Supreme good fortune."}
  ]
},
49: {
  name:"泽火革", en:"Gé · Revolution (Molting)", sym:"䷰",
  tri:"兑上离下", triEn:"Lake over Fire",
  gua:"革，己日乃孚，元亨利贞，悔亡。", guaBai:"变革之道，要到己日（时机成熟之时）人们才会信服。大为亨通，利于守持正固，悔恨消亡。", guaEn:"Revolution: trust comes only on the appointed day. Supreme success, benefit in steadfastness; regret vanishes.",
  xiang:"泽中有火，革；君子以治历明时。", xiangEn:"Fire within the lake: Revolution. The superior person sets the calendar in order and makes the seasons clear.",
  lines:[
    {yao:"初九", text:"巩用黄牛之革。", bai:"用黄牛的皮革牢牢捆缚，暂不可轻举妄动。", en:"Bound firmly with the hide of a yellow ox; do not act yet."},
    {yao:"六二", text:"己日乃革之，征吉，无咎。", bai:"到己日再行变革，前往吉祥，没有灾祸。", en:"On the appointed day, then reform; to go forward brings good fortune and no blame."},
    {yao:"九三", text:"征凶，贞厉，革言三就，有孚。", bai:"急进则凶，守正防危；变革之议反复商定三次而成，方能取信于人。", en:"Advance brings misfortune; steadfastness amid danger. When the talk of reform has come round three times, one may be trusted."},
    {yao:"九四", text:"悔亡，有孚改命，吉。", bai:"悔恨消亡，怀着诚信改革天命，吉祥。", en:"Regret vanishes; with sincerity one changes the mandate. Good fortune."},
    {yao:"九五", text:"大人虎变，未占有孚。", bai:"大人变革如猛虎焕然更新，不待占卜自有诚信。", en:"The great one changes like a tiger; before divining, there is already trust."},
    {yao:"上六", text:"君子豹变，小人革面，征凶，居贞吉。", bai:"君子变革如豹纹焕彩，小人也顺服改容；此时急进则凶，安居守正则吉。", en:"The superior one changes like a leopard; the small folk change their faces. To advance brings misfortune; to abide steadfast brings good fortune."}
  ]
},
50: {
  name:"火风鼎", en:"Dǐng · The Cauldron", sym:"䷱",
  tri:"离上巽下", triEn:"Fire over Wind",
  gua:"鼎，元吉，亨。", guaBai:"鼎卦，大为吉祥，亨通。", guaEn:"The Cauldron: supreme good fortune and success.",
  xiang:"木上有火，鼎；君子以正位凝命。", xiangEn:"Fire above wood: the Cauldron. The superior person rectifies his position and consolidates his destiny.",
  lines:[
    {yao:"初六", text:"鼎颠趾，利出否，得妾以其子，无咎。", bai:"鼎足翻倒，正好倒出污秽陈物；如同纳妾而得子，没有灾祸。", en:"The cauldron is overturned on its feet; favorable for emptying out the stale. Taking a concubine for the sake of a son: no blame."},
    {yao:"九二", text:"鼎有实，我仇有疾，不我能即，吉。", bai:"鼎中有食物，我的对头有病患，不能靠近我，吉祥。", en:"The cauldron is full; my rival is afflicted and cannot reach me. Good fortune."},
    {yao:"九三", text:"鼎耳革，其行塞，雉膏不食，方雨亏悔，终吉。", bai:"鼎耳变形，移动受阻，肥美的雉肉一时不得食用；待到降雨，悔恨渐消，终获吉祥。", en:"The cauldron's ears are altered, its progress blocked; the rich pheasant is not eaten. When rain comes, regret dwindles; in the end, good fortune."},
    {yao:"九四", text:"鼎折足，覆公餗，其形渥，凶。", bai:"鼎足折断，倾覆了王公的美食，鼎身沾满污渍，凶险。", en:"The cauldron's leg breaks, the prince's meal is spilled and its contents soiled. Misfortune."},
    {yao:"六五", text:"鼎黄耳金铉，利贞。", bai:"鼎配黄色的耳、坚固的金铉，利于守持正固。", en:"The cauldron has yellow ears and a metal carrying-ring. Favorable to be steadfast."},
    {yao:"上九", text:"鼎玉铉，大吉，无不利。", bai:"鼎配以温润的玉铉，大为吉祥，无所不利。", en:"The cauldron has a jade carrying-ring. Great good fortune; nothing that is not favorable."}
  ]
},
51: {
  name:"震为雷", en:"Zhèn · The Arousing (Thunder)", sym:"䷲",
  tri:"震上震下", triEn:"Thunder over Thunder",
  gua:"震，亨。震来虩虩，笑言哑哑。震惊百里，不丧匕鬯。", guaBai:"震卦，亨通。雷震来时人人惊恐戒惧，过后谈笑自若。惊雷震动百里，主祭者却不失手中的匕勺与香酒。", guaEn:"The Arousing brings success. When the thunder comes, one is fearful and alert; then laughter and words ring out. The shock terrifies for a hundred li, yet he does not drop the sacrificial ladle and wine.",
  xiang:"洊雷，震；君子以恐惧修省。", xiangEn:"Thunder upon thunder: the Arousing. The superior person, in fear and trembling, examines and amends himself.",
  lines:[
    {yao:"初九", text:"震来虩虩，后笑言哑哑，吉。", bai:"惊雷袭来时恐惧戒惧，过后谈笑自如，吉祥。", en:"When thunder comes, fearful and alert; afterward laughter and words. Good fortune."},
    {yao:"六二", text:"震来厉，亿丧贝，跻于九陵，勿逐，七日得。", bai:"惊雷带来危险，恐将丧失钱财，登上高高的山陵避险；不必追寻，七日后自会复得。", en:"Thunder brings danger; one may lose great treasure and climb the nine hills. Do not pursue it—in seven days it returns."},
    {yao:"六三", text:"震苏苏，震行无眚。", bai:"惊雷使人惶惶不安，若因震惧而谨慎前行，则无灾祸。", en:"Thunder brings unease and dismay; if the shock spurs one to act with care, there is no calamity."},
    {yao:"九四", text:"震遂泥。", bai:"惊雷之下陷于泥淖，行动迟滞。", en:"The thunder comes and sinks into the mire."},
    {yao:"六五", text:"震往来厉，亿无丧，有事。", bai:"惊雷往来皆有危险，但估量并无大损失，仍能主持祭祀之事。", en:"Thunder goes and comes with danger; yet nothing is truly lost, and the sacred task can be maintained."},
    {yao:"上六", text:"震索索，视矍矍，征凶。震不于其躬，于其邻，无咎。婚媾有言。", bai:"惊惧战栗，目光惶乱，此时前往则凶。惊雷未及自身而先及邻处，早作戒备则无咎；婚姻之事则会招来非议。", en:"Thunder brings trembling and darting, frightened glances; to advance brings misfortune. If the shock strikes the neighbor before oneself, and one takes warning, there is no blame; but in marriage there will be talk."}
  ]
},
52: {
  name:"艮为山", en:"Gèn · Keeping Still (Mountain)", sym:"䷳",
  tri:"艮上艮下", triEn:"Mountain over Mountain",
  gua:"艮其背，不获其身，行其庭，不见其人，无咎。", guaBai:"抑止于其背，便不为身欲所动；行走于庭院，却不见有人相扰，没有灾祸。", guaEn:"Keeping still at the back, one no longer feels the body; walking in the courtyard, one does not see the people. No blame.",
  xiang:"兼山，艮；君子以思不出其位。", xiangEn:"Mountains standing together: Keeping Still. The superior person does not let his thoughts go beyond his station.",
  lines:[
    {yao:"初六", text:"艮其趾，无咎，利永贞。", bai:"抑止于脚趾，在初动之时即止，没有灾祸，利于长久守正。", en:"Keeping the toes still: no blame; favorable to be steadfast for long."},
    {yao:"六二", text:"艮其腓，不拯其随，其心不快。", bai:"抑止于小腿，不能救助所随从者，其心中不快。", en:"Keeping the calves still; one cannot rescue the one he follows, and his heart is not glad."},
    {yao:"九三", text:"艮其限，列其夤，厉薰心。", bai:"强行抑止于腰际，撕裂了脊背的筋肉，危厉如烈火熏心。", en:"Keeping the loins still, so that the spine is torn apart; the danger sears the heart."},
    {yao:"六四", text:"艮其身，无咎。", bai:"抑止于全身，安处而止，没有灾祸。", en:"Keeping the trunk still: no blame."},
    {yao:"六五", text:"艮其辅，言有序，悔亡。", bai:"抑止于口颊，言语有条理而不妄发，悔恨消亡。", en:"Keeping the jaws still, so that words have order; regret vanishes."},
    {yao:"上九", text:"敦艮，吉。", bai:"敦厚笃实地守止到底，吉祥。", en:"Steadfast and generous in keeping still: good fortune."}
  ]
},
53: {
  name:"风山渐", en:"Jiàn · Gradual Progress (Development)", sym:"䷴",
  tri:"巽上艮下", triEn:"Wind over Mountain",
  gua:"渐，女归吉，利贞。", guaBai:"渐卦，女子出嫁循礼渐进则吉祥，利于守持正固。", guaEn:"Gradual Progress: the maiden's marriage brings good fortune. Favorable to be steadfast.",
  xiang:"山上有木，渐；君子以居贤德善俗。", xiangEn:"On the mountain a tree: Gradual Progress. The superior person abides in worthy virtue and improves the customs.",
  lines:[
    {yao:"初六", text:"鸿渐于干，小子厉，有言，无咎。", bai:"鸿雁渐进到水涯，年幼者有危险，遭人非议，但终无灾祸。", en:"The wild goose gradually approaches the shore; the young one is in danger and there is talk, but no blame."},
    {yao:"六二", text:"鸿渐于磐，饮食衎衎，吉。", bai:"鸿雁渐进到磐石，饮食安乐和悦，吉祥。", en:"The wild goose gradually reaches the great rock; it eats and drinks in joyous ease. Good fortune."},
    {yao:"九三", text:"鸿渐于陆，夫征不复，妇孕不育，凶，利御寇。", bai:"鸿雁渐进到高地，丈夫出征不返，妇人孕而不育，凶险；此时利于防御强寇。", en:"The wild goose gradually reaches the high ground; the husband marches out and does not return, the wife conceives but does not bring forth. Misfortune; favorable to ward off robbers."},
    {yao:"六四", text:"鸿渐于木，或得其桷，无咎。", bai:"鸿雁渐进到树上，或能寻得平稳的枝干栖息，没有灾祸。", en:"The wild goose gradually reaches the tree; perhaps it finds a flat branch. No blame."},
    {yao:"九五", text:"鸿渐于陵，妇三岁不孕，终莫之胜，吉。", bai:"鸿雁渐进到高陵，妇人三年不孕，但终究无物能阻其相合，吉祥。", en:"The wild goose gradually reaches the summit; for three years the wife does not conceive, yet in the end nothing can prevail against them. Good fortune."},
    {yao:"上九", text:"鸿渐于陆，其羽可用为仪，吉。", bai:"鸿雁渐进到高远之地，其羽毛可用作礼仪的装饰，吉祥。", en:"The wild goose gradually reaches the heights; its feathers can be used in the sacred dance. Good fortune."}
  ]
},
54: {
  name:"雷泽归妹", en:"Guī Mèi · The Marrying Maiden", sym:"䷵",
  tri:"震上兑下", triEn:"Thunder over Lake",
  gua:"归妹，征凶，无攸利。", guaBai:"归妹卦，贸然前行则凶，没有什么利益。", guaEn:"The Marrying Maiden: to advance brings misfortune; nothing is favorable.",
  xiang:"泽上有雷，归妹；君子以永终知敝。", xiangEn:"Thunder over the lake: the Marrying Maiden. The superior person keeps the end in view and understands where things break down.",
  lines:[
    {yao:"初九", text:"归妹以娣，跛能履，征吉。", bai:"以侧室陪嫁之礼出嫁，如跛者仍能行走，安守本分前往则吉。", en:"The maiden marries as a secondary wife; like a lame one who can still walk. To go forward brings good fortune."},
    {yao:"九二", text:"眇能视，利幽人之贞。", bai:"如独眼者尚能看视，利于幽静守节之人的贞正。", en:"One-eyed, yet able to see; favorable is the steadfastness of one who lives secluded."},
    {yao:"六三", text:"归妹以须，反归以娣。", bai:"待嫁而迟迟未得良配，只好退而以侧室之身出嫁。", en:"The maiden waits to marry; she returns and marries as a secondary wife."},
    {yao:"九四", text:"归妹愆期，迟归有时。", bai:"出嫁错过了佳期，迟些出嫁自有合适的时机。", en:"The marrying maiden lets the term slip by; a late marriage comes in its own time."},
    {yao:"六五", text:"帝乙归妹，其君之袂，不如其娣之袂良，月几望，吉。", bai:"帝乙嫁妹，正室的衣袖装饰反不如陪嫁侧室的华美；如月近圆满而不过盈，吉祥。", en:"King Yi gives his daughter in marriage; the sleeves of the princess are not as fine as those of the bridesmaid. The moon is nearly full. Good fortune."},
    {yao:"上六", text:"女承筐无实，士刲羊无血，无攸利。", bai:"女子捧着空筐无物可献，男子宰羊却不见血，祭祀不成，没有什么利益。", en:"The woman holds up a basket with nothing in it; the man stabs the sheep but no blood flows. Nothing is favorable."}
  ]
},
55: {
  name:"雷火丰", en:"Fēng · Abundance (Fullness)", sym:"䷶",
  tri:"震上离下", triEn:"Thunder over Fire",
  gua:"丰，亨，王假之，勿忧，宜日中。", guaBai:"丰卦，亨通。君王能致此丰盛，不必忧虑，宜像正午的太阳普照。", guaEn:"Abundance: success. The king attains it. Be not anxious; be like the sun at midday.",
  xiang:"雷电皆至，丰；君子以折狱致刑。", xiangEn:"Thunder and lightning both arrive: Abundance. The superior person decides lawsuits and carries out punishments.",
  lines:[
    {yao:"初九", text:"遇其配主，虽旬无咎，往有尚。", bai:"遇到与自己相配的主人，即便相处满旬也无灾祸，前往会受推崇。", en:"He meets his destined match; though they stay a full ten days, no blame. To go forward wins esteem."},
    {yao:"六二", text:"丰其蔀，日中见斗，往得疑疾，有孚发若，吉。", bai:"丰大之时反被遮蔽，正午竟见北斗，前往会遭猜疑之患；若以诚信感发人心，则吉祥。", en:"The screen is so ample that at midday the Dipper is seen. To go forward brings suspicion and distrust; but if sincerity shines forth, good fortune."},
    {yao:"九三", text:"丰其沛，日中见沬，折其右肱，无咎。", bai:"遮蔽更甚，正午竟见微小的星辰，如同折断了右臂难以有为，但无咎。", en:"The curtain is so full that at midday the small stars are seen; he breaks his right arm. No blame."},
    {yao:"九四", text:"丰其蔀，日中见斗，遇其夷主，吉。", bai:"仍被遮蔽，正午见北斗，此时遇到平等相待的主人，吉祥。", en:"The screen is so ample that at midday the Dipper is seen; he meets his equal lord. Good fortune."},
    {yao:"六五", text:"来章，有庆誉，吉。", bai:"招来光明贤才，带来喜庆与美誉，吉祥。", en:"Brilliant talents are drawn in; blessing and praise come. Good fortune."},
    {yao:"上六", text:"丰其屋，蔀其家，窥其户，阒其无人，三岁不觌，凶。", bai:"屋宇高大却遮蔽了自家，从门缝窥看，寂静无人，三年不见踪影，凶险。", en:"His house is ample, but it screens his household; peering through the door, all is still and empty. For three years he sees no one. Misfortune."}
  ]
},
56: {
  name:"火山旅", en:"Lǚ · The Wanderer", sym:"䷷",
  tri:"离上艮下", triEn:"Fire over Mountain",
  gua:"旅，小亨，旅贞吉。", guaBai:"旅卦，稍得亨通，行旅之人守持正固则吉祥。", guaEn:"The Wanderer: small success. For the traveler, steadfastness brings good fortune.",
  xiang:"山上有火，旅；君子以明慎用刑，而不留狱。", xiangEn:"Fire on the mountain: the Wanderer. The superior person is clear and cautious in imposing penalties and does not drag out lawsuits.",
  lines:[
    {yao:"初六", text:"旅琐琐，斯其所取灾。", bai:"行旅之初若猥琐计较、格局狭小，这正是招致灾祸的原因。", en:"The wanderer busies himself with trifles; thereby he draws disaster upon himself."},
    {yao:"六二", text:"旅即次，怀其资，得童仆贞。", bai:"行旅得以入住旅舍，怀藏着盘缠，又得到忠贞的童仆。", en:"The wanderer comes to an inn, has his property with him, and wins the loyalty of a young servant."},
    {yao:"九三", text:"旅焚其次，丧其童仆，贞厉。", bai:"行旅中烧毁了旅舍，失去了童仆，守正以防危厉。", en:"The wanderer's inn burns down; he loses his young servant. Steadfastness amid danger."},
    {yao:"九四", text:"旅于处，得其资斧，我心不快。", bai:"行旅暂得栖身之处，也得到了钱财与利斧，但寄人篱下，我心中仍不畅快。", en:"The wanderer finds a lodging and gets his goods and an axe, yet his heart is not glad."},
    {yao:"六五", text:"射雉，一矢亡，终以誉命。", bai:"射猎野鸡，虽亡失一箭，但终能凭才能获得美誉与爵命。", en:"He shoots a pheasant; one arrow is lost, but in the end he wins praise and a mandate."},
    {yao:"上九", text:"鸟焚其巢，旅人先笑后号咷，丧牛于易，凶。", bai:"飞鸟被焚毁巢窠，行旅之人先笑而后号啕大哭，在边邑丧失了牛，凶险。", en:"The bird's nest burns; the wanderer first laughs, then cries and wails. He loses his ox at the border. Misfortune."}
  ]
},
57: {
  name:"巽为风", en:"Xùn · The Gentle (Wind)", sym:"䷸",
  tri:"巽上巽下", triEn:"Wind over Wind",
  gua:"巽，小亨，利有攸往，利见大人。", guaBai:"巽卦，稍得亨通，利于有所前往，利于会见大人。", guaEn:"The Gentle: small success. Favorable to have somewhere to go; favorable to see the great one.",
  xiang:"随风，巽；君子以申命行事。", xiangEn:"Winds following one another: the Gentle. The superior person spreads his commands abroad and carries out his affairs.",
  lines:[
    {yao:"初六", text:"进退，利武人之贞。", bai:"进退犹疑不定，此时宜以武人的果决守正。", en:"Advancing and retreating irresolutely; favorable is the steadfastness of a warrior."},
    {yao:"九二", text:"巽在床下，用史巫纷若，吉，无咎。", bai:"谦卑顺伏于床下，借助祝史巫觋众多以通诚意，吉祥，没有灾祸。", en:"Kneeling humbly beneath the bed, employing priests and shamans in great number: good fortune, no blame."},
    {yao:"九三", text:"频巽，吝。", bai:"勉强再三地顺从，有所憾惜。", en:"Repeated, forced submission: humiliation."},
    {yao:"六四", text:"悔亡，田获三品。", bai:"悔恨消亡，田猎获得三类猎物，成果丰厚。", en:"Regret vanishes; in the hunt one catches game of three kinds."},
    {yao:"九五", text:"贞吉，悔亡，无不利，无初有终，先庚三日，后庚三日，吉。", bai:"守正吉祥，悔恨消亡，无所不利；虽无善始却有善终；变革之前后各审慎三日，吉祥。", en:"Steadfastness brings good fortune; regret vanishes; nothing is unfavorable. No good beginning, but a good end. Three days before the change, three days after: good fortune."},
    {yao:"上九", text:"巽在床下，丧其资斧，贞凶。", bai:"过度卑顺伏于床下，丧失了钱财与决断的利斧，守此则凶。", en:"Kneeling beneath the bed, he loses his goods and his axe. To persist is misfortune."}
  ]
},
58: {
  name:"兑为泽", en:"Duì · The Joyous (Lake)", sym:"䷹",
  tri:"兑上兑下", triEn:"Lake over Lake",
  gua:"兑，亨，利贞。", guaBai:"兑卦，亨通，利于守持正固。", guaEn:"The Joyous: success. Favorable to be steadfast.",
  xiang:"丽泽，兑；君子以朋友讲习。", xiangEn:"Lakes resting on one another: the Joyous. The superior person joins with friends for discussion and practice.",
  lines:[
    {yao:"初九", text:"和兑，吉。", bai:"以平和之心待人而致悦，吉祥。", en:"Contented, harmonious joy: good fortune."},
    {yao:"九二", text:"孚兑，吉，悔亡。", bai:"以诚信相悦，吉祥，悔恨消亡。", en:"Sincere joy: good fortune; regret vanishes."},
    {yao:"六三", text:"来兑，凶。", bai:"曲意逢迎以求取悦于人，凶险。", en:"Coming to seek joy by flattery: misfortune."},
    {yao:"九四", text:"商兑未宁，介疾有喜。", bai:"反复权衡该向谁取悦而心神不宁；能守正断绝邪佞之患，则有喜庆。", en:"Weighing where to find joy, not yet at peace; if he cuts off the sickness, there is joy."},
    {yao:"九五", text:"孚于剥，有厉。", bai:"轻信于阴柔剥蚀之人，会有危险。", en:"Trusting in what would undermine him: there is danger."},
    {yao:"上六", text:"引兑。", bai:"引诱他人一味求悦，沉溺无度。", en:"Seductive, enticing joy."}
  ]
},
59: {
  name:"风水涣", en:"Huàn · Dispersion (Dissolution)", sym:"䷺",
  tri:"巽上坎下", triEn:"Wind over Water",
  gua:"涣，亨，王假有庙，利涉大川，利贞。", guaBai:"涣卦，亨通。君王来到宗庙聚合人心，利于渡越大河巨流，利于守持正固。", guaEn:"Dispersion: success. The king approaches his temple. Favorable to cross the great river; favorable to be steadfast.",
  xiang:"风行水上，涣；先王以享于帝立庙。", xiangEn:"Wind moving over water: Dispersion. The ancient kings offered to God and built temples.",
  lines:[
    {yao:"初六", text:"用拯马壮，吉。", bai:"趁涣散之初，借助强壮的马匹前往拯救，吉祥。", en:"He brings help with the strength of a horse. Good fortune."},
    {yao:"九二", text:"涣奔其机，悔亡。", bai:"当涣散之时急奔依靠可凭之几案，悔恨消亡。", en:"Amid dispersion he hurries to his support. Regret vanishes."},
    {yao:"六三", text:"涣其躬，无悔。", bai:"涣散消除自身的私欲，没有悔恨。", en:"He disperses his own self; no regret."},
    {yao:"六四", text:"涣其群，元吉，涣有丘，匪夷所思。", bai:"涣散小群体的私党以成大公，大为吉祥；聚散重成如丘山，非常人所能想见。", en:"He disperses the faction—supreme good fortune. Dispersion leads to accumulation like a hill, something ordinary people could not conceive."},
    {yao:"九五", text:"涣汗其大号，涣王居，无咎。", bai:"如汗出般发布重大号令使民心涣然响应，散发王者的积蓄以聚民，没有灾祸。", en:"He issues his great commands like sweat; he disperses the king's stores. No blame."},
    {yao:"上九", text:"涣其血，去逖出，无咎。", bai:"涣散消除伤害与忧惧，远远离去避患，没有灾祸。", en:"He disperses the blood, keeping harm and fear far away. No blame."}
  ]
},
60: {
  name:"水泽节", en:"Jié · Limitation (Restraint)", sym:"䷻",
  tri:"坎上兑下", triEn:"Water over Lake",
  gua:"节，亨，苦节不可贞。", guaBai:"节卦，亨通；但苦涩过度的节制不可长久固守。", guaEn:"Limitation: success. But bitter, excessive limitation cannot be kept up steadfastly.",
  xiang:"泽上有水，节；君子以制数度，议德行。", xiangEn:"Water over the lake: Limitation. The superior person creates measures and standards and examines virtuous conduct.",
  lines:[
    {yao:"初九", text:"不出户庭，无咎。", bai:"节制自守，不迈出内室庭院，没有灾祸。", en:"He does not go out of the inner courtyard. No blame."},
    {yao:"九二", text:"不出门庭，凶。", bai:"当行而不行，闭守不出外门之庭，错失时机，凶险。", en:"He does not go out of the gate and courtyard. Misfortune."},
    {yao:"六三", text:"不节若，则嗟若，无咎。", bai:"不知节制，日后必自嗟叹悔恨；能反省则无咎。", en:"He who knows no limits will have cause to lament. No blame."},
    {yao:"六四", text:"安节，亨。", bai:"安然自得地守节，亨通。", en:"Contented limitation: success."},
    {yao:"九五", text:"甘节，吉，往有尚。", bai:"甘美适中地行节，吉祥，前往会受推崇。", en:"Sweet, moderate limitation: good fortune. To go forward wins esteem."},
    {yao:"上六", text:"苦节，贞凶，悔亡。", bai:"苦涩过度地行节，固守则凶，然若能悔改则悔恨可消。", en:"Bitter limitation: to persist brings misfortune; but if one repents, regret vanishes."}
  ]
},
61: {
  name:"风泽中孚", en:"Zhōng Fú · Inner Truth", sym:"䷼",
  tri:"巽上兑下", triEn:"Wind over Lake",
  gua:"中孚，豚鱼吉，利涉大川，利贞。", guaBai:"中孚卦，诚信及于豚鱼之微则吉祥，利于渡越大河巨流，利于守持正固。", guaEn:"Inner Truth: sincerity reaching even to pigs and fishes brings good fortune. Favorable to cross the great river; favorable to be steadfast.",
  xiang:"泽上有风，中孚；君子以议狱缓死。", xiangEn:"Wind over the lake: Inner Truth. The superior person deliberates over lawsuits and delays executions.",
  lines:[
    {yao:"初九", text:"虞吉，有它不燕。", bai:"审慎度量而后守信则吉，若心怀他念则不得安宁。", en:"Prepared and careful, good fortune; if one harbors other aims, there is no peace."},
    {yao:"九二", text:"鸣鹤在阴，其子和之，我有好爵，吾与尔靡之。", bai:"鹤在树荫下鸣叫，小鹤应声相和；我有美酒佳爵，愿与你共同享用——喻至诚相感。", en:"A crane calls in the shade; its young answer. I have a good goblet—I will share it with you: so sincerity resonates."},
    {yao:"六三", text:"得敌，或鼓或罢，或泣或歌。", bai:"遇上对手，忽而击鼓进攻，忽而疲惫罢休，忽而悲泣，忽而欢歌，情绪无主。", en:"He meets a rival: now he drums, now he stops; now he weeps, now he sings."},
    {yao:"六四", text:"月几望，马匹亡，无咎。", bai:"月近满盈，弃绝同类马匹而专一上从，没有灾祸。", en:"The moon is nearly full; the horse's mate is gone. No blame."},
    {yao:"九五", text:"有孚挛如，无咎。", bai:"心怀诚信，紧密维系上下人心，没有灾祸。", en:"He possesses truth that binds all together. No blame."},
    {yao:"上九", text:"翰音登于天，贞凶。", bai:"如鸡鸣之声徒然高飞上天，名过其实，固守则凶。", en:"The crowing cock's sound rises to heaven; to persist brings misfortune."}
  ]
},
62: {
  name:"雷山小过", en:"Xiǎo Guò · Small Exceeding", sym:"䷽",
  tri:"震上艮下", triEn:"Thunder over Mountain",
  gua:"小过，亨，利贞，可小事，不可大事，飞鸟遗之音，不宜上宜下，大吉。", guaBai:"小过卦，亨通，利于守正；可行小事，不可行大事。如飞鸟留下鸣音，不宜向上强飞而宜向下栖止，大为吉祥。", guaEn:"Small Exceeding: success; favorable to be steadfast. Small things may be done, not great ones. The flying bird leaves its call: it should not strive upward but descend. Great good fortune.",
  xiang:"山上有雷，小过；君子以行过乎恭，丧过乎哀，用过乎俭。", xiangEn:"Thunder on the mountain: Small Exceeding. The superior person is exceedingly respectful in conduct, exceedingly mournful in bereavement, exceedingly frugal in spending.",
  lines:[
    {yao:"初六", text:"飞鸟以凶。", bai:"如飞鸟不知止而妄自高飞，因而招致凶险。", en:"The flying bird brings misfortune upon itself."},
    {yao:"六二", text:"过其祖，遇其妣，不及其君，遇其臣，无咎。", bai:"越过了祖父而遇见祖母，不冒犯君上而恰守臣位，没有灾祸。", en:"He passes his grandfather and meets his grandmother; he does not reach the ruler but meets him as a servant. No blame."},
    {yao:"九三", text:"弗过防之，从或戕之，凶。", bai:"不加以过度戒备，放任跟随则或遭伤害，凶险。", en:"If he does not take extra precautions, someone may follow and strike him down. Misfortune."},
    {yao:"九四", text:"无咎，弗过遇之，往厉必戒，勿用永贞。", bai:"没有灾祸；不过分强求而恰能相遇，前往有危险必须戒惕，不可固执长守。", en:"No blame. Without overstepping he meets it; to go on is dangerous and one must be on guard. Do not persist forever."},
    {yao:"六五", text:"密云不雨，自我西郊，公弋取彼在穴。", bai:"浓云密布却不下雨，云气来自我西郊；王公射取那藏于洞穴中的猎物。", en:"Dense clouds, no rain, from our western outskirts. The prince shoots and takes the one hiding in the cave."},
    {yao:"上六", text:"弗遇过之，飞鸟离之，凶，是谓灾眚。", bai:"不能恰当相遇而过分逾越，如飞鸟远离罗网又自罹其祸，凶险，这就叫天灾人祸。", en:"Not meeting but passing beyond; the flying bird is caught. Misfortune—this is called calamity and disaster."}
  ]
},
63: {
  name:"水火既济", en:"Jì Jì · After Completion", sym:"䷾",
  tri:"坎上离下", triEn:"Water over Fire",
  gua:"既济，亨小，利贞，初吉终乱。", guaBai:"既济卦，亨通于细小之事，利于守持正固；起初吉祥，终了却生变乱。", guaEn:"After Completion: success in small matters. Favorable to be steadfast. At the beginning good fortune, at the end disorder.",
  xiang:"水在火上，既济；君子以思患而豫防之。", xiangEn:"Water over fire: After Completion. The superior person takes thought of misfortune and guards against it in advance.",
  lines:[
    {yao:"初九", text:"曳其轮，濡其尾，无咎。", bai:"拖住车轮不使急进，如渡水沾湿了尾巴而知谨慎，没有灾祸。", en:"He brakes his wheels; the fox wets its tail. No blame."},
    {yao:"六二", text:"妇丧其茀，勿逐，七日得。", bai:"妇人丢失了车饰蔽帘，不必追寻，七日之后自会复得。", en:"The wife loses the screen of her carriage. Do not pursue it—in seven days it returns."},
    {yao:"九三", text:"高宗伐鬼方，三年克之，小人勿用。", bai:"殷高宗征伐鬼方，历时三年才攻克，如此艰难，不可任用小人。", en:"The High Ancestor attacks the Devil's Country; in three years he conquers it. Small people must not be employed."},
    {yao:"六四", text:"繻有衣袽，终日戒。", bai:"华美的衣服终将破敝成为塞漏的碎布，故当终日戒备患难。", en:"Fine clothes turn to rags; be on guard the whole day long."},
    {yao:"九五", text:"东邻杀牛，不如西邻之禴祭，实受其福。", bai:"东邻杀牛盛祭，不如西邻薄祭而心诚，反能实实在在承受福祐。", en:"The eastern neighbor slaughters an ox, but does not equal the small offering of the western neighbor, who truly receives the blessing."},
    {yao:"上六", text:"濡其首，厉。", bai:"渡水沾湿了头，处既济之极而陷于险，危厉。", en:"He gets his head wet. Danger."}
  ]
},
64: {
  name:"火水未济", en:"Wèi Jì · Before Completion", sym:"䷿",
  tri:"离上坎下", triEn:"Fire over Water",
  gua:"未济，亨，小狐汔济，濡其尾，无攸利。", guaBai:"未济卦，亨通；小狐狸几乎渡过河，却沾湿了尾巴，没有什么利益。", guaEn:"Before Completion: success. The little fox has nearly crossed the stream, but wets its tail. Nothing is favorable.",
  xiang:"火在水上，未济；君子以慎辨物居方。", xiangEn:"Fire over water: Before Completion. The superior person carefully distinguishes things so that each finds its place.",
  lines:[
    {yao:"初六", text:"濡其尾，吝。", bai:"如小狐渡水沾湿了尾巴，力有未逮而冒进，有所憾惜。", en:"He wets his tail. Humiliation."},
    {yao:"九二", text:"曳其轮，贞吉。", bai:"拖住车轮以缓其行，不急躁冒进，守正则吉。", en:"He brakes his wheels. Steadfastness brings good fortune."},
    {yao:"六三", text:"未济，征凶，利涉大川。", bai:"事犹未成，此时贸然前往则凶，然终须蓄力以利于渡越大河。", en:"Before completion: to advance brings misfortune. Yet it is favorable to cross the great river."},
    {yao:"九四", text:"贞吉，悔亡，震用伐鬼方，三年有赏于大国。", bai:"守正则吉，悔恨消亡；奋起震动如征伐鬼方，三年成功而受大国封赏。", en:"Steadfastness brings good fortune; regret vanishes. With vigor he attacks the Devil's Country; in three years he is rewarded by a great state."},
    {yao:"六五", text:"贞吉，无悔，君子之光，有孚，吉。", bai:"守正则吉，没有悔恨；君子的德辉焕发，怀有诚信，吉祥。", en:"Steadfastness brings good fortune, no regret. The light of the superior one is true. Good fortune."},
    {yao:"上九", text:"有孚于饮酒，无咎，濡其首，有孚失是。", bai:"怀着诚信而从容饮酒自乐，没有灾祸；但若纵饮至沾湿了头，则虽有诚信也失了分寸。", en:"With sincerity he drinks wine; no blame. But if he wets his head, then even in sincerity he loses what is right."}
  ]
}
};
if (typeof module !== 'undefined' && module.exports) module.exports = YI;
