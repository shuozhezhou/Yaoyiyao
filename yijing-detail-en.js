/* I Ching 64 hexagrams · English detailed reading (爻一爻)
 * Fields mirror yijing-detail.js: detail | career | love | wealth | health | advice
 * Plain-language interpretation, for reference only.
 */
const YI_DETAIL_EN = {
1: {
  detail:"Qian, six unbroken lines, is pure creative strength. Heaven moves without cease, a symbol of great initiative and drive; you are in a phase where you can act and open new ground. Yet the lines run from 'hidden dragon, do not act' to 'arrogant dragon has regret'—even great power must respect timing and measure: bide your time early, act boldly in the middle, and know when to hold back at the peak. The core lesson is ceaseless self-strengthening, without arrogance or overreach.",
  career:"A rising phase, good for taking initiative and shouldering big responsibility; advance step by step and avoid being so conspicuous that you invite resentment.",
  love:"You tend to lead; win the other over with sincerity and reliability, and avoid being overbearing or domineering.",
  wealth:"Favorable; gains come through real ability and initiative, not blind expansion or all-or-nothing bets.",
  health:"Energetic but prone to overexertion; balance work and rest and guard against heart and vascular strain from overwork.",
  advice:"Advance when you should, but read the timing and move steadily; at the top especially, stay humble and self-reflective."
},
2: {
  detail:"Kun, six broken lines, is pure receptivity, yielding, and the capacity to carry. The earth is solid and silent, nourishing all things without claiming credit—the wisdom of overcoming the hard with the soft. Now it is better to hold than attack, to cooperate than seize the lead; you succeed through steady accumulation and generous tolerance. The judgment says one first goes astray, then finds the way, gaining by following rather than leading. The core attitude is to carry things with great virtue and go along with the times.",
  career:"Suited to supporting, executing, and accumulating; cooperate steadily with the team and do not force yourself to the front.",
  love:"Best with gentleness, tolerance, and long-term cultivation; give more and be considerate, and the bond grows stable.",
  wealth:"Seek wealth steadily and conservatively, through accumulation rather than speculation; following the main trend works better.",
  health:"Tend to the spleen and stomach and overall upkeep; avoid overexertion—quiet rest and a regular routine help.",
  advice:"Hold and yield, go with the flow, do the work of carrying and accumulating, and do not rush for quick results."
},
3: {
  detail:"Zhun has water (danger) above and thunder (movement) below: the hardship of first sprouting and founding—the tangled, not-yet-unfolded state of things just being born, like a new venture beset by obstacles. You are in a founding phase: the road is hard, but vitality lies within it. Do not rush; get a firm footing first and gather reliable help. The core attitude is to meet difficulty without retreat, plan carefully, and patiently break through the initial chaos.",
  career:"The startup or new-project stage has many difficulties; build a solid base and enlist capable helpers, and do not rush to expand.",
  love:"Early friction and setbacks are likely; it needs patience and sincere effort, not haste.",
  wealth:"In an early accumulation phase with unstable returns; guard your capital and live within your means.",
  health:"Mind daily upkeep; keep small early ailments from dragging into big ones, and see a doctor promptly.",
  advice:"Steady, not hasty: secure the base and find helpers; stay calm under obstruction and seek breakthrough through persistence."
},
4: {
  detail:"Meng has mountain (stillness) above and water (danger) below: ignorance and enlightenment. Danger at the mountain's foot is like an unclear road and an unopened mind, so learning and instruction are needed. You may be confused for lack of experience or clear information; the key is a correct attitude and humble inquiry. The judgment says it is not I who seek the ignorant, but the ignorant who seek me—learning depends on sincerity and initiative; repeated, insincere asking gets no answer. The core attitude is to learn humbly and build understanding step by step.",
  career:"In a learning-and-growth stage; consult seniors and hone your craft—pretending to know only causes mistakes.",
  love:"You do not yet understand each other well; communicate honestly and cultivate the bond to avoid misunderstanding.",
  wealth:"Do not rush into unfamiliar fields; understand first, then act, and beware being misled into losses.",
  health:"The cause or condition is not yet clear; get checked promptly and follow professional advice rather than self-diagnosing.",
  advice:"Learn rather than act rashly; ask humbly and understand before acting; be sincere and do not test repeatedly."
},
5: {
  detail:"Xu has water (danger ahead) above and heaven (strength) below: waiting and need. Strong force meets an obstacle ahead; the wise move is not to charge but to wait for the time to ripen. Conditions are not yet ready; forcing results backfires, so wait calmly and store up energy. The judgment speaks of sincerity and bright success—waiting is not passive delay but meeting the turn with confidence and preparation. The core attitude is to steady yourself and wait at ease, then act decisively when the moment comes.",
  career:"The time is not right to push hard; prepare well and await a good opening, and do not act out of anxiety.",
  love:"It needs patience to let things ripen; pushing or rushing backfires.",
  wealth:"Wait for the right moment; do not chase highs—patient holding often pays better.",
  health:"Tend to diet and mood; avoid impatience, and build strength through rest and a regular routine.",
  advice:"Wait rather than charge; keep calm, stay stocked, act when conditions ripen, and never force your way into danger."
},
6: {
  detail:"Song has heaven (rising) above and water (sinking) below, moving apart: conflict and dispute. Because heaven and water each go their own way, quarrels arise easily. You may face a dispute; the judgment clearly warns that even with right and sincerity on your side, stay alert and stop in time—pressing a fight to the end brings no good, and quitting while ahead is auspicious. The core attitude is to avoid head-on conflict, prevent trouble at its source, and seek fair mediation rather than endless opposition.",
  career:"Friction or disputes come easily; value harmony, argue on reason without losing your temper, and seek a superior or third party to mediate if needed.",
  love:"Quarrels tend to run high; avoid one-upmanship and dredging up the past—a step back and more tolerance ease things.",
  wealth:"Be extra careful with contracts and partnerships; put everything in writing to avoid costly litigation over interests.",
  health:"Watch for suppressed emotions and inner 'fire'; long tension and confrontation harm the body—learn to unwind.",
  advice:"Reconcile rather than fight on; be right yet even-tempered, quit while ahead, and head off conflict at the source."
},
7: {
  detail:"Shi has earth above and water below, water gathered within earth: leading the multitude. Shi is the way of commanding troops and teams—rightful cause, strict discipline, and command by the virtuous. You face a situation needing you to organize and coordinate many people; success hinges on a recognized leader, clear rules, and a legitimate aim. The judgment says the army sets out by right order, led by a steady, seasoned person—then good fortune. The core attitude: act with just cause and clear rewards and penalties, uniting people through justice and order, not private strife.",
  career:"Suited to leading a team or coordinating; establish authority, reward and penalize clearly, and let a legitimate aim win people over.",
  love:"Take the initiative and be reliable; win trust through responsibility and principle, not willfulness.",
  wealth:"Seek wealth methodically and with a plan, marshaling resources; teamwork beats going it alone.",
  health:"Watch for strain from pressure and heavy responsibility; keep a regular routine and pacing, avoiding prolonged exhaustion.",
  advice:"Act with organization and principle; have a just cause, put discipline first, and let a steady, reliable person lead."
},
8: {
  detail:"Bi has water above and earth below, water resting on earth in close union: attachment and solidarity. Bi is the way of drawing near and following the good; now it is best to build good ties widely and seek like-minded support—cooperation beats isolation. The judgment says attach in time and to the right ones; coming too late or trusting the wrong person is unfavorable. The core attitude is to join in actively and treat people sincerely, while choosing carefully whom to attach to, so that mutual trust brings lasting benefit.",
  career:"Join the team and rely on trustworthy partners; draw near to the capable and virtuous, and do not fight alone.",
  love:"Relate with sincere closeness; define the relationship early and follow the good—mutual loyalty makes it firm.",
  wealth:"Wealth comes through cooperation and connections; pick the right partners and grow together, never trusting the wrong ones.",
  health:"Stay socially connected; avoid lonely brooding—company aids recovery.",
  advice:"Attach and cooperate, and act early; pick the right people and treat them sincerely, rather than hanging back and missing the moment."
},
9: {
  detail:"Xiao Xu has wind above and heaven below, wind gathering over heaven while force is still small: minor accumulation and temporary restraint. It is a stage where the soft restrains the strong and power is not yet enough for great things—like dense clouds without rain. You can only do small things and accumulate in small steps; big designs cannot yet be carried out, so proceed gradually and cultivate yourself. Dense clouds, no rain, means be patient until accumulation is complete. The core attitude is to avoid quick gains, start small, build strength, and await a fuller release.",
  career:"Now is for small gains and inner work; no big breakthrough yet, so advance steadily and do not grab for size.",
  love:"In a slow-cultivation, small-progress stage; let it flow gently and manage it softly.",
  wealth:"Small gains but no big profit; accumulate little by little and invest steadily, not in large sums.",
  health:"Focus on small daily upkeep; mind the respiratory system and emotional release, nipping problems early.",
  advice:"Accumulate in small steps and cultivate yourself; do not force big matters—build strength patiently and act when the time comes."
},
10: {
  detail:"Lü has heaven above and lake below, like walking firmly within propriety: careful conduct along the rules. Lü means to tread, to practice; the judgment likens it to stepping on a tiger's tail yet not being bitten—risky circumstances, but careful conduct and proper measure turn danger to safety. You walk a path needing caution; the key is fitting speech and conduct and a gentle, humble stance toward the strong. The core attitude is to be grounded and self-possessed through propriety, careful yet composed—treading as on thin ice brings safe passage.",
  career:"Situations need careful words and deeds; keep the rules, know when to advance or yield, and treat superiors and the powerful with humility to avoid risk.",
  love:"Treat each other with propriety and good manners; respect the other and keep proper measure, not crossing lines or being reckless.",
  wealth:"Seek wealth prudently and by the rules; act carefully in the face of risk, and staying within the lines keeps you safe.",
  health:"Mind safety and accident prevention; caution first—steadiness keeps you well.",
  advice:"Be careful and proper, as if treading on thin ice; humble and grounded, advance steadily with risk under control."
},
11: {
  detail:"Tai has earth above and heaven below: heaven's breath rises and earth's descends, yin and yang mingle and connect—prosperity and harmony. Tai is the fine state where heaven and earth join and all things flow, above and below sharing one will; you are in a smooth, harmonious phase, a rare chance to develop. Yet it hides the principle that fullness turns—so in good times, all the more stay alert to danger and keep to what is right. The core attitude is to act positively and gather people while timing is good, yet stay humble and diligent, heading off trouble so the good state lasts.",
  career:"Work flows and everyone is aligned—a good time to advance and expand; ride the momentum but do not grow arrogant.",
  love:"Warm and harmonious, the right time to deepen the bond and plan for the long term—still tend it with care.",
  wealth:"Prosperous and free-flowing; you can operate actively, but stay alert to danger and leave a margin.",
  health:"Generally at ease; use the momentum to consolidate your upkeep, and guard against over-relaxation and reversals.",
  advice:"Ride the good times to act and gather people, yet stay upright and unarrogant, alert to danger, to keep it lasting."
},
12: {
  detail:"Pi has heaven above and earth below: heaven's breath rises, earth's sinks, the two part and do not meet—a blocked, stuck state. Pi is the opposite of Tai: above and below are cut off and aims cannot get through; the environment is unfavorable and things are obstructed, so forcing action brings loss. The judgment says it does not favor the noble one's holding firm outwardly—better to draw in and keep to yourself. The core attitude is to keep your integrity, hide your light and bide your time, not mixing with the muddy stream, and wait for the block to pass—never pushing to the front or drifting with the current in adversity.",
  career:"Stuck and constrained; keep low and draw in, cultivate and wait—do not force things or risk a job change.",
  love:"Estrangement and poor communication come easily; wait patiently and avoid inflaming conflict, letting the bond warm again.",
  wealth:"Unfavorable and obstructed; be conservative and control risk, and never expand against the trend.",
  health:"Watch for stagnation of qi and low mood; unblock and rest quietly, keeping small ailments from dragging on.",
  advice:"Hold rather than advance; hide your light, keep your heart, avoid the muddy stream, and wait for the turn."
},
13: {
  detail:"Tong Ren has heaven above and fire below, fire rising to join heaven: fellowship and open cooperation. It is the way of joining hearts and gathering strength openly and fairly; now it suits broad unity and frank collaboration for a great aim. The judgment says fellowship in the open field brings success—cooperation should come from public spirit and a large outlook, not cliques and private factions. The core attitude is to treat people sincerely, seek common ground while allowing difference, and unite hearts around a shared, legitimate goal—only the broad-minded achieve great things.",
  career:"Suited to cooperation and joint effort; act from public spirit with a clear aim, and avoid forming factions.",
  love:"Best when frank and like-minded; an open, aboveboard relationship lasts.",
  wealth:"Seek wealth by partnering and sharing; a larger, open, and legitimate outlook helps—no scheming behind backs.",
  health:"Interact with others and stay open; avoid the toll of solitude and gloom.",
  advice:"Unite and cooperate openly; seek common ground with public spirit, and think big to succeed."
},
14: {
  detail:"Da You has fire above and heaven below, fire in heaven shining over all: great possession and abundance. It is the image of rich gains and a flourishing enterprise; you are in or approaching a phase of harvest and plenty, with ample momentum and resources. But the more abundant, the more to guard against pride and excess—both judgment and image stress curbing evil, following the times, and holding gains with humility. The core attitude is to stay clear-headed and virtuous amid plenty, use resources well and give generously, and not grow arrogant in wealth, so the abundance holds.",
  career:"Thriving with rich results; use resources well and gather talent, but stay humble and disciplined against pride.",
  love:"Full and happy; cherish and tend it and treat each other with virtue—never slight the other out of complacency.",
  wealth:"Prosperous with rich gains; allocate reasonably and earn by right means—generosity makes it last.",
  health:"Generally good, but moderate food and pleasure, guarding against harm from excess.",
  advice:"Act while abundant, but be humble and disciplined, upright and giving—wealth without arrogance keeps you full."
},
15: {
  detail:"Qian has earth above and mountain below, the high mountain willingly resting beneath the earth: the virtue of modesty and restraint. Qian is a rare hexagram with all six lines auspicious—carrying yourself low and humble is your most favorable choice now. The judgment says the modest noble one wins through in the end; the truly capable, the more they yield, the more they win respect, dissolve resistance, and achieve for the long term. The core attitude is talent without self-display and merit without conceit—embracing others with humility and building repute quietly; where modesty reaches, all goes well.",
  career:"Be low-key and pragmatic, not grabbing for credit; humility wins support and steady advancement.",
  love:"Be tolerant and yielding, not putting on airs; modest thoughtfulness moves people and keeps the bond long.",
  wealth:"Seek wealth steadily and quietly, not flaunting it; modest thrift accumulates and avoids loss.",
  health:"A calm, humble mind benefits body and spirit; avoid the tension of competitiveness—rest is best.",
  advice:"Be modest, not proud; the abler you are, the more you keep low, treating people and matters with humility—all goes smoothly."
},
16: {
  detail:"Yu has thunder above and earth below, spring thunder bursting from the earth as all things respond gladly: ease, harmony, and moving with the momentum. Yu means joy, readiness, and yielding action; now it suits going with the times and inspiring people, achieving amid a glad atmosphere. The judgment favors installing helpers and marching armies—acting with the momentum and planning ahead doubles the effect. But it warns that indulgence breeds sloth. The core attitude is to move with the times and prepare early, enjoying ease without excess, pressing forward in high spirits yet alert.",
  career:"Act with the momentum and plan ahead; rallying the team's morale gets things done—but do not slacken through comfort.",
  love:"In a pleasant, harmonious stage; share the joy and build rapport, but do not indulge and neglect the work.",
  wealth:"Smooth with easy gains; position with the momentum and prepare for change, never squandering in complacency.",
  health:"A cheerful mood aids health, but guard against hidden harm from indulgence and irregular hours.",
  advice:"Move with the momentum and prepare ahead; seize the harmonious moment to press forward, enjoying ease yet staying alert."
},
17: {
  detail:"Sui has lake above and thunder below, thunder stirring within the lake: all things move with the times. Its core is to accord and follow—read the situation, do not cling stubbornly when it is time to follow, but follow with principle, choosing the good, not drifting blindly. Now it is best to lower your posture and go with the flow, respecting patterns and others' reasonable views—often you gain help and things go smoothly. But stay upright: follow the right people and the right path, or you will be led astray and lose yourself. Overall a time to yield and cooperate, advancing by stepping back.",
  career:"Go along with the team and the larger trend, supporting superiors or the mainstream direction; do not force your own way—choosing the right moment and right people can bring a lift.",
  love:"Relate with gentleness and tolerance, accommodating reasonable needs; the bond can warm steadily—but keep your bottom line and do not over-yield.",
  wealth:"Seek wealth steadily by following mature trends, not blazing risky new trails; positioning with the flow and quitting while ahead works better.",
  health:"Keep hours in tune with nature; mind the liver and gallbladder and the sinews, and avoid overexertion.",
  advice:"Follow rather than resist; go with the flow and adjust flexibly; do not act stubbornly alone, nor follow blindly—follow the good."
},
18: {
  detail:"Gu has mountain above and wind below, wind swirling and stagnating beneath the mountain: long-standing decay that has reached the point of needing reform. Gu means rot, but also the turning point of reviving from decline—precisely because problems have surfaced, it is time to root out old ills and start anew. Do not dodge; face the leftover mess, get to the root, and resolve to set it in order, turning chaos to order. The work needs careful planning—consider the cause before and consequence after—without haste. Overall a situation hard first, then easier, where effort decides the outcome.",
  career:"Face leftover problems and accumulated ills; take the initiative to reform and clear old accounts—laborious but able to turn things around; do not gloss over or delay.",
  love:"Old conflicts must be brought into the open and resolved; communicate honestly and mend the rift—avoidance only worsens it.",
  wealth:"Fixing financial leaks and reorganizing old investments is urgent; do not expand blindly—good management can turn loss to gain.",
  health:"Take old or accumulated ailments seriously; check and treat promptly, not hiding illness; mind the stomach and intestines and dampness.",
  advice:"Root out accumulated ills and reform boldly, planning before acting; do not appease, delay, or paper things over."
},
19: {
  detail:"Lin has earth above and lake below, earth over the lake, overseeing from above yet close at hand: a time of rising momentum and a flourishing enterprise. Lin means to oversee and draw near; yang grows stronger—just the time to advance and expand. The judgment warns 'by the eighth month there is misfortune,' reminding you that fullness must guard against decline: precisely when momentum is good, stay alert to danger, treat people sincerely and rule generously, and leave room for the future. Overall a thriving, auspicious situation favoring active advance but calling for a long view.",
  career:"On the rise; take the initiative to expand and seize opportunity steadily—while winning people by virtue and treating subordinates and colleagues well, never arrogant.",
  love:"Being active and sincere can bring good progress; relate with generous warmth, and the bond grows close by the day.",
  wealth:"Favorable; position with the momentum for growth—but leave a margin in good times and guard against later swings.",
  health:"On the up; use the good state to strengthen exercise and upkeep; mind the mouth and throat, and do not indulge out of complacency.",
  advice:"Ride the momentum to advance and build good ties; stay alert to danger and keep a reserve, without arrogant overreach."
},
20: {
  detail:"Guan has wind above and earth below, wind moving over the earth surveying all things: viewing the whole from above, and also being looked up to by many. Guan carries both observing and setting an example: contemplate calmly and understand the situation before acting; and, since your words and deeds are watched, be upright and exemplary. Now do not rush to act—look, think, and sense more, seeing the trend and people's hearts clearly. Those in high position should lead by example and build credibility. Overall a time to observe clearly, cultivate yourself, and gather momentum.",
  career:"Observe the situation and research before deciding, not acting rashly; those in key posts must lead by example to win trust.",
  love:"Observe and understand the other and the relationship first, without rushing to declare; win respect with an upright, sincere attitude.",
  wealth:"Focus on watching and judging—see the trend before investing; scrutinize carefully now, and do not follow the herd blindly.",
  health:"Value check-ups and reading the body's signals, heading off trouble early; nourish the spirit and keep a calm, contemplative mind.",
  advice:"Observe clearly and plan before acting; do not move rashly—see things clearly before deciding."
},
21: {
  detail:"Shi Ke has fire above and thunder below, thunder and lightning together: dealing with obstacles by decisive authority and clarity. Shi Ke means to bite through—like something stuck in the mouth that must be bitten and chewed before things can flow. This hexagram is about removing obstacles, distinguishing right from wrong, and deciding by law and reason, especially in disputes and blockages. Combine firmness and flexibility, see clearly, and cut when you must, without indulging wrongdoing—but use authority and penalty fairly and in measure. Overall a situation that flows only after decisive action clears the way.",
  career:"Decisively clear obstacles and disputes at work, distinguishing right from wrong and handling by the rules; when it is time to decide, do not drag your feet.",
  love:"Face and resolve the blockages and estrangement—say things clearly and untie the knot; handle conflict fairly, not extremely.",
  wealth:"Obstacles on the money path must be forcefully cleared; scrutinize contract details and defend your rights by reason, tolerating no loopholes.",
  health:"Mind the mouth, teeth, and digestive system; deal promptly with any blockage or discomfort—treat the cause and do not delay.",
  advice:"Clear obstacles decisively and judge clearly; apply kindness and firmness in measure and handle things fairly, not indulgently."
},
22: {
  detail:"Bi has mountain above and fire below, fire lighting the mountain's foot and coloring all things: adornment, refinement, and the beauty of form and courtesy. Bi is 'ornament'—fitting refinement improves image and eases relations, but the root is substance; adornment only adds to it and must not overshadow it. The line 'plain white adornment, no blame' reminds us that returning splendor to simplicity is the highest state. Now value outward image and etiquette, but all the more keep inner and outer matched, with substance as the base. Overall a time to adorn in measure, aiding matters with form without losing your true nature.",
  career:"Attention to image and courteous communication helps, but base it on real ability—do not be all show.",
  love:"Cultivating romance and ritual deepens feeling, but sincerity and inner compatibility are the root.",
  wealth:"Fitting packaging and marketing can add value; do small, refined things—do not chase flashy, large speculation.",
  health:"While tending appearance, care more for the root; eat plainly and simply; mind the skin and eyes.",
  advice:"Adorn in measure and treat people with courtesy; keep to substance with matched form and inner truth, not flashy emptiness."
},
23: {
  detail:"Bo has mountain above and earth below, the mountain clinging to the earth, five yin lines pressing the single yang above: a time when yin flourishes and yang wanes and things fall into decay. Bo means to peel away and erode—petty people gain power and the right way is harmed; the situation is against you. Now it does not favor having somewhere to go; better to meet motion with stillness and draw in with the momentum, not fighting head-on—wait for the moment. Decline at its end is the turn; so preserve strength, carry things with virtue, and hold the base. Overall a hard stretch to withdraw and lie low, endure with the times, and await the turnaround.",
  career:"Unfavorable with heavy resistance; draw in and stay conservative, holding your post—do not expand or take risks; wait for the tide to turn.",
  love:"Facing a test or drifting apart; be tolerant and patient, keep the essentials, and do not force or inflame conflict.",
  wealth:"Declining with easy losses; protect capital and contract, avoid risk—do not speculate; watch and wait.",
  health:"Low in strength; rest and shore up the base, guarding against illness and injury; mind the legs and the stomach—do not push through.",
  advice:"Withdraw and lie low, endure with the times, and preserve strength; do not advance or gamble—wait for decline to reach its turn."
},
24: {
  detail:"Fu has earth above and thunder below, thunder hidden within the earth, a single yang reborn below: the turning point where cold departs and spring returns. Fu means to return and recover—the start of decline turning to growth; 'the way turns and returns, in seven days comes the return,' things cycle by law. Now yang is faint but rising; go with the new life, correct your course in time, and accumulate steadily from small beginnings. Do not be hasty—a new sprout needs care. Overall an auspicious time of decline turning to growth, full of hope, favoring rest, recovery, and a fresh start.",
  career:"A recovery and turning point; restart with the momentum, steady and sound; correct errors in time and build up from small beginnings.",
  love:"A chance to regain what was lost or reconcile; return sincerely and mend the relationship, seizing the warming start.",
  wealth:"Bottoming out and rising; position gradually and seize new openings; do not rush—accumulate steadily.",
  health:"Entering recovery; rest with the season and recover gradually; keep warm and nourish yang, without haste.",
  advice:"Revive with the momentum, correct errors in time, and start anew; build from small beginnings, not hastily."
},
25: {
  detail:"Wu Wang has heaven above and thunder below, thunder rolling under heaven as all things move in accord with heaven: truth without falsehood, no improper designs. Wu Wang means no delusion and no reckless action—all follows nature and springs from sincerity; walk the right path and it is supremely successful, but act wrongly or grasp for the improper and there is calamity. Now keep upright and sincere and do your proper part in a grounded way, without scheming or delusion. Sometimes an 'undeserved misfortune' comes—trouble not of your making; do not overreact, keep to your part and it resolves. Overall a time to be sincere and upright and let things take their natural course.",
  career:"Do your proper work in a grounded way, without scheming or overreaching; upright and pragmatic, things go smoothly—reckless grasping breeds trouble.",
  love:"Treat people sincerely and let it develop naturally, without tricks or forcing; a true heart makes the bond steady.",
  wealth:"Earn by right means and within your limits; do not covet improper gains or gamble—legitimate work lasts.",
  health:"Keep hours in accord with nature; do not over-supplement or abuse the body; if an unexpected ailment comes, tend it with the flow.",
  advice:"Keep upright and sincere and let things take their course; avoid delusion and reckless grasping—your proper part is your safeguard."
},
26: {
  detail:"Da Chu has mountain above and heaven below, heaven contained within the mountain: great storing—accumulating virtue, talent, and strength. Da Chu means great accumulation, both of learning, wealth, and energy, and the firm restraint of one's own strong nature. 'Not eating at home is auspicious'—once stored up, go out and act, and put your ambitions to use. Now the key is deep accumulation: settle down to learn, stockpile, and cultivate, renewing your virtue daily, never rushing. With energy fully stored, you can shoulder great tasks and reach far. Overall an auspicious time to accumulate quietly, gather momentum, and finally become great.",
  career:"Focus on building strength and resources and improving skill—accumulate to release later; once stocked, take on big responsibility.",
  love:"Cultivate steadily and build trust and a foundation, not rushing; a solid base ripens the bond.",
  wealth:"Accumulate savings and invest steadily for the long term, not chasing quick gains; with real strength you can act big.",
  health:"Focus on daily upkeep to store vital energy and strengthen the body through exercise; store up and proceed step by step.",
  advice:"Accumulate quietly and gather momentum; enrich yourself and renew your virtue daily—do not rush for speed."
},
27: {
  detail:"Yi has mountain above and thunder below, two yang lines enclosing four yin, shaped like open jaws: nourishment, food, and speech. Yi is about nurture—both nourishing body and spirit with food and rest, and cultivating virtue with careful words. 'Observe nourishment; seek your own fill' urges attention to what you nourish, how, and by what means. Now moderate your eating, be careful in speech (trouble comes from the mouth), and cultivate body and character rightly—nourishing rightly is auspicious, without greed or grasping. Overall a time to cultivate body and mind, be moderate and disciplined, and nourish self and others rightly.",
  career:"Focus on cultivation and building strength, and be careful in speech; stand on your own by honest effort, not by cutting corners.",
  love:"Nurture the bond and support each other; mind your words—no harsh speech that wounds the relationship.",
  wealth:"Earn and provide by the right path and within your means; be thrifty and moderate, opening income and cutting waste, without greed.",
  health:"Above all, moderate your diet—regular, plain, and measured; mind the stomach and mouth, and guard your energy by careful speech.",
  advice:"Nourish body and virtue, be moderate and disciplined, and careful in speech; nourish yourself by the right path, not by greed."
},
28: {
  detail:"Da Guo has lake above and wind below, the lake's water drowning the trees: an extraordinary time of exceeding the norm and being overloaded. Da Guo means great excess—like a ridgepole weak at both ends and overloaded in the middle, near to buckling; the situation is precarious. Extraordinary times call for extraordinary measures: 'stand alone without fear, withdraw from the world without distress'—act with uncommon resolve and steadiness. Meet the crisis boldly and adapt to relieve the pressure, but also act within your limits, lest you break under too great a load. Overall a critical situation of great pressure needing courage and wisdom.",
  career:"A heavy load or extraordinary situation; shoulder it with uncommon resolve and adapt to relieve pressure—yet act within limits, not straining to breaking.",
  love:"The relationship bears heavy pressure or an unusual state; face it with extraordinary tolerance and courage, avoiding overload that causes a rift.",
  wealth:"Finances are overloaded or at risk; decisively relieve pressure, deleverage and lighten the load—do not add on or take risks.",
  health:"Body and mind are overloaded; be sure to reduce stress and burden and adjust in time; beware overwork and sudden trouble—do not tough it out.",
  advice:"In extraordinary times, shoulder boldly and adapt; act within your strength and lighten the load in time, not blindly straining."
},
29: {
  detail:"Kan, doubled, is pit upon pit of danger: layered hardship and trials. Kan means pit and danger—like water flowing into a dangerous hole, the situation is hard upon hard. But the judgment says 'with sincerity, the heart itself succeeds'—only with a sincere heart and firm will, like water that keeps its nature though it falls into danger, can you finally flow through. The key is to steady your inner heart, hold to sincerity, and meet things with perseverance—moving through danger without losing faith. Do not panic or gamble; tread through the difficulty step by step. Overall a hard situation escaped by sincerity and steadiness.",
  career:"Hard circumstances with heavy obstacles; steady your mind and meet things with sincerity and perseverance; do not take risky shortcuts—cross the difficulty in a grounded way.",
  love:"Facing tests and setbacks; hold on only with a true heart and firmness—one mind and shared hardship carry you through together.",
  wealth:"Risky and prone to traps; hold steady and protect capital, avoiding risk; never speculate or drink poison to quench thirst.",
  health:"Be alert to health risks—mind the kidneys, urinary system, and heart-and-blood; keep regular, steady the spirit, do not hide illness or tough it out.",
  advice:"Hold sincerity and perseverance, meet danger steadily, step by step; do not panic or gamble on luck."
},
30: {
  detail:"Li, doubled, is brightness upon brightness: light, attachment, and dependence. Li means clinging—as fire must cling to fuel to burn, all things depend on something. The judgment 'favorable to be steadfast; rearing a cow is auspicious' reminds you that even in a bright, open time you must cling to the right path and stay gentle and careful. Now use your talent and insight to let your light shine in all directions, but know to rely on the right people and things, bright yet gentle. Too hard and too dazzling invites loss; stay restrained and upright. Overall a bright-prospect time of showing talent, best kept upright, clear yet gentle.",
  career:"Talent and opportunity show and prospects are bright; use your strengths and judge clearly—while relying on the right path and team, humble and unassuming.",
  love:"Warm and bright; show yourself sincerely and lean on each other—but stay gentle and upright, avoiding an overbearing, scorching manner.",
  wealth:"Bright with openings; earn through legitimate backing and connections; stay rational and do not swell or take risks over a hot streak.",
  health:"Mind the heart, eyes, and internal heat; keep measured hours and cool the fire; keep the mood calm and do not overexcite and drain yourself.",
  advice:"Use your strengths, judge clearly, and keep upright, relying on the right path; stay gentle and restrained, not hard and showy inviting loss."
},
31: {
  detail:"Xian has lake above and mountain below, a lake atop the mountain, their breath connecting and resonating: mutual influence and sincere exchange. Xian is 'to feel'—people resonating heart to heart through sincerity, especially the beginning of attraction and marriage. The way of resonance prizes openness, sincerity, and naturalness, free of calculation. 'Taking a wife is auspicious'—now move people with sincerity and build good ties widely, sensing and responding to others with care. Resonance in uprightness is auspicious; false feeling does not last. Overall an auspicious time of sincere resonance, warm exchange, and harmonious union.",
  career:"Move others with sincerity and goodwill and build good relations; teamwork and networking go well; an open heart wins help.",
  love:"Just the good time of resonance and mutual attraction; treat each other truly and naturally—sincere feeling makes love sweet.",
  wealth:"Seek wealth through good relations and cooperation, based on mutual benefit and trust; treat clients and partners sincerely and money flows.",
  health:"Mind how mood and body affect each other; keep a cheerful heart; watch the joints and stomach, and do not harm yourself with mood swings.",
  advice:"Be open and sincere, move people by feeling, and exchange warmly; avoid calculation and false feeling."
},
32: {
  detail:"Heng has thunder above and wind below, thunder and wind aiding each other and lasting without cease: duration, constancy, and the way of the long term. Heng means constant and lasting; 'favorable to have somewhere to go'—persist and hold to the constant right way to succeed, as sun and moon shine long by holding to heaven. Now the key is to hold to the set right path and goal, steady and lasting, without wavering; but constancy is not rigid conservatism—hold the constant while adapting to the times, apt in motion and stillness. Quick gains and fickleness fail. Overall a time to hold a constant heart, persevere, and develop steadily.",
  career:"The key is to persist and deeply cultivate a set direction steadily; day by day it accumulates to success—do not chop and change or covet novelty.",
  love:"Focus on long-term cultivation and mutual constancy, finding steadfastness in the plain; loyalty and persistence make it lasting.",
  wealth:"Take the long, steady view and accumulate continually, earning by a constant strategy; do not flip around or chase and dump.",
  health:"The value is constancy in health-keeping—stick to regular hours and exercise; mind the liver, gallbladder, and nerves, staying steady and unhurried.",
  advice:"Hold the right path, persevere, and advance steadily; keep the constant while adapting—do not quit halfway or change constantly."
},
33: {
  detail:"Dun (Heaven over Mountain) has heaven above and mountain below—heaven keeps receding while the mountain, however high, cannot catch it: petty forces are growing and the times are unfavorable, so the noble one withdraws in time. Retreat is not fleeing or admitting defeat but the wisdom of reading the times and preserving strength. Toughing it out is useless now; withdrawing keeps the root and the turning point. The key is to retreat with composure and measure—decisively leaving the whirl of trouble yet keeping your principles, retreating in body but not bending in will, gathering momentum for the future.",
  career:"The environment is against you; draw in your edge and lie low, do not force advance or clash head-on—retreat and bide your time.",
  love:"If there is forced entanglement, better to step back and cool off; a truly fitting relationship need not be forced—letting go clears the mind.",
  wealth:"Do not expand investments or grasp for gains; take profit and hold conservatively—keeping what you have matters more than chasing new gains.",
  health:"Beware illness from overwork; rest and recover in time, especially guarding the respiratory system and old joint ailments—do not tough it out.",
  advice:"Retreat rather than advance; actively avoid pointless strife; keep your principles while yielding, and gather strength for a better time."
},
34: {
  detail:"Da Zhuang (Thunder over Heaven) has thunder above and heaven below, thunder resounding in the sky with great force: yang strength at its vigorous peak. Yet the judgment stresses being upright—the stronger you are, the more you must guard against relying on force to charge ahead. True strength is not reckless charging but power that keeps the rules and knows when to advance or yield. You are on a rising surge; ride it, but never bully with strength or press others by force, or like the ram butting the hedge you will be stuck between advance and retreat. Use power on the right path to last.",
  career:"A time to act; push your goals actively, but keep the rules with just cause—do not bully by force or make too many enemies.",
  love:"Warm initiative is good, but do not pressure the other with dominance; respect and restraint keep the bond firm.",
  wealth:"With momentum you may advance in measure, but do not overleverage or take risks out of a moment's success—act within your limits.",
  health:"Even with vigor, be moderate; guard against injury or blood-pressure issues from overexertion or emotional agitation.",
  advice:"Advance with momentum but stay upright and disciplined, without arrogance or haste; the stronger you are, the more you must know when to stop."
},
35: {
  detail:"Jin (Fire over Earth) has the sun above and earth below, the sun rising over the earth with growing light: bright prospects and steady advance. This hexagram is about advancing—a rare favorable time; be actively upward and show your talent, and you easily win the appreciation and promotion of benefactors. But under the light, meet things with gentle humility—the earth below reminds you not to forget modest solidity as you rise, standing on real ability rather than quick gains. Go with the momentum, aboveboard, and the prospects are promising.",
  career:"A good time to rise; take the initiative to perform and seek promotion; treat people sincerely and stay grounded, and you easily gain support from superiors and benefactors.",
  love:"Love turns bright; good for expressing yourself and treating each other sincerely; the single may meet someone who appreciates them.",
  wealth:"Growing prosperity, with more honest income and cooperation; operate legitimately and advance steadily, no need to speculate.",
  health:"Improving overall; mind the eyes and heart-and-blood, and do not neglect rest for the sake of pushing ahead.",
  advice:"Advance, but aboveboard, humble, and grounded; seize the rising phase to show your ability, avoiding impatience and vanity."
},
36: {
  detail:"Ming Yi (Earth over Fire) has earth above and brightness below, the light sunk beneath the earth—like the sun set and the worthy in trouble: a dark time of hard circumstances, buried talent, or being suppressed. Now showing your edge only invites disaster; best to hide your brightness within and show softness without, like enduring a dark night—hide your light and bide your time, holding to the inner light and conviction. Hardship is temporary; the key is to keep your integrity uncorrupted by the environment, endure and gather strength, and await the return of light.",
  career:"Unfavorable and prone to being squeezed or suppressed; keep low and endure, do not show your edge, hold your post, avoid confrontation, and wait for the turn.",
  love:"There may be misunderstanding, coldness, or outside resistance; be tolerant and restrained and dissolve it with softness—do not rush to have it out and inflame conflict.",
  wealth:"Obstructed; hold rather than attack, beware of being cheated or blindsided; hold conservatively and keep a low profile.",
  health:"Mind depression and hidden ailments; check and treat early, and avoid harm from excessive worry.",
  advice:"Hide rather than show; conceal your light and hold to the right path, enduring the hard stretch—never act on impulse in adversity."
},
37: {
  detail:"Jia Ren (Wind over Fire) has wind above and fire below, fire burning and generating wind, the wind spreading from within outward: the principle that the household is rooted within, ruling the outer from the inner. This hexagram stresses each keeping their place and treating one another sincerely; with a harmonious family and firm interior, all outer matters go smoothly of themselves. The lesson: begin great things by ordering the interior and tending the base, each doing their part with trustworthy words and deeds, held together by feeling and rules. Order the household, then govern outside—straighten what is near first; that is the lasting way.",
  career:"First stabilize the team and internal relations, clarify the division of labor, and win people by sincerity; an aligned interior makes a firm foundation.",
  love:"Focus on sincere treatment and shouldered responsibility; tend the family atmosphere well—suited to talk of marriage and steady development.",
  wealth:"Better to hold and manage the household, budgeting carefully; joint family finance, opening income and cutting waste, accumulates steadily.",
  health:"Mind the family's health and your own regular hours; guard against minor ailments from housework strain or heaty food.",
  advice:"Work from within outward, settling the inside before the outside; each keeps their part and treats others sincerely—do not put the cart before the horse."
},
38: {
  detail:"Kui (Fire over Lake) has fire rising above and lake sinking below, moving apart: estrangement, divergence, and mutual discord. This hexagram favors small matters, not great ones—a situation of clashing views and disunited hearts. The key is to seek common ground while allowing difference: though there is disagreement, do not force uniformity; find consensus and cooperation in small, local points. Dissolve estrangement with tolerance and seek the same within difference, never inflaming conflict. Within divergence there is still room to turn; patient communication can change opposition into union.",
  career:"Teams or partners easily generate friction and divergence, and big projects go hard; do small things well first and gradually align—do not force ahead and provoke opposition.",
  love:"Misunderstanding and clashes of temperament come easily; communicate more, seek common ground while allowing difference, and do not let small rifts grow into big conflicts.",
  wealth:"Partnerships easily disagree; sign carefully and clarify rights and duties, favoring small, steady amounts, not grand ambitions.",
  health:"Mind insomnia and internal heat from emotional friction, and stomach troubles from water and fire out of balance.",
  advice:"Favor small over great; seek common ground while allowing difference, value harmony, and dissolve divergence by patient talk—do not stubbornly oppose."
},
39: {
  detail:"Jian (Water over Mountain) has danger above and mountain below, danger ahead and a high mountain behind, hard to advance or retreat: heavy difficulty and hard going. Jian is a lame foot that walks with trouble; forcing ahead now only sinks you deeper. The judgment points out 'favorable in the southwest, favorable to see the great person'—turn toward the smoother direction and seek a benefactor's help, and all the more reflect on and cultivate yourself. In difficulty, most avoid reckless force and complaint; better to stop and take stock, walk with companions, and turn hard into easy. Hold to the right and bide your time, borrowing strength to proceed—the pass can be crossed.",
  career:"Hard circumstances with many obstacles; do not force a breakthrough—pause, seek help and cooperation, and rethink your strategy before advancing.",
  love:"Obstacles or many setbacks; wait patiently and face it together, using the help of both sides or elders to resolve it—do not give up in haste.",
  wealth:"Hard going; do not take risks to open new ground—hold and seek reliable help, avoiding risky areas for a safer path.",
  health:"Mind the legs, joints, lower back and kidneys, and cold-damp ailments; move carefully to avoid falls and seek treatment in time.",
  advice:"Stop rather than advance; when blocked, first pause and reflect and enlist a benefactor, going around the danger by the easier path—never charge in."
},
40: {
  detail:"Xie (Thunder over Water) has thunder above and rain below, thunder and rain breaking out and the pent-up finding release: danger dispersed and hardship lifted—a hexagram of the turn from bitter to sweet. It is about easing and loosening; the earlier tension and pressure begin to slacken. The lesson: once difficulty eases, act in time and seize the moment to resolve leftover matters, and be forgiving of past faults, not dwelling on them. Better sooner than later—use the momentum to clear old knots and travel light—but also guard against slackening into laziness.",
  career:"Deadlocks and obstacles begin to dissolve; seize the turn to act decisively and clear backlog—the sooner the smoother; do not delay or slacken.",
  love:"Tension or misunderstanding eases; use the moment to reconcile and let go of old grievances, returning to ease and harmony.",
  wealth:"Financial pressure eases; clear old debts and accounts in time and revive cash flow, recovering steadily on the warming turn.",
  health:"Ailments trend to recovery; use the momentum to recuperate, and take care not to relapse by dropping your guard once eased.",
  advice:"Act in time and resolve difficulty with the momentum, treat others generously and let old grudges go; seize the turn and do not miss it through slackness."
},
41: {
  detail:"Sun (Mountain over Lake) has mountain above and lake below, decreasing the lower to benefit the upper: reduction, giving, and restraint. Decrease is not necessarily bad; the judgment says 'with sincerity, supreme good fortune'—fitting reduction, sacrifice, and investment, so long as they come from sincerity and suit the time, bring long-term gain in return. The lesson is knowing what to give up: reducing show, curbing desire, and being willing to give looks like a loss but really accumulates blessing and foundation. Treat people sincerely and diminish yourself to benefit others—give first, gain later; bitterness first, then sweetness.",
  career:"You may need to give more, streamline resources, or make concessions; invest sincerely and bear a temporary loss to lay a base for long-term growth.",
  love:"The bond is built on sincere giving and tolerant yielding; calculate less and think more for the other—give first and it grows firmer.",
  wealth:"Spending or investment rises and returns dip; be thrifty and spend on essentials—today's loss is tomorrow's gain.",
  health:"Curb appetite and desire and eat lightly; guard against draining vital energy through excess, and rest quietly.",
  advice:"Give rather than grasp; give sincerely, know what to relinquish and restrain, bearing a short loss for a long gain—do not nickel-and-dime."
},
42: {
  detail:"Yi (Wind over Thunder) has wind above and thunder below, wind and thunder reinforcing each other and growing stronger: increase, benefit, and active advance—decreasing the upper to benefit the lower, a rare good time. The judgment says 'favorable to have somewhere to go, favorable to cross the great river'—seize the chance and act boldly, pressing your goals on a favorable tide. The lesson: when benefiting, all the more benefit others, emulate the good, and correct your faults, not forgetting to give back and reflect as you grow. Go with the momentum, upward, while carrying things with virtue—then benefit lasts.",
  career:"A good opportunity; advance actively and press your plans boldly, be glad to help others and build good ties—work easily gains help from many sides.",
  love:"In a benefiting, growing phase; give actively and cultivate sincerely, bringing positive energy to the other—the bond can warm.",
  wealth:"On the up with many chances of gain; seize the timing to invest and expand in measure, earning by right means—generosity adds blessing.",
  health:"Spirits improving; use the momentum to build good habits and benefit body and mind, but do not overdraw through complacency.",
  advice:"Advance actively and seize the chance; learn from the good and correct faults, and give back while benefiting—do not be greedy and never satisfied."
},
43: {
  detail:"Guai (Lake over Heaven) has lake above and heaven below, the lake's water swollen high over heaven and about to burst down: resolution and clearing accumulated ills—five yang lines resolving to remove the one yin, right force strong and about to expel the petty. The judgment warns: resolution must be bold yet aboveboard, announced with sincerity, not by force and struggle. The lesson: for people or ills that should be ended, decide at once and clean up thoroughly—but do it legitimately, guard against backlash, and never act on impulse or indulge wrongdoing. Firm yet able to harmonize, resolute yet prepared, you end well.",
  career:"Time to decide firmly, clear accumulated ills, or settle dragging problems; handle it aboveboard, guard against petty backlash, and do not be indecisive.",
  love:"Decide early on matters that need a stance or an ending; communicate frankly and leave no hidden trouble—do not drag it out or force by hardness.",
  wealth:"Cut losses decisively, clear bad assets, or settle disputes; act transparently and by the rules, guarding against harm from clinging.",
  health:"Mind acute conditions from overwork or pent-up stress; clear hidden trouble in time and seek treatment decisively.",
  advice:"Decide and act, clearing accumulated ills, but legitimately and prepared, persuading by reason—do not indulge, delay, or rely on force."
},
44: {
  detail:"Gou (Heaven over Wind) has heaven above and wind below, wind under heaven touching everything: unexpected encounter and the first stirring of yin. A single yin is born beneath five yang—seemingly small but with a hidden, growing tendency. The judgment 'do not marry this woman' warns you to stay alert to sudden temptations, people, or signs and not join with them rashly. The lesson: opportunity and hidden trouble often coexist; on meeting, use good connections well but all the more head off trouble early, catching bad signs at the bud. Handle things prudently to seek gain and avoid harm.",
  career:"There may be a chance encounter, new opportunity, or new partnership; screen prudently, use good chances while staying alert to hidden trouble—do not trust or commit rashly.",
  love:"An encounter or temptation may appear; treat it rationally and see the other clearly—do not be swept up by a moment's ardor into an improper relationship.",
  wealth:"An unexpected money path or chance may appear; scrutinize its truth and beware alluring projects that hide risk—steady is best.",
  health:"Mind sudden minor ailments or the buds of old illness; catch and treat early, especially women's reproductive and endocrine health.",
  advice:"Handle encounters prudently and head off trouble early; use good ties while watching for hidden risk—do not join rashly."
},
45: {
  detail:"Cui (Lake over Earth) has lake above and earth below, the lake's water gathering on the earth: assembling, converging, and the drawing together of hearts. The judgment says 'favorable to see the great person; success; great offerings bring good fortune'—in a time of gathering, best that a virtuous one leads at the center and treats people sincerely; when hearts turn to you, all goes well. The lesson: gathering is a good chance to unite people and plan great things, but crowds easily breed strife, so all the more base yourself on sincerity, guard against danger in good times, and forestall accidents and internal disputes. Rally strength legitimately to achieve something.",
  career:"Connections and resources converge—suited to uniting and cooperating on big things; win people by sincerity and integrate strength legitimately, but guard against internal strife.",
  love:"A joy of coming together—good for gatherings, meeting the family, or defining the relationship; treat each other sincerely, and social occasions may bring good matches.",
  wealth:"A good chance to pool wealth—suited to joint ventures and expanding connections; operate with integrity while preparing a risk plan for accidents.",
  health:"With crowds, guard against infection and food hygiene; emotionally, guard against worry from tangled affairs.",
  advice:"Gather and unite and achieve with the momentum, rallying hearts by sincerity—do not focus only on the near term and neglect internal hidden trouble."
},
46: {
  detail:"Sheng (Earth over Wind) has earth above and wood below, wood growing upward within the earth: ascent and gradual growth—an advancing hexagram of step-by-step accumulation from small to great. The judgment says 'supreme success; see the great person; a southward march is auspicious'—in ascent, be actively upward and seek recommendation; the prospects are bright. The lesson: growth should be like a tree taking root and sprouting—grounded, from small to great, rising with the momentum, never forced. With humble solidity, ceaseless accumulation, and the help of benefactors, you rise steadily and arrive in time.",
  career:"In a steady rising phase; advance actively and seek promotion and a benefactor's lift, accumulating in a grounded way; prospects are good—do not rush for quick results.",
  love:"Warming steadily and gradually; cultivate solidly and let it ripen; the single may take the initiative and gradually enter a fine state.",
  wealth:"Growing gradually; proceed soundly and accumulate step by step, positioning with the rising trend—not a one-leap-to-the-sky rush.",
  health:"Improving; recuperate in order and keep up exercise, taking care not to neglect basic rest amid a busy rising phase.",
  advice:"Advance and ascend actively with the momentum, grounded and aided by benefactors; accumulate steadily, not forcing growth or grasping for speed."
},
47: {
  detail:"Kun (Lake over Water) has lake above and water below, water leaking beneath the lake and the lake run dry: hardship, scarce resources, and being trapped in adversity—a low point where circumstances are hard and aims cannot be realized. Yet the judgment says 'success; be steadfast; the great person is auspicious'—the body is trapped but the way is not; in adversity the true noble one all the more holds to the right and keeps faith with virtue. The lesson: in hard times words are useless; prove yourself only by action and conviction, without blaming heaven or others—keep to your part and endure, awaiting the time. Hold your inner firmness and the day of release will come.",
  career:"Trapped and constrained and prone to being misunderstood; keep to your part and win people by results, enduring for the time—do not complain and argue or grasp at anything in a panic.",
  love:"At a low ebb or with poor communication; show your heart by action, not words, waiting patiently—hardship reveals true feeling.",
  wealth:"Tight and hard to turn over; open income and cut waste and live within your means; never borrow in a panic or gamble to recoup—hold the line and wait for the turn.",
  health:"Mind overdrawn strength, lowered immunity, and mouth or kidney-water problems; rest quietly and store strength—do not tough it out.",
  advice:"Hold rather than move; in adversity keep to the right and prove yourself by action, content in simplicity and enduring for the time—do not complain or act rashly."
},
48: {
  detail:"Jing (Water over Wind) has water above and wood below, the wooden bucket drawing water deep: the image of the well that nourishes people, constant and orderly, giving without exhaustion. The well stays in its place while its water reaches all around—'the town may change but the well does not': the base and essence should stay constant. The judgment warns of nearly drawing up the water but the rope not reaching or the jug breaking—finish what you start; failing at the last step is the greatest pity. The lesson: carry yourself like a well—give quietly and benefit others, while keeping inner cleanness and renewal. Persevere and see things through, cultivating yourself to nourish others—that is the lasting way.",
  career:"Keep to your part, deepen your expertise, and give steadily, building repute by being reliable—remember to finish and not fail at the last step.",
  love:"The bond is a slow, steady stream of mutual nourishment; tend it with care and be consistent—do not quit halfway or only take without giving.",
  wealth:"Wealth is best built by steady, lasting operation; hold and deepen and revive old resources, not giving up halfway or grasping for quick gains.",
  health:"Mind fluid metabolism and the kidneys and urinary system; keep regular hours and continual upkeep, keeping body and mind clean and renewed.",
  advice:"Persevere and see things through, cultivating yourself to nourish others and quietly working, keeping renewal and cleanness—do not fail at the last step."
},
49: {
  detail:"Ge has fire below and lake above, water and fire together yet at odds in nature—change is inevitable. Ge means to reform and remove the old. It reminds us: when old ways no longer work and conflicts reach a breaking point, change is necessary and right. But reform cannot rest on a moment's impulse; the judgment says 'trust comes only on the appointed day'—act after the time is ripe, preparation is full, and trust is won, and people will accept it. In attitude, be clear in aim and go along with people's hearts, having both the resolve to break the old and steady steps, avoiding change for its own sake.",
  career:"At a juncture to adjust direction or method; plan before acting, and win the trust of key people before pushing reform.",
  love:"Old problems in the relationship need to be faced honestly and changed; pick the right time to talk—do not let grievances pile up and suddenly erupt.",
  wealth:"Good for adjusting your old approach to finance or business, but change only after reading the situation clearly, not flip-flopping.",
  health:"Your body or routine may have reached a point needing change; correct bad habits in time, and do not let them drag into chronic illness.",
  advice:"Change when you should, but mind the timing: act only after full preparation and support, not rashly for speed."
},
50: {
  detail:"Ding has wood below and fire above, like using wood to kindle fire and cook food. The cauldron is a cooking vessel and an image of stability, nurturing the worthy, and accomplishing things. After Ge breaks the old, Ding is about establishing the new, stabilizing, and cultivating. It reminds you: after reform there must be new order and real results—upright and steady like a cauldron, able to contain and nourish. In attitude, be grounded, take advice humbly, and value accumulation, putting good people, resources, and methods in their proper place. The cauldron is heavy and honored, not to be treated lightly; act with gravity and on the right path to bear great things.",
  career:"In a stage of opening a new phase and stabilizing the base; employ the worthy and set right the system, and results will steadily show.",
  love:"The bond trends toward maturity and stability; cultivate sincerely and nourish each other, and you may move toward a longer commitment.",
  wealth:"Steadily favorable; suited to allocating resources solidly and advancing amid stability, avoiding shortcuts and speculation.",
  health:"Value dietary upkeep and regular hours; your constitution is slowly being restored—do not overdraw it.",
  advice:"Seek stability and uprightness, take advice humbly, accumulate steadily, and settle the new situation into place step by step."
},
51: {
  detail:"Zhen is thunder over thunder, peals coming one after another: violent shaking and sudden shock. Zhen holds fear and alarm, but also alertness and generation. It reminds you: facing sudden changes or pressure, first do not panic. The judgment says 'when thunder comes, fearful and alert; then laughter and words'—when the thunder sounds, hold reverent caution, and afterward you can still talk and laugh at ease; the key is composure amid change and inner steadiness. Zhen also stands for action and a new beginning—use this force to rouse your spirit. In attitude, stay unshaken in danger, keep a sense of awe, reflect in time, and turn the shock into a chance to rise.",
  career:"You may meet sudden change or pressure; stay calm, respond fast, and treat the crisis as a chance to rouse yourself anew.",
  love:"There may be quarrels or turbulence; steady your emotions before communicating, and do not be swept off by a moment's impulse.",
  wealth:"Markets or income may swing; no need to panic—hold your principles and respond as chances arise.",
  health:"Watch for fright, palpitations, and nervous tension; mind emotional management and get enough rest.",
  advice:"Stay composed in change—fear the moment, then find calm; use the shock to rouse yourself, and do not throw yourself into disorder."
},
52: {
  detail:"Gen is mountain over mountain, twin peaks standing together: stillness, steadiness, and knowing when to stop. Gen means to stop—when it is time to stop, be able to stop. It reminds you: constant advance is not always good; knowing to halt in the right place, rest in your position, and not move recklessly can instead hold the root. The judgment 'keeping the back still, one no longer feels the body' aims at reining in desire, focusing on the present, and not being pulled by outside things. In attitude, be calm and self-possessed, curb restlessness, and each rest in their part. When the outer environment is unclear, watching quietly and cultivating within is the wise choice.",
  career:"At a stage to stop and hold; keep to your post and settle your strength, not rushing to expand or jump around.",
  love:"Hold rather than advance; rein in impatience, give each other space, and rest in the present way of relating.",
  wealth:"Better to hold and watch; make no rash big moves and steady your existing base.",
  health:"Mind the lower back, joints, and the like; rest quietly and keep regular hours, avoiding overwork and mood swings.",
  advice:"Move when you should, stop when you should; now hold still and focus on your part, and do not act recklessly."
},
53: {
  detail:"Jian has mountain below and wood above, a tree on the mountain growing in order: gradual, orderly progress. Jian is about proceeding step by step, steadily, never skipping stages. Using the rites of a woman's marriage as a metaphor, it shows good things need to follow a rhythm and ripen in time. It reminds you: however good the goal, take it one step at a time; when accumulation is enough, results come of themselves. In attitude, be patient, hold to the right, and follow the rules—rushing spoils things. Lay a good base for everything and proceed in order; progress is slow but firm and lasting.",
  career:"Advance steadily and accumulate in order, going step by step by the rules—do not skip levels or rush.",
  love:"Suited to slow development and orderly cultivation; letting it ripen naturally makes it lasting.",
  wealth:"Accumulate wealth in order and grow steadily; do not count on overnight riches.",
  health:"Recovery and conditioning take time; improve gradually, and do not be impatient.",
  advice:"Hold to the right and proceed gradually, laying a good base and advancing by rhythm—do not grasp for quick success."
},
54: {
  detail:"Gui Mei has lake below and thunder above, about a young woman marrying yet in an improper position: a union of unright standing and misplaced position. It reminds you: some relationships or partnerships are, from the start, not proper in standing or terms; forcing ahead often ends badly. The judgment warns 'advancing brings misfortune, nothing favorable'—not that nothing can be done, but that you should see the situation clearly, keep to your part, and leave room. In attitude, be prudent, upright, and pragmatic; see clearly whether motive and standing are proper, do not let a moment's ardor or interest cloud you, and head off later trouble early.",
  career:"If a partnership or post is improper in standing or forced in terms, be extra careful—set the relationship straight before talking development.",
  love:"See clearly the standing and the other's sincerity; do not rush into union on a moment's impulse—keeping to the right lasts.",
  wealth:"Do not be greedy or hasty in seeking gain; beware chances that are ill-founded or of unreal profit—keep to your part.",
  health:"Mind problems from mood, fatigue, or irregular hours; treat early and do not tough it out.",
  advice:"See the situation clearly, keep upright and pragmatic, and go slow rather than rush; be cautious and forestall trouble in matters of improper standing."
},
55: {
  detail:"Feng has fire below and thunder above, brightness and movement joined: grandeur, plenty, and shining fullness. Feng is when an enterprise and its momentum reach a peak. It reminds you: precisely in flourishing, stay all the more clear-headed—the judgment says 'the sun at noon then declines, the moon full then wanes'; fullness turning to decline is the norm. In attitude, at the peak stay alert to danger, seize the present, and act aboveboard, while guarding against the turn from full to decline and resolving hidden trouble in time. Abundance is no bad thing; the key is whether you can hold it.",
  career:"At a rising peak of your enterprise; seize the chance and push with full force, while planning ahead against the turn from full to decline.",
  love:"The bond is at a warm, happy height; cherish the present and tend it with care, not neglecting it out of complacency.",
  wealth:"Prosperous—you may advance actively, but stay alert to danger and keep a reserve, wary of fullness reversing.",
  health:"Even in high energy, do not overdraw; balance work and rest and guard against trouble in the peak.",
  advice:"Act while abundant and seize the present, while staying alert to danger and acting aboveboard—do not lose your head in success."
},
56: {
  detail:"Lü has mountain below and fire above, fire on the mountain burning without fixed place: sojourning abroad, drifting and unsettled. Lü is the circumstance of being in a strange land, roots not yet firm. It reminds you: away from home or in unfamiliar, temporary surroundings, be low-key and careful in all things, easygoing and courteous, not flaunting or making enemies. The judgment says small things can go through but great ones are hard—footing unsteady, support limited. In attitude, be gentle and yielding, discern when to advance or retreat, hold to the right, mind everything, and build good ties widely, so you find steadiness amid drifting and avoid disaster from careless words or deeds.",
  career:"Often in a phase of posting away, change, or transition; be low-key and careful and take things as they come—stand firm first, then seek development.",
  love:"Love may be marked by separation and lack of stability; treat each other gently and sincerely, and do not rush to settle big matters.",
  wealth:"Seeking wealth away and with scattered chances; operate small gains prudently, not in large sums.",
  health:"Mind travel fatigue, unfamiliar climate and water, and disrupted diet and hours; take extra care of yourself on the road.",
  advice:"Be gentle and upright and careful in word and deed; small things may be done, great ones held off—build good ties and guard against accidents."
},
57: {
  detail:"Xun is wind over wind, wind entering everywhere: compliance, penetration, and humility. Xun means to enter and to yield—accomplishing things by a soft, gradual way that reaches into people's hearts. It reminds you: you need not take things by hard force; like the wind, penetrate gently and steadily and state your case again and again, and it works better. The judgment says 'favorable to have somewhere to go, favorable to see the great person'—have a clear direction and draw on the help of the worthy. In attitude, be humble, flexible, and go with the momentum, but softness is not lack of view—hold to the right within your yielding, avoiding indecision and over-submission.",
  career:"Advance by a soft, flexible, patiently persuasive way; go with the momentum and consult the worthy—do not butt heads.",
  love:"Win the other with gentle care and patient communication and cultivate with the flow—but do not just cater endlessly and lose your own view.",
  wealth:"Seek wealth with the momentum and adapt flexibly, following the right direction and borrowing strength—do not force against the trend.",
  health:"Mind the respiratory system and pent-up emotions; stretch and unblock, and do not over-suppress or waver.",
  advice:"Be humble and go with the momentum, starting soft, with a clear direction and borrowed strength; do not be indecisive or over-submissive."
},
58: {
  detail:"Dui is lake over lake, two lakes joined and mutually moistening: joy, harmony, and exchange. Dui means delight and speech—moving others by genuine joy and accomplishing things through communication. It reminds you: relate to people with a pleasant face and frank exchange, winning their glad assent, and things go smoothly of themselves. But the judgment implies measure—joy must spring from what is right and sincere; mere flattery or empty verbal pleasure loses the point. In attitude, treat people sincerely, be optimistic and open, and value harmony, while holding to principle, building joy on the right path.",
  career:"Win cooperation by sincere communication and pleasant dealing; a harmonious team atmosphere makes things go—do not flatter with empty words.",
  love:"Harmonious and pleasant; relate mostly with true heart and joy, and frank exchange deepens feeling.",
  wealth:"Good relations bring money paths; seek wealth through good relationships and reputation, but do not be misled by sweet talk.",
  health:"A cheerful mood benefits health; mind the mouth and throat, and do not lose moderation for the pleasure of the palate and talk.",
  advice:"Be sincere and pleasant, moving people by words and building good ties widely; joy must come from the right path—do not lose measure in flattery."
},
59: {
  detail:"Huan has water below and wind above, wind moving over water and scattering what is massed: dispersal, dissolving, and unblocking. Huan is about clearing stagnation and driving off estrangement. It reminds you: when hearts are scattered, a situation is frozen, or grievances are pent up, you need to dissolve the impasse by guiding and tolerating, using the force of scattering to melt obstacles and gather hearts. The judgment 'the king approaches his temple, favorable to cross the great river' implies regathering hearts by sincerity and a shared goal, so you can cross the difficulty. In attitude, be open rather than stubborn, good at unblocking and harmonizing—turning dispersal into new cohesion.",
  career:"Suited to unblocking stagnation, dissolving conflict, and reordering a scattered situation, regathering the team around a shared goal.",
  love:"If the relationship has estrangement or distance, take the initiative to guide, talk it out, untie the knot, and draw close again.",
  wealth:"Money is better flowing than hoarded; measured dispersal and clearing of blockages can bring a turn—also guard against losing money.",
  health:"Mind stagnation of qi and blood or bottled-up emotions; guide and unblock and move about more.",
  advice:"Dissolve the impasse by unblocking and gather hearts; be open and tolerant and actively harmonize—do not stubbornly block things up."
},
60: {
  detail:"Jie has lake below and water above, water over the lake whose capacity is limited and needs restraint: measure, limits, and stopping at enough. Jie is about proper measure in all things. It reminds you: whether in spending, word and deed, or emotion, all need reasonable restraint to be orderly and lasting. The judgment says 'bitter limitation cannot be kept up'—restraint is good, but if too harsh or extreme it cannot be held; the key is the mean. In attitude, be self-disciplined and measured, live within your means, and keep proper measure—neither indulging and squandering nor being harshly self-denying—finding a moderate rhythm.",
  career:"Have a plan, keep the rules, and act within your strength, restraining resources and pace—but do not manage so tightly you lose flexibility.",
  love:"Keep measure and mutual limits in relating—intimate yet with space, avoiding the extremes of indulgence or harsh demand.",
  wealth:"Living within your means and restraining spending is key; measured finance accumulates, but you need not be excessively frugal and self-denying.",
  health:"In diet and daily life the value is measured regularity—moderate, not excessive; curb desire to nourish the body.",
  advice:"Keep measure in all things and hold the mean, disciplined but not harsh; be restrained and orderly, not indulgent or extreme."
},
61: {
  detail:"Zhong Fu has lake below and wind above, wind moving over the lake and resonating: inner sincerity and truthful connection. Fu is sincerity; Zhong Fu is sincerity at the very center. It reminds you: treating people with sincerity and standing on trust can move hearts and reach even to birds, beasts, and plants; the judgment 'even pigs and fishes—good fortune' means even the smallest sincerity brings good fortune. In attitude, be the same within and without, treat others sincerely, keep your word, and move and connect with a true heart. Sincerity is the root of success—especially where trust must be built and doubts dissolved, sincerity far outdoes technique.",
  career:"Stand on trust and keep your word; treating people sincerely wins trust and lasting cooperation—avoid hypocrisy and scheming.",
  love:"Trade true heart for true heart; frank treatment and kept promises are the base of a firm bond.",
  wealth:"Only integrity and reputation make money paths last; solid, sincere operation far outdoes speculation.",
  health:"A calm, sincere mind benefits body and spirit; keep emotions the same within and without, without suppression or pretense.",
  advice:"Stand on sincerity, be the same within and without, keep your promises, and connect with a true heart—avoid hypocrisy and breach of faith."
},
62: {
  detail:"Xiao Guo has mountain below and thunder above, thunder on the mountain whose sound exceeds the norm: 'small excess'—in small matters you may slightly exceed convention, but in great matters you must draw in. Xiao Guo is about a slight excess when correcting a bias being allowable, but in measure and suited to small, not great. It reminds you: now do small things and act with care, be humble and thrifty, and rather err a touch on the side of caution than aim too high. The judgment says 'small things may be done, not great ones; better below than above.' In attitude, be low-key and pragmatic, careful and modest, keep to your part, and act within your strength, avoiding the fault of grasping for size or bravado.",
  career:"Do things within your reach and proceed soundly; in attitude, rather over-careful than over-reaching and forceful.",
  love:"Show more small acts of yielding and thoughtfulness; cultivate low-key and pragmatic, not with big moves or force.",
  wealth:"Accumulate small gains and keep to your part, favoring cautious, small, steady sums, not bold big investments.",
  health:"Mind that small ailments not drag into big problems; watch closely and treat in time—caution is best.",
  advice:"Small rather than great, below rather than above; be humble, careful, and within your strength, not grasping for size or bravado."
},
63: {
  detail:"Ji Ji has fire below and water above, water over fire, the two aiding each other and each in place: the matter already completed, the great work done. Ji Ji is the most well-ordered hexagram, every line in its proper place. But it precisely reminds you: the moment of success is just when hidden trouble first stirs. The judgment says 'good fortune at the start, disorder at the end'—smooth at first, but if you slacken, later trouble grows. In attitude, after success stay alert and careful to the end—holding a gain is harder than winning it. Ji Ji is not the end but a new start; head off trouble early and keep maintaining, to hold what you have.",
  career:"Things have initially succeeded; never slacken—be careful to the end and alert to danger, holding gains and heading off trouble.",
  love:"The bond has reached fullness and stability; all the more tend it and head off trouble early, not slackening out of security.",
  wealth:"You have already made gains; the point now is holding them and guarding against risk—do not lose them by carelessness in good times.",
  health:"In good shape for now; just keep good habits and check regularly, preventing small troubles from piling up.",
  advice:"At the moment of success, be all the more alert—careful to the end and forestalling trouble; hold gains and guard against risk, not slack and smug."
},
64: {
  detail:"Wei Ji has water below and fire above, fire over water, the two not meeting and their places not yet right: the matter not yet finished, still in process. Wei Ji is the last hexagram, meaning affairs never truly end but cycle on, holding boundless hope and possibility. The judgment uses 'the little fox nearly across the stream, wetting its tail' as a metaphor: failure at the very last step often comes right at the end. In attitude, see the situation clearly, be prudent and steady, and hold on to the end, neither giving up nor being reckless before completion. Though not yet succeeded, so long as the direction is right, the method apt, and you persevere, the prospects are still promising.",
  career:"The matter is not finished and is still advancing; see the situation clearly, advance amid stability, and hold on—guard against a slip at the final step.",
  love:"The bond is still developing and adjusting, with promising prospects; be patient and cultivate carefully, not slackening at the crucial point.",
  wealth:"Wealth is in a turn still brewing, not yet realized; position prudently and advance steadily—never fail at the last step.",
  health:"Still in the process of recovery; persevere with the right method and it will improve—do not quit halfway or be careless at the finish.",
  advice:"Read the times, persevere prudently, and finish well; before completion neither give up nor rush—do not fail at the final step."
}
};
if (typeof module !== 'undefined' && module.exports) module.exports = YI_DETAIL_EN;
