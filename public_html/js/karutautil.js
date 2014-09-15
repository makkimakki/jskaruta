var KarutaUtil = {
  ykami1_list: {
  1: 'あきのたの',
  2: 'はるすぎて',
  3: 'あしびきの',
  4: 'たごのうらに',
  5: 'おくやまに',
  6: 'かささぎの',
  7: 'あまのはら',
  8: 'わがいおは',
  9: 'はなのいろは',
 10: 'これやこの',
 11: 'わたのはら',
 12: 'あまつかぜ',
 13: 'つくばねの',
 14: 'みちのくの',
 15: 'きみがため',
 16: 'たちわかれ',
 17: 'ちはやぶる',
 18: 'すみのえの',
 19: 'なにわがた',
 20: 'わびぬれば',
 21: 'いまこんと',
 22: 'ふくからに',
 23: 'つきみれば',
 24: 'このたびは',
 25: 'なにしおわば',
 26: 'おぐらやま',
 27: 'みかのはら',
 28: 'やまざとは',
 29: 'こころあてに',
 30: 'ありあけの',
 31: 'あさぼらけ',
 32: 'やまがわに',
 33: 'ひさかたの',
 34: 'たれをかも',
 35: 'ひとはいさ',
 36: 'なつのよは',
 37: 'しらつゆに',
 38: 'わすらるる',
 39: 'あさぢうの',
 40: 'しのぶれど',
 41: 'こいすちょう',
 42: 'ちぎりきな',
 43: 'あいみての',
 44: 'おおことの',
 45: 'あわれとも',
 46: 'ゆらのとを',
 47: 'やえむぐら',
 48: 'かぜをいたみ',
 49: 'みかきもり',
 50: 'きみがため',
 51: 'かくとだに',
 52: 'あけぬれば',
 53: 'なげきつつ',
 54: 'わすれじの',
 55: 'たきのおとは',
 56: 'あらざらむ',
 57: 'めぐりあひて',
 58: 'ありまやま',
 59: 'やすらわで',
 60: 'おおえやま',
 61: 'いにしえの',
 62: 'よをこめて',
 63: 'いまはただ',
 64: 'あさぼらけ',
 65: 'うらみわび',
 66: 'もろともに',
 67: 'はるのよの',
 68: 'こころにも',
 69: 'あらしふく',
 70: 'さびしさに',
 71: 'ゆうされば',
 72: 'おとにきく',
 73: 'たかさごの',
 74: 'うかりける',
 75: 'ちぎりおきし',
 76: 'わたのはら',
 77: 'せをはやみ',
 78: 'あわぢしま',
 79: 'あきかぜに',
 80: 'ながからん',
 81: 'ほととぎす',
 82: 'おもいわび',
 83: 'よのなかよ',
 84: 'ながらえば',
 85: 'よもすがら',
 86: 'なげけとて',
 87: 'むらさめの',
 88: 'なにわえの',
 89: 'たまのおよ',
 90: 'みせばやな',
 91: 'きりぎりす',
 92: 'わがそでは',
 93: 'よのなかは',
 94: 'みよしのの',
 95: 'おおけなく',
 96: 'はなさそう',
 97: 'こぬひとを',
 98: 'かぜそよぐ',
 99: 'ひともをし',
100: 'ももしきや'
  },

  ykami2_list: {
  1: 'かりほのいおの',
  2: 'なつきにけらし',
  3: 'やまどりのおの',
  4: 'うちいでてみれば',
  5: 'もみぢふみわけ',
  6: 'わたせるはしに',
  7: 'ふりさけみれば',
  8: 'みやこのたつみ',
  9: 'うつりにけりな',
 10: 'ゆくもかえるも',
 11: 'やそしまかけて',
 12: 'くものかよいぢ',
 13: 'みねよりおつる',
 14: 'しのぶもぢずり',
 15: 'はるののにいでて',
 16: 'いなばのやまの',
 17: 'かみよもきかず',
 18: 'きしによるなみ',
 19: 'みじかきあしの',
 20: 'いまはたおなじ',
 21: 'いいしばかりに',
 22: 'あきのくさきの',
 23: 'ちぢにものこそ',
 24: 'ぬさもとりあえず',
 25: 'おおさかやまの',
 26: 'みねのもみぢば',
 27: 'わきてながるる',
 28: 'ふゆぞさびしさ',
 29: 'おらばやおらん',
 30: 'つれなくみえし',
 31: 'ありあけのつきと',
 32: 'かぜのかけたる',
 33: 'ひかりのどけき',
 34: 'しるひとにせん',
 35: 'こころもしらず',
 36: 'まだよいながら',
 37: 'かぜのふきしく',
 38: 'みをばおもわず',
 39: 'おののしのはら',
 40: 'いろにでにけり',
 41: 'わがなはまだき',
 42: 'かたみにそでを',
 43: 'のちのこころに',
 44: 'たえてしなくば',
 45: 'いうべきひとは',
 46: 'わたるふなびと',
 47: 'しげれるやどの',
 48: 'いわうつなみの',
 49: 'えじのたくひの',
 50: 'おしからざりし',
 51: 'えやはいぶきの',
 52: 'くるるものとは',
 53: 'ひとりぬるよの',
 54: 'ゆくすえまでは',
 55: 'たえてひさしく',
 56: 'このよのほかの',
 57: 'みしやそれとも',
 58: 'いなのささはら',
 59: 'ねなましものを',
 60: 'いくののみちの',
 61: 'ならのみやこの',
 62: 'とりのそらねは',
 63: 'おもいたえなん',
 64: 'うぢのかわぎり',
 65: 'ほさぬそでだに',
 66: 'あわれとおもえ',
 67: 'ゆめばかりなる',
 68: 'あらでうきよに',
 69: 'みむろのやまの',
 70: 'やどをたちいでて',
 71: 'かどたのいなば',
 72: 'たかしのはまの',
 73: 'おのえのさくら',
 74: 'ひとをはつせの',
 75: 'させもがつゆを',
 76: 'こぎいでてみれば',
 77: 'いわにせかるる',
 78: 'かようちどりの',
 79: 'たなびくくもの',
 80: 'こころもしらず',
 81: 'なきつるかたを',
 82: 'さてもいのちは',
 83: 'みちこそなけれ',
 84: 'またこのごろや',
 85: 'ものおもうころは',
 86: 'つきやはものを',
 87: 'つゆもまだひぬ',
 88: 'あしのかりねの',
 89: 'たえなばたえね',
 90: 'おじまのあまの',
 91: 'なくやしもよの',
 92: 'しおひにみえぬ',
 93: 'つねにもがもな',
 94: 'やまのあきかぜ',
 95: 'うきよのたみに',
 96: 'あらしのにわの',
 97: 'まつほのうらの',
 98: 'ならのおがわの',
 99: 'ひともうらめし',
100: 'ふるきのきばの'
  },

  ykami3_list: {
  1: 'とまをあらみ',
  2: 'しろたえの',
  3: 'しだりおの',
  4: 'しろたえの',
  5: 'なくしかの',
  6: 'おくしもの',
  7: 'かすがなる',
  8: 'しかぞすむ',
  9: 'いたづらに',
 10: 'わかれては',
 11: 'こぎいでぬと',
 12: 'ふきとじよ',
 13: 'みなのがわ',
 14: 'たれゆえに',
 15: 'わかなつむ',
 16: 'みねにおうる',
 17: 'たつたがわ',
 18: 'よるさえや',
 19: 'ふしのまも',
 20: 'なにわなる',
 21: 'ながつきの',
 22: 'しおるれば',
 23: 'かなしけれ',
 24: 'たむけやま',
 25: 'さねかづら',
 26: 'こころあらば',
 27: 'いづみがわ',
 28: 'まさりける',
 29: 'はつしもの',
 30: 'わかれより',
 31: 'みるまでに',
 32: 'しがらみは',
 33: 'はるのひに',
 34: 'たかさごの',
 35: 'ふるさとは',
 36: 'あけぬるを',
 37: 'あきののは',
 38: 'ちかいてし',
 39: 'しのぶれど',
 40: 'わがこいは',
 41: 'たちにけり',
 42: 'しぼりつつ',
 43: 'くらぶれば',
 44: 'なかなかに',
 45: 'おもおえで',
 46: 'かぢをたえ',
 47: 'さびしきに',
 48: 'おのれのみ',
 49: 'よるはもえ',
 50: 'いのちさえ',
 51: 'さしもぐさ',
 52: 'しりながら',
 53: 'あくるまは',
 54: 'かたければ',
 55: 'なりぬれど',
 56: 'おもいでに',
 57: 'わかぬまに',
 58: 'かぜふけば',
 59: 'さよふけて',
 60: 'とおければ',
 61: 'やえざくら',
 62: 'はかるとも',
 63: 'とばかりを',
 64: 'たえだえに',
 65: 'あるものを',
 66: 'やまざくら',
 67: 'たまくらに',
 68: 'ながらへば',
 69: 'もみぢばは',
 70: 'ながむれば',
 71: 'おとづれて',
 72: 'あだなみは',
 73: 'さきにけり',
 74: 'やまおろしよ',
 75: 'いのちにて',
 76: 'ひさかたの',
 77: 'たきがわの',
 78: 'なくこえに',
 79: 'たえまより',
 80: 'くろかみの',
 81: 'ながむれば',
 82: 'あるものを',
 83: 'おもいいる',
 84: 'しのばれん',
 85: 'あけやらで',
 86: 'おもわする',
 87: 'まきのはに',
 88: 'ひとよゆえ',
 89: 'ながらえば',
 90: 'そでだにも',
 91: 'さむしろに',
 92: 'おきのいしの',
 93: 'なぎさこぐ',
 94: 'さよふけて',
 95: 'おおうかな',
 96: 'ゆきならで',
 97: 'ゆうなぎに',
 98: 'ゆうぐれは',
 99: 'あぢきなく',
100: 'しのぶにも'
  },
  yshimo1_list: {
  1: 'わがころもでは',
  2: 'ころもほすちょう',
  3: 'ながながしよを',
  4: 'ふじのたかねに',
  5: 'こえきくときぞ',
  6: 'しろきをみれば',
  7: 'みかさのやまに',
  8: 'よをうぢやまと',
  9: 'わがみよにふる',
 10: 'しるもしらぬも',
 11: 'ひとにはつげよ',
 12: 'おとめのすがた',
 13: 'こいぞつもりて',
 14: 'みだれそめにし',
 15: 'わがころもでに',
 16: 'まつとしきかば',
 17: 'からくれないに',
 18: 'ゆめのかよいぢ',
 19: 'あはでこのよを',
 20: 'みをつくしても',
 21: 'ありあけのつきを',
 22: 'むべやまかぜを',
 23: 'わがみひとつの',
 24: 'もみぢのにしき',
 25: 'ひとにしられで',
 26: 'いまひとたびの',
 27: 'いつみきとてか',
 28: 'ひとめもくさも',
 29: 'おきまどわせる',
 30: 'あかつきばかり',
 31: 'よしののさとに',
 32: 'ながれもあえぬ',
 33: 'しづこころなく',
 34: 'まつもむかしの',
 35: 'はなぞむかしの',
 36: 'くものいづこに',
 37: 'つらぬきとめぬ',
 38: 'ひとのいのちの',
 39: 'あまりてなどか',
 40: 'ものやおもうと',
 41: 'ひとしれずこそ',
 42: 'すえのまつやま',
 43: 'むかしはものを',
 44: 'ひとをもみをも',
 45: 'みのいたづらに',
 46: 'ゆくえもしらぬ',
 47: 'ひとこそみえね',
 48: 'くだけてものを',
 49: 'ひるはきえつつ',
 50: 'ながくもがなと',
 51: 'さしもしらじな',
 52: 'なおうらめしき',
 53: 'いかにひさしき',
 54: 'きょうをかぎりの',
 55: 'なこそながれて',
 56: 'いまひとたびの',
 57: 'くもがくれにし',
 58: 'いでそよひとを',
 59: 'かたぶくまでの',
 60: 'まだふみもみず',
 61: 'きょうここのえに',
 62: 'よにおおさかの',
 63: 'ひとづてならで',
 64: 'あらわれわたる',
 65: 'こいにくちなん',
 66: 'はなよりほかに',
 67: 'かいなくたたん',
 68: 'こいしかるべき',
 69: 'たつたのかわの',
 70: 'いづこもおなじ',
 71: 'あしのまろやに',
 72: 'かけじやそでの',
 73: 'とやまのかすみ',
 74: 'はげしかれとは',
 75: 'あわれことしの',
 76: 'くもいにまごう',
 77: 'われてもすえに',
 78: 'いくよねざめぬ',
 79: 'もれいづるつきの',
 80: 'みだれてけさは',
 81: 'ただありあけの',
 82: 'うきにたえぬは',
 83: 'やまのおくにも',
 84: 'うしとみしよぞ',
 85: 'ねやのひまさえ',
 86: 'かこちがおなる',
 87: 'きりたちのぼる',
 88: 'みをつくしてや',
 89: 'しのぶることの',
 90: 'ぬれにぞぬれし',
 91: 'ころもかたしき',
 92: 'ひとこそしらね',
 93: 'あまのおぶねの',
 94: 'ふるさとさむく',
 95: 'わがたつそまに',
 96: 'ふりゆくものは',
 97: 'やくやもしおの',
 98: 'みそぎぞなつの',
 99: 'よをおもうゆえに',
100: 'なおあまりある'
  },
  yshimo2_list: {
  1: 'つゆにぬれつつ',
  2: 'あまのかぐやま',
  3: 'ひとりかもねん',
  4: 'ゆきはふりつつ',
  5: 'あきはかなしき',
  6: 'よぞふけにける',
  7: 'いでしつきかも',
  8: 'ひとはいうなり',
  9: 'ながめせしまに',
 10: 'おおさかのせき',
 11: 'あまのつりぶね',
 12: 'しばしとどめん',
 13: 'ふちとなりぬる',
 14: 'われならなくに',
 15: 'ゆきはふりつつ',
 16: 'いまかえりこん',
 17: 'みづくくるとは',
 18: 'ひとめよくらん',
 19: 'すぐしてよとや',
 20: 'あわんとぞおもう',
 21: 'まちいでつるかな',
 22: 'あらしというらん',
 23: 'あきにはあらねど',
 24: 'かみのまにまに',
 25: 'くるよしもがな',
 26: 'みゆきまたなん',
 27: 'こいしかるらん',
 28: 'かれぬとおもへば',
 29: 'しらぎくのはな',
 30: 'うきものはなし',
 31: 'ふれるしらゆき',
 32: 'もみぢなりけり',
 33: 'はなのちるらん',
 34: 'ともならなくに',
 35: 'かににおいける',
 36: 'つきやどるらん',
 37: 'たまぞちりける',
 38: 'おしくもあるかな',
 39: 'ひとのこいしき',
 40: 'ひとのとうまで',
 41: 'おもいそめしか',
 42: 'なみこさじとは',
 43: 'おもわざりけり',
 44: 'うらみざらまし',
 45: 'なりぬべきかな',
 46: 'こいのみちかな',
 47: 'あきはきにけり',
 48: 'おもうころかな',
 49: 'ものをこそおもえ',
 50: 'おもいけるかな',
 51: 'もゆるおもいを',
 52: 'あさぼらけかな',
 53: 'ものとかはしる',
 54: 'いのちともがな',
 55: 'なおきこえけれ',
 56: 'あうこともがな',
 57: 'よわのつきかな',
 58: 'わすれやはする',
 59: 'つきをみしかな',
 60: 'あまのはしだて',
 61: 'にほいぬるかな',
 62: 'せきはゆるさじ',
 63: 'いうよしもがな',
 64: 'せぜのあじろぎ',
 65: 'なこそおしけれ',
 66: 'しるひともなし',
 67: 'なこそおしけれ',
 68: 'よわのつきかな',
 69: 'にしきなりけり',
 70: 'あきのゆうぐれ',
 71: 'あきかぜぞふく',
 72: 'ぬれもこそすれ',
 73: 'たたずもあらなん',
 74: 'いのらぬものを',
 75: 'あきもいぬめり',
 76: 'おきつしらなみ',
 77: 'あわんとぞおもう',
 78: 'すまのせきもり',
 79: 'かげのさやけさ',
 80: 'ものをこそおもえ',
 81: 'つきぞのこれる',
 82: 'なみだなりけり',
 83: 'しかぞなくなる',
 84: 'いまはこいしき',
 85: 'つれなかりけり',
 86: 'わがなみだかな',
 87: 'あきのゆうぐれ',
 88: 'こいわたるべき',
 89: 'よわりもぞする',
 90: 'いろはかわらず',
 91: 'ひとりかもねん',
 92: 'かわくまもなし',
 93: 'つなでかなしも',
 94: 'ころもうつなり',
 95: 'すみぞめのそで',
 96: 'わがみなりけり',
 97: 'みもこがれつつ',
 98: 'しるしなりける',
 99: 'ものおもうみは',
100: 'むかしなりけり'
  },

  torifuda_list: {
  1: 'わかころもてはつゆにぬれつつ',
  2: 'ころもほすてふあまのかくやま',
  3: 'なかなかしよをひとりかもねむ',
  4: 'ふしのたかねにゆきはふりつつ',
  5: 'こゑきくときそあきはかなしき',
  6: 'しろきをみれはよそふけにける',
  7: 'みかさのやまにいてしつきかも',
  8: 'よをうちやまとひとはいふなり',
  9: 'わかみよにふるなかめせしまに',
 10: 'しるもしらぬもあふさかのせき',
 11: 'ひとにはつけよあまのつりふね',
 12: 'をとめのすかたしはしととめむ',
 13: 'こひそつもりてふちとなりぬる',
 14: 'みたれそめにしわれならなくに',
 15: 'わかころもてにゆきはふりつつ',
 16: 'まつとしきかはいまかへりこむ',
 17: 'からくれなゐにみつくくるとは',
 18: 'ゆめのかよひちひとめよくらむ',
 19: 'あはてこのよをすくしてよとや',
 20: 'みをつくしてもあはむとそおもふ',
 21: 'ありあけのつきをまちいつるかな',
 22: 'むへやまかせをあらしといふらむ',
 23: 'わかみひとつのあきにはあらねと',
 24: 'もみちのにしきかみのまにまに',
 25: 'ひとにしられてくるよしもかな',
 26: 'いまひとたひのみゆきまたなむ',
 27: 'いつみきとてかこひしかるらむ',
 28: 'ひとめもくさもかれぬとおもへは',
 29: 'おきまとはせるしらきくのはな',
 30: 'あかつきはかりうきものはなし',
 31: 'よしののさとにふれるしらゆき',
 32: 'なかれもあへぬもみちなりけり',
 33: 'しつこころなくはなのちるらむ',
 34: 'まつもむかしのともならなくに',
 35: 'はなそむかしのかににほひける',
 36: 'くものいつこにつきやとるらむ',
 37: 'つらぬきとめぬたまそちりける',
 38: 'ひとのいのちのをしくもあるかな',
 39: 'あまりてなとかひとのこひしき',
 40: 'ものやおもふとひとのとふまて',
 41: 'ひとしれすこそおもひそめしか',
 42: 'すゑのまつやまなみこさしとは',
 43: 'むかしはものをおもはさりけり',
 44: 'ひとをもみをもうらみさらまし',
 45: 'みのいたつらになりぬへきかな',
 46: 'ゆくへもしらぬこひのみちかな',
 47: 'ひとこそみえねあきはきにけり',
 48: 'くたけてものをおもふころかな',
 49: 'ひるはきえつつものをこそおもへ',
 50: 'なかくもかなとおもひけるかな',
 51: 'さしもしらしなもゆるおもひを',
 52: 'なほうらめしきあさほらけかな',
 53: 'いかにひさしきものとかはしる',
 54: 'けふをかきりのいのちともかな',
 55: 'なこそなかれてなほきこえけれ',
 56: 'いまひとたひのあふこともがな',
 57: 'くもかくれにしよはのつきかな',
 58: 'いてそよひとをわすれやはする',
 59: 'かたふくまてのつきをみしかな',
 60: 'またふみもみすあまのはしたて',
 61: 'けふここのへににほひぬるかな',
 62: 'よにあふさかのせきはゆるさし',
 63: 'ひとつてならていふよしもかな',
 64: 'あらはれわたるせせのあしろき',
 65: 'こひにくちなむなこそをしけれ',
 66: 'はなよりほかにしるひともなし',
 67: 'かひなくたたむなこそをしけれ',
 68: 'こひしかるへきよはのつきかな',
 69: 'たつたのかはのにしきなりけり',
 70: 'いつこもおなしあきのゆふくれ',
 71: 'あしのまろやにあきかせそふく',
 72: 'かけしやそてのぬれもこそすれ',
 73: 'とやまのかすみたたすもあらなむ',
 74: 'はけしかれとはいのらぬものを',
 75: 'あはれことしのあきもいぬめり',
 76: 'くもゐにまかふおきつしらなみ',
 77: 'われてもすゑにあはむとそおもふ',
 78: 'いくよねさめぬすまのせきもり',
 79: 'もれいつるつきのかけのさやけさ',
 80: 'みたれてけさはものをこそおもへ',
 81: 'たたありあけのつきそのこれる',
 82: 'うきにたへぬはなみたなりけり',
 83: 'やまのおくにもしかそなくなる',
 84: 'うしとみしよそいまはこひしき',
 85: 'ねやのひまさへつれなかりけり',
 86: 'かこちかほなるわかなみたかな',
 87: 'きりたちのぼるあきのゆふくれ',
 88: 'みをつくしてやこひわたるへき',
 89: 'しのふることのよわりもそする',
 90: 'ぬれにそぬれしいろはかはらす',
 91: 'ころもかたしきひとりかもねむ',
 92: 'ひとこそしらねかわくまもなし',
 93: 'あまのをふねのつなてかなしも',
 94: 'ふるさとさむくころもうつなり',
 95: 'わかたつそまにすみそめのそて',
 96: 'ふりゆくものはわかみなりけり',
 97: 'やくやもしほのみもこかれつつ',
 98: 'みそきそなつのしるしなりける',
 99: 'よをおもふゆゑにものおもふみは',
100: 'なほあまりあるむかしなりけり'
  },

  torifuda1_list: {
  1: 'わかころもては',
  2: 'ころもほすてふ',
  3: 'なかなかしよを',
  4: 'ふしのたかねに',
  5: 'こゑきくときそ',
  6: 'しろきをみれは',
  7: 'みかさのやまに',
  8: 'よをうちやまと',
  9: 'わかみよにふる',
 10: 'しるもしらぬも',
 11: 'ひとにはつけよ',
 12: 'をとめのすかた',
 13: 'こひそつもりて',
 14: 'みたれそめにし',
 15: 'わかころもてに',
 16: 'まつとしきかは',
 17: 'からくれなゐに',
 18: 'ゆめのかよひち',
 19: 'あはてこのよを',
 20: 'みをつくしても',
 21: 'ありあけのつきを',
 22: 'むへやまかせを',
 23: 'わかみひとつの',
 24: 'もみちのにしき',
 25: 'ひとにしられて',
 26: 'いまひとたひの',
 27: 'いつみきとてか',
 28: 'ひとめもくさも',
 29: 'おきまとはせる',
 30: 'あかつきはかり',
 31: 'よしののさとに',
 32: 'なかれもあへぬ',
 33: 'しつこころなく',
 34: 'まつもむかしの',
 35: 'はなそむかしの',
 36: 'くものいつこに',
 37: 'つらぬきとめぬ',
 38: 'ひとのいのちの',
 39: 'あまりてなとか',
 40: 'ものやおもふと',
 41: 'ひとしれすこそ',
 42: 'すゑのまつやま',
 43: 'むかしはものを',
 44: 'ひとをもみをも',
 45: 'みのいたつらに',
 46: 'ゆくへもしらぬ',
 47: 'ひとこそみえね',
 48: 'くたけてものを',
 49: 'ひるはきえつつ',
 50: 'なかくもかなと',
 51: 'さしもしらしな',
 52: 'なほうらめしき',
 53: 'いかにひさしき',
 54: 'けふをかきりの',
 55: 'なこそなかれて',
 56: 'いまひとたひの',
 57: 'くもかくれにし',
 58: 'いてそよひとを',
 59: 'かたふくまての',
 60: 'またふみもみす',
 61: 'けふここのへに',
 62: 'よにあふさかの',
 63: 'ひとつてならて',
 64: 'あらはれわたる',
 65: 'こひにくちなむ',
 66: 'はなよりほかに',
 67: 'かひなくたたむ',
 68: 'こひしかるへき',
 69: 'たつたのかはの',
 70: 'いつこもおなし',
 71: 'あしのまろやに',
 72: 'かけしやそての',
 73: 'とやまのかすみ',
 74: 'はけしかれとは',
 75: 'あはれことしの',
 76: 'くもゐにまかふ',
 77: 'われてもすゑに',
 78: 'いくよねさめぬ',
 79: 'もれいつるつきの',
 80: 'みたれてけさは',
 81: 'たたありあけの',
 82: 'うきにたへぬは',
 83: 'やまのおくにも',
 84: 'うしとみしよそ',
 85: 'ねやのひまさへ',
 86: 'かこちかほなる',
 87: 'きりたちのぼる',
 88: 'みをつくしてや',
 89: 'しのふることの',
 90: 'ぬれにそぬれし',
 91: 'ころもかたしき',
 92: 'ひとこそしらね',
 93: 'あまのをふねの',
 94: 'ふるさとさむく',
 95: 'わかたつそまに',
 96: 'ふりゆくものは',
 97: 'やくやもしほの',
 98: 'みそきそなつの',
 99: 'よをおもふゆゑに',
100: 'なほあまりある'
  },

  torifuda2_list: {
  1: 'つゆにぬれつつ',
  2: 'あまのかくやま',
  3: 'ひとりかもねむ',
  4: 'ゆきはふりつつ',
  5: 'あきはかなしき',
  6: 'よそふけにける',
  7: 'いてしつきかも',
  8: 'ひとはいふなり',
  9: 'なかめせしまに',
 10: 'あふさかのせき',
 11: 'あまのつりふね',
 12: 'しはしととめむ',
 13: 'ふちとなりぬる',
 14: 'われならなくに',
 15: 'ゆきはふりつつ',
 16: 'いまかへりこむ',
 17: 'みつくくるとは',
 18: 'ひとめよくらむ',
 19: 'すくしてよとや',
 20: 'あはむとそおもふ',
 21: 'まちいつるかな',
 22: 'あらしといふらむ',
 23: 'あきにはあらねと',
 24: 'かみのまにまに',
 25: 'くるよしもかな',
 26: 'みゆきまたなむ',
 27: 'こひしかるらむ',
 28: 'かれぬとおもへは',
 29: 'しらきくのはな',
 30: 'うきものはなし',
 31: 'ふれるしらゆき',
 32: 'もみちなりけり',
 33: 'はなのちるらむ',
 34: 'ともならなくに',
 35: 'かににほひける',
 36: 'つきやとるらむ',
 37: 'たまそちりける',
 38: 'をしくもあるかな',
 39: 'ひとのこひしき',
 40: 'ひとのとふまて',
 41: 'おもひそめしか',
 42: 'なみこさしとは',
 43: 'おもはさりけり',
 44: 'うらみさらまし',
 45: 'なりぬへきかな',
 46: 'こひのみちかな',
 47: 'あきはきにけり',
 48: 'おもふころかな',
 49: 'ものをこそおもへ',
 50: 'おもひけるかな',
 51: 'もゆるおもひを',
 52: 'あさほらけかな',
 53: 'ものとかはしる',
 54: 'いのちともかな',
 55: 'なほきこえけれ',
 56: 'あふこともがな',
 57: 'よはのつきかな',
 58: 'わすれやはする',
 59: 'つきをみしかな',
 60: 'あまのはしたて',
 61: 'にほひぬるかな',
 62: 'せきはゆるさし',
 63: 'いふよしもかな',
 64: 'せせのあしろき',
 65: 'なこそをしけれ',
 66: 'しるひともなし',
 67: 'なこそをしけれ',
 68: 'よはのつきかな',
 69: 'にしきなりけり',
 70: 'あきのゆふくれ',
 71: 'あきかせそふく',
 72: 'ぬれもこそすれ',
 73: 'たたすもあらなむ',
 74: 'いのらぬものを',
 75: 'あきもいぬめり',
 76: 'おきつしらなみ',
 77: 'あはむとそおもふ',
 78: 'すまのせきもり',
 79: 'かけのさやけさ',
 80: 'ものをこそおもへ',
 81: 'つきそのこれる',
 82: 'なみたなりけり',
 83: 'しかそなくなる',
 84: 'いまはこひしき',
 85: 'つれなかりけり',
 86: 'わかなみたかな',
 87: 'あきのゆふくれ',
 88: 'こひわたるへき',
 89: 'よわりもそする',
 90: 'いろはかはらす',
 91: 'ひとりかもねむ',
 92: 'かわくまもなし',
 93: 'つなてかなしも',
 94: 'ころもうつなり',
 95: 'すみそめのそて',
 96: 'わかみなりけり',
 97: 'みもこかれつつ',
 98: 'しるしなりける',
 99: 'ものおもふみは',
100: 'むかしなりけり'
  },

  kkami_list: {
  1: '秋の田のかりほの庵の苫をあらみ',
  2: '春過ぎて夏来にけらし白妙の',
  3: 'あしびきの山鳥の尾のしだり尾の',
  4: '田子の浦にうちいでてみれば白妙の',
  5: '奥山にもみぢふみわけなく鹿の',
  6: 'かささぎの渡せる橋におく霜の',
  7: '天の原ふりさけみれば春日なる',
  8: 'わが庵は都のたつみしかぞすむ',
  9: '花の色はうつりにけりないたづらに',
 10: 'これやこの行くも帰るもわかれては',
 11: 'わたの原八十島かけてこぎいでぬと',
 12: '天つ風雲のかよひ路吹きとぢよ',
 13: 'つくばねの峰よりおつるみなの川',
 14: 'みちのくのしのぶもぢずり誰ゆゑに',
 15: '君がため春の野に出でて若菜つむ',
 16: '立ちわかれいなばの山の峰に生ふる',
 17: 'ちはやぶる神代もきかず竜田川',
 18: '住の江の岸による波よるさへや',
 19: '難波潟みじかき蘆のふしのまも',
 20: 'わびぬればいまはたおなじ難波なる',
 21: '今こむといひしばかりに長月の',
 22: '吹くからに秋の草木のしをるれば',
 23: '月みればちぢにものこそかなしけれ',
 24: 'このたびはぬさもとりあへず手向山',
 25: '名にし負はば逢坂山のさねかづら',
 26: '小倉山峰のもみぢ葉心あらば',
 27: 'みかの原わきて流るるいづみ川',
 28: '山里は冬ぞさびしさまさりける',
 29: '心当てに折らばや折らむ初霜の',
 30: '有明のつれなく見えし別れより',
 31: '朝ぼらけ有明の月と見るまでに',
 32: '山川に風のかけたるしがらみは',
 33: '久方の光のどけき春の日に',
 34: '誰をかもしる人にせむ高砂の',
 35: '人はいさ心も知らずふるさとは',
 36: '夏の夜はまだ宵ながらあけぬるを',
 37: '白露に風の吹きしく秋の野は',
 38: '忘らるる身をば思はずちかひてし',
 39: '浅茅生の小野の篠原しのぶれど',
 40: 'しのぶれど色に出でにけり我が恋は',
 41: '恋すてふ我が名はまだき立ちにけり',
 42: 'ちぎりきなかたみに袖をしぼりつつ',
 43: 'あひみてののちの心にくらぶれば',
 44: 'あふことのたえてしなくばなかなかに',
 45: 'あはれともいふべき人は思ほえで',
 46: '由良のとを渡る舟人かぢをたえ',
 47: '八重むぐらしげれる宿のさびしきに',
 48: '風をいたみ岩うつ波のおのれのみ',
 49: 'みかきもり衛士のたく火の夜はもえ',
 50: '君がため惜しからざりしいのちさへ',
 51: 'かくとだにえやはいぶきのさしも草',
 52: 'あけぬれば暮るるものとは知りながら',
 53: 'なげきつつひとりぬる夜のあくるまは',
 54: '忘れじのゆく末まではかたければ',
 55: '滝の音はたえて久しくなりぬれど',
 56: 'あらざらむこの世のほかの思ひ出に',
 57: 'めぐりあひて見しやそれともわかぬまに',
 58: 'ありま山ゐなの笹原風吹けば',
 59: 'やすらはで寝なましものをさ夜ふけて',
 60: '大江山いく野の道の遠ければ',
 61: 'いにしへの奈良の都の八重桜',
 62: '夜をこめて鳥のそらねははかるとも',
 63: 'いまはただ思ひ絶えなむとばかりを',
 64: '朝ぼらけ宇治の川霧絶え絶えに',
 65: 'うらみわびほさぬ袖だにあるものを',
 66: 'もろともにあはれと思へ山桜',
 67: '春の夜の夢ばかりなる手枕に',
 68: '心にもあらでうき世にながらへば',
 69: 'あらし吹くみ室の山のもみぢばは',
 70: 'さびしさに宿を立ち出でてながむれば',
 71: '夕されば門田の稲葉おとづれて',
 72: '音に聞く高師の浜のあだ波は',
 73: '高砂のをのへのさくらさきにけり',
 74: '憂かりける人を初瀬の山おろしよ',
 75: 'ちぎりおきしさせもが露をいのちにて',
 76: 'わたの原こぎいでてみれば久方の',
 77: '瀬をはやみ岩にせかるる滝川の',
 78: '淡路島かよふ千鳥の鳴く声に',
 79: '秋風にたなびく雲のたえ間より',
 80: '長からむ心もしらず黒髪の',
 81: 'ほととぎす鳴きつる方をながむれば',
 82: '思ひわびさてもいのちはあるものを',
 83: '世の中よ道こそなけれ思ひ入る',
 84: 'ながらへばまたこのごろやしのばれむ',
 85: '夜もすがら物思ふころは明けやらで',
 86: 'なげけとて月やは物を思はする',
 87: '村雨の露もまだひぬまきの葉に',
 88: '難波江の蘆のかりねのひとよゆゑ',
 89: '玉の緒よたえなばたえねながらへば',
 90: '見せばやな雄島のあまの袖だにも',
 91: 'きりぎりす鳴くや霜夜のさむしろに',
 92: 'わが袖は潮干にみえぬ沖の石の',
 93: '世の中はつねにもがもななぎさこぐ',
 94: 'み吉野の山の秋風さ夜ふけて',
 95: 'おほけなくうき世の民におほふかな',
 96: '花さそふ嵐の庭の雪ならで',
 97: 'こぬ人をまつほの浦の夕なぎに',
 98: '風そよぐならの小川の夕ぐれは',
 99: '人もをし人もうらめしあぢきなく',
100: 'ももしきやふるき軒ばのしのぶにも'
  },

  kshimo_list: {
  1: '我が衣手は露にぬれつつ',
  2: '衣ほすてふ天の香具山',
  3: 'ながながし夜をひとりかも寝む',
  4: '富士の高嶺に雪は降りつつ',
  5: '声聞く時ぞ秋はかなしき',
  6: '白きをみれば夜ぞふけにける',
  7: '三笠の山にいでし月かも',
  8: '世をうぢ山と人はいふなり',
  9: 'わが身よにふるながめせしまに',
 10: 'しるもしらぬも逢坂の関',
 11: '人にはつげよあまのつり舟',
 12: 'をとめの姿しばしとどめむ',
 13: '恋ぞつもりて淵となりぬる',
 14: 'みだれそめにし我ならなくに',
 15: 'わが衣手に雪はふりつつ',
 16: 'まつとし聞かばいまかへりこむ',
 17: 'からくれなゐに水くくるとは',
 18: '夢のかよひ路人目よくらむ',
 19: 'あはでこの世をすぐしてよとや',
 20: '身をつくしてもあはむとぞ思ふ',
 21: '有明の月をまちいでつるかな',
 22: 'むべ山風を嵐といふらむ',
 23: 'わが身一つの秋にはあらねど',
 24: 'もみぢのにしき神のまにまに',
 25: '人にしられで来るよしもがな',
 26: 'いまひとたびのみゆきまたなむ',
 27: 'いつみきとてか恋しかるらむ',
 28: '人目も草もかれぬと思へば',
 29: 'おきまどはせる白菊の花',
 30: 'あかつきばかりうきものはなし',
 31: '吉野の里に降れる白雪',
 32: 'ながれもあへぬもみぢなりけり',
 33: 'しづ心なく花の散るらむ',
 34: '松も昔の友ならなくに',
 35: '花ぞ昔の香に匂ひける',
 36: '雲のいづこに月やどるらむ',
 37: 'つらぬきとめぬ玉ぞ散りける',
 38: '人の命の惜しくもあるかな',
 39: 'あまりてなどか人の恋しき',
 40: '物や思ふと人の問ふまで',
 41: '人しれずこそ思ひそめしか',
 42: '末の松山波こさじとは',
 43: '昔は物を思はざりけり',
 44: '人をも身をも恨みざらまし',
 45: '身のいたづらになりぬべきかな',
 46: 'ゆくへも知らぬ恋の道かな',
 47: '人こそ見えね秋は来にけり',
 48: 'くだけて物を思ふころかな',
 49: '昼は消えつつ物をこそ思へ',
 50: '長くもがなと思ひけるかな',
 51: 'さしもしらじなもゆる思ひを',
 52: 'なほうらめしき朝ぼらけかな',
 53: 'いかに久しきものとかはしる',
 54: '今日をかぎりのいのちともがな',
 55: '名こそ流れてなほ聞こえけれ',
 56: 'いまひとたびのあふこともがな',
 57: '雲がくれにし夜半の月かな',
 58: 'いでそよ人を忘れやはする',
 59: 'かたぶくまでの月を見しかな',
 60: 'まだふみもみず天の橋立',
 61: 'けふ九重に匂ひぬるかな',
 62: 'よに逢坂の関はゆるさじ',
 63: '人づてならで言ふよしもがな',
 64: 'あらはれわたる瀬々の網代木',
 65: '恋にくちなむ名こそをしけれ',
 66: '花よりほかに知る人もなし',
 67: 'かひなくたたむ名こそをしけれ',
 68: '恋しかるべき夜半の月かな',
 69: '竜田の川の錦なりけり',
 70: 'いづこもおなじ秋の夕ぐれ',
 71: '蘆のまろやに秋風ぞ吹く',
 72: 'かけじや袖のぬれもこそすれ',
 73: 'とやまのかすみたたずもあらなむ',
 74: 'はげしかれとは祈らぬものを',
 75: 'あはれ今年の秋もいぬめり',
 76: '雲いにまがふ沖つ白波',
 77: 'われても末にあはむとぞ思ふ',
 78: '幾夜ねざめぬ須磨の関守',
 79: 'もれいづる月の影のさやけさ',
 80: 'みだれてけさは物をこそ思へ',
 81: 'ただありあけの月ぞ残れる',
 82: '憂きにたへぬは涙なりけり',
 83: '山の奥にも鹿ぞ鳴くなる',
 84: '憂しと見し世ぞ今は恋しき',
 85: '閨のひまさへつれなかりけり',
 86: 'かこち顔なるわが涙かな',
 87: '霧たちのぼる秋の夕ぐれ',
 88: 'みをつくしてや恋ひわたるべき',
 89: '忍ぶることの弱りもぞする',
 90: 'ぬれにぞぬれし色はかはらず',
 91: '衣かたしきひとりかも寝む',
 92: '人こそしらねかわくまもなし',
 93: 'あまの小舟の綱手かなしも',
 94: 'ふるさと寒く衣うつなり',
 95: 'わがたつ杣に墨染の袖',
 96: 'ふりゆくものはわが身なりけり',
 97: '焼くやもしほの身もこがれつつ',
 98: 'みそぎぞ夏のしるしなりける',
 99: '世を思ふゆゑに物思ふ身は',
100: 'なほあまりある昔なりけり'
  },

  author_list: {
  1: '天智天皇',
  2: '持統天皇',
  3: '柿本人麻呂',
  4: '山部赤人',
  5: '猿丸太夫',
  6: '中納言家持',
  7: '阿倍仲麻呂',
  8: '喜撰法師',
  9: '小野小町',
 10: '蝉丸',
 11: '参議篁',
 12: '僧正遍昭',
 13: '陽成院',
 14: '河原左大臣',
 15: '光孝天皇',
 16: '中納言行平',
 17: '在原業平朝臣',
 18: '藤原敏行朝臣',
 19: '伊勢',
 20: '元良親王',
 21: '素性法師',
 22: '文屋康秀',
 23: '大江千里',
 24: '菅家',
 25: '三条右大臣',
 26: '貞信公',
 27: '中納言兼輔',
 28: '源宗行朝臣',
 29: '凡河内躬恒',
 30: '壬生忠岑',
 31: '坂上是則',
 32: '春道列樹',
 33: '紀友則',
 34: '藤原興風',
 35: '紀貫之',
 36: '清原深養父',
 37: '文屋朝康',
 38: '右近',
 39: '参議等',
 40: '平兼盛',
 41: '壬生忠見',
 42: '清原元輔',
 43: '権中納言敦忠',
 44: '中納言朝忠',
 45: '謙徳公',
 46: '曽禰好忠',
 47: '恵慶法師',
 48: '源重之',
 49: '大中臣能宣朝臣',
 50: '藤原義孝',
 51: '藤原実方朝臣',
 52: '藤原道信朝臣',
 53: '右大将道綱母',
 54: '儀同三司母',
 55: '大納言公任',
 56: '和泉式部',
 57: '紫式部',
 58: '大弐三位',
 59: '赤染衛門',
 60: '小式部内侍',
 61: '伊勢大輔',
 62: '清少納言',
 63: '左京大夫道雅',
 64: '権中納言定頼',
 65: '相模',
 66: '前大僧正行尊',
 67: '周防内侍',
 68: '三条院',
 69: '能因法師',
 70: '良選法師',
 71: '大納言経信',
 72: '祐子内親王家紀伊',
 73: '前権中納言匡房',
 74: '源俊頼朝臣',
 75: '藤原基俊',
 76: '法性寺入道前関白太政大臣',
 77: '崇徳院',
 78: '源兼昌',
 79: '左京大夫顕輔',
 80: '待賢門院堀河',
 81: '後徳大寺左大臣',
 82: '道因法師',
 83: '皇太后宮大夫俊成',
 84: '藤原清輔朝臣',
 85: '俊恵法師',
 86: '西行法師',
 87: '寂蓮法師',
 88: '皇嘉門院別当',
 89: '式子内親王',
 90: '殷富門院大輔',
 91: '後京極摂政前太政大臣',
 92: '二条院讃岐',
 93: '鎌倉右大臣',
 94: '参議雅経',
 95: '前大僧正慈円',
 96: '入道前太政大臣',
 97: '権中納言定家',
 98: '従二位家隆',
 99: '後鳥羽院',
100: '順徳院'
  },
  yauthor_list: {
  1: 'てんじてんのう',
  2: 'じとうてんのう',
  3: 'かきのもとのひとまろ',
  4: 'やまべのあかひと',
  5: 'さるまるだゆう',
  6: 'ちゅうなごんやかもち',
  7: 'あべのなかまろ',
  8: 'きせんほうし',
  9: 'おののこまち',
 10: 'せみまる',
 11: 'さんぎたかむら',
 12: 'そうじょうへんじょう',
 13: 'ようぜいいん',
 14: 'かわらのさだいじん',
 15: 'こうこうてんのう',
 16: 'ちゅうなごんゆきひら',
 17: 'ありわらのなりひらあそん',
 18: 'ふじわらのとしゆきあそん',
 19: 'いせ',
 20: 'もとよししんのう',
 21: 'そせいほうし',
 22: 'ふんやのやすひで',
 23: 'おおえのちさと',
 24: 'かんけ',
 25: 'さんじょうのうだいじん',
 26: 'ていしんこう',
 27: 'ちゅうなごんかねすけ',
 28: 'みなもとのむねゆきあそん',
 29: 'おおしこうちのみつね',
 30: 'みぶのただみね',
 31: 'さかのうえのこれのり',
 32: 'はるみちのつらき',
 33: 'きのとものり',
 34: 'ふじわらのおきかぜ',
 35: 'きのつらゆき',
 36: 'きよはらのふかやぶ',
 37: 'ふんやのあさやす',
 38: 'うこん',
 39: 'さんぎひとし',
 40: 'たいらのかねもり',
 41: 'みぶのただみ',
 42: 'きよはらのもとすけ',
 43: 'ごんちゅうなごんあつただ',
 44: 'ちゅうなごんあさただ',
 45: 'けんとくこう',
 46: 'そねのよしただ',
 47: 'えぎょうほうし',
 48: 'みなもとのしげゆき',
 49: 'おおなかとみのよしのぶあそん',
 50: 'ふじわらのよしたか',
 51: 'ふじわらのさねかたあそん',
 52: 'ふじわらのみちのぶあそん',
 53: 'うだいしょうみちつなのはは',
 54: 'ぎどうさんしのはは',
 55: 'だいなごんきんとう',
 56: 'いずみしきぶ',
 57: 'むらさきしきぶ',
 58: 'だいにのさんみ',
 59: 'あかぞめえもん',
 60: 'こしきぶのないし',
 61: 'いせのたいふ',
 62: 'せいしょうなごん',
 63: 'さきょうのだいぶみちまさ',
 64: 'ごんちゅうなごんさだより',
 65: 'さがみ',
 66: 'さきのだいそうじょうぎょうそん',
 67: 'すおうのないし',
 68: 'さんじょういん',
 69: 'のういんほうし',
 70: 'りょうぜんほうし',
 71: 'だいなごんつねのぶ',
 72: 'ゆうしないしんのうけのきい',
 73: 'さきのごんちゅうなごんまさふさ',
 74: 'みなもとのとしよりあそん',
 75: 'ふじわらのもととし',
 76: 'ほつしょうじにゅうどうさきのかんぱくだいじょうだいじん',
 77: 'すとくいん',
 78: 'みなもとのかねまさ',
 79: 'さきょうのだいぶあきすけ',
 80: 'たいけんもんいんほりかわ',
 81: 'ごとくだいじさだいじん',
 82: 'どういんほうし',
 83: 'こうたいごうぐうのだいぶしゅんぜい',
 84: 'ふじわらのきよすけあそん',
 85: 'しゅんえほうし',
 86: 'さいぎょうほうし',
 87: 'じゃくれんほうし',
 88: 'こうかもんいんのべつとう',
 89: 'しきしないしんのう',
 90: 'いんぶもんいんのたいふ',
 91: 'ごきょうごくせっしょうさきのだいじょうだいじん',
 92: 'にじょういんのさぬき',
 93: 'かまくらのうだいじん',
 94: 'さんぎまさつね',
 95: 'さきのだいそうじょうじえん',
 96: 'にゅうどうさきのだいじょうだいじん',
 97: 'ごんちゅうなごんていか',
 98: 'じゅうにいいえたか',
 99: 'ごとばいん',
100: 'じゅんとくいん',
  },

  kimariji_list: {
  1: "あきの",
  2: "はるす",
  3: "あし",
  4: "たご",
  5: "おく",
  6: "かさ",
  7: "あまの",
  8: "わがい",
  9: "はなの",
 10: "これ",
 11: "わたのはらや",
 12: "あまつ",
 13: "つく",
 14: "みち",
 15: "きみがためは",
 16: "たち",
 17: "ちは",
 18: "す",
 19: "なにわが",
 20: "わび",
 21: "いまこ",
 22: "ふ",
 23: "つき",
 24: "この",
 25: "なにし",
 26: "おぐ",
 27: "みかの",
 28: "やまざ",
 29: "こころあ",
 30: "ありあ",
 31: "あさぼらけあ",
 32: "やまが",
 33: "ひさ",
 34: "たれ",
 35: "ひとは",
 36: "なつ",
 37: "しら",
 38: "わすら",
 39: "あさじ",
 40: "しの",
 41: "こい",
 42: "ちぎりき",
 43: "あい",
 44: "おおこ",
 45: "あわれ",
 46: "ゆら",
 47: "やえ",
 48: "かぜを",
 49: "みかき",
 50: "きみがためお",
 51: "かく",
 52: "あけ",
 53: "なげき",
 54: "わすれ",
 55: "たき",
 56: "あらざ",
 57: "め",
 58: "ありま",
 59: "やす",
 60: "おおえ",
 61: "いに",
 62: "よを",
 63: "いまは",
 64: "あさぼらけう",
 65: "うら",
 66: "もろ",
 67: "はるの",
 68: "こころに",
 69: "あらし",
 70: "さ",
 71: "ゆう",
 72: "おと",
 73: "たか",
 74: "うか",
 75: "ちぎりお",
 76: "わたのはらこ",
 77: "せ",
 78: "あわじ",
 79: "あきか",
 80: "ながか",
 81: "ほ",
 82: "おも",
 83: "よのなかよ",
 84: "ながら",
 85: "よも",
 86: "なげけ",
 87: "む",
 88: "なにわえ",
 89: "たま",
 90: "みせ",
 91: "きり",
 92: "わがそ",
 93: "よのなかは",
 94: "みよ",
 95: "おおけ",
 96: "はなさ",
 97: "こぬ",
 98: "かぜそ",
 99: "ひとも ",
100: "もも"
  },
  kuta_no_list: {
  1: "第一番",
  2: "第二番",
  3: "第三番",
  4: "第四番",
  5: "第五番",
  6: "第六番",
  7: "第七番",
  8: "第八番",
  9: "第九番",
 10: "第十番",
 11: "第十一番",
 12: "第十二番",
 13: "第十三番",
 14: "第十四番",
 15: "第十五番",
 16: "第十六番",
 17: "第十七番",
 18: "第十八番",
 19: "第十九番",
 20: "第二十番",
 21: "第二十一番",
 22: "第二十二番",
 23: "第二十三番",
 24: "第二十四番",
 25: "第二十五番",
 26: "第二十六番",
 27: "第二十七番",
 28: "第二十八番",
 29: "第二十九番",
 30: "第三十番",
 31: "第三十一番",
 32: "第三十二番",
 33: "第三十三番",
 34: "第三十四番",
 35: "第三十五番",
 36: "第三十六番",
 37: "第三十七番",
 38: "第三十八番",
 39: "第三十九番",
 40: "第四十番",
 41: "第四十一番",
 42: "第四十二番",
 43: "第四十三番",
 44: "第四十四番",
 45: "第四十五番",
 46: "第四十六番",
 47: "第四十七番",
 48: "第四十八番",
 49: "第四十九番",
 50: "第五十番",
 51: "第五十一番",
 52: "第五十二番",
 53: "第五十三番",
 54: "第五十四番",
 55: "第五十五番",
 56: "第五十六番",
 57: "第五十七番",
 58: "第五十八番",
 59: "第五十九番",
 60: "第六十番",
 61: "第六十一番",
 62: "第六十二番",
 63: "第六十三番",
 64: "第六十四番",
 65: "第六十五番",
 66: "第六十六番",
 67: "第六十七番",
 68: "第六十八番",
 69: "第六十九番",
 70: "第七十番",
 71: "第七十一番",
 72: "第七十二番",
 73: "第七十三番",
 74: "第七十四番",
 75: "第七十五番",
 76: "第七十六番",
 77: "第七十七番",
 78: "第七十八番",
 79: "第七十九番",
 80: "第八十番",
 81: "第八十一番",
 82: "第八十二番",
 83: "第八十三番",
 84: "第八十四番",
 85: "第八十五番",
 86: "第八十六番",
 87: "第八十七番",
 88: "第八十八番",
 89: "第八十九番",
 90: "第九十番",
 91: "第九十一番",
 92: "第九十二番",
 93: "第九十三番",
 94: "第九十四番",
 95: "第九十五番",
 96: "第九十六番",
 97: "第九十七番",
 98: "第九十八番",
 99: "第九十九番",
100: "第百番"
  },
  aiueo_list: {
    a: [43, 79, 1, 52, 39, 31, 64, 3, 12, 7, 56, 69, 30, 58, 78, 45, 61, 21, 63, 74, 65, 60, 95, 44, 5, 26, 72, 82],
    k: [51, 6, 98, 48, 50, 15, 91, 41, 29, 68, 97, 24, 10],
    s: [70, 40, 37, 18, 77],
    t: [73, 55, 4, 16, 89, 34, 75, 42, 17, 23, 13],
    n: [80, 84, 53, 86, 36, 25, 88, 19],
    h: [96, 9, 2, 67, 33, 35, 99, 22, 81],
    m: [49, 27, 90, 14, 94, 87, 57, 100, 66],
    y: [47, 59, 32, 28, 71, 46, 93, 83, 85, 62],
    w: [8, 92, 38, 54, 76, 11, 20]
  },
  getYomi: function(uta_no) {
    if (uta_no < 1 || uta_no > 100) return false;

    var ret = {};
    ret.uta1 = this.ykami1_list[uta_no];
    ret.uta2 = this.ykami2_list[uta_no];
    ret.uta3 = this.ykami3_list[uta_no];
    ret.uta4 = this.yshimo1_list[uta_no];
    ret.uta5 = this.yshimo2_list[uta_no];
  
    return ret;
  },
  getKanjiUta: function(uta_no) {
    if (uta_no < 1 || uta_no > 100) return false;

    var ret = {};
    ret.kami  = this.kkami_list[uta_no]; 
    ret.shimo = this.kshimo_list[uta_no];

    return ret;
  },
  getAuthor: function(uta_no) {
    if (uta_no < 1 || uta_no > 100) return false;

    var ret = {};
    ret.kanji = this.author_list[uta_no];
    ret.yomi = this.yauthor_list[uta_no];

    return ret;
  },
  getKimarijiList: function() {
    return this.kimariji_list;
  },
  getKimariji: function(uta_no) {
    return this.kimariji_list[uta_no];
  },
  getAiueoList: function() {
    return this.aiueo_list;
  },
  getTorifudaHtml: function(uta_no) {
    if (uta_no < 1 || uta_no > 100) return false;

    var str = this.torifuda_list[uta_no];
    var tmp = new Array(5);

    if (str.length < 15) {
      str += '　';
    }

    for (var i = 0; i < 5; i++) {
      tmp[i] = str.substr(10 + i, 1) +' '+ str.substr(5 + i, 1) +' '+ str.substr(i, 1);
    }

    return '<p>'+ tmp[0] +'<br />'+ tmp[1] +'<br />'+ tmp[2] +'<br />'+ tmp[3] +'<br />'+ tmp[4]+'</p>';
  },
  //歌番号、決まり字、取り札下の句1,2、漢字上の句、漢字下の句、漢字作者、作者読みのオブジェクトを返す
  getDataForKimarijiDetail: function(uta_no) {
    var ret = {};
    ret.uta_no    = uta_no;
    ret.kuta_no   = this.kuta_no_list[uta_no];
    ret.kimariji  = this.getKimariji(uta_no);
    ret.torifuda1 = this.torifuda1_list[uta_no];
    ret.torifuda2 = this.torifuda2_list[uta_no];
    ret.kkami     = this.kkami_list[uta_no];
    ret.kshimo    = this.kshimo_list[uta_no];
    ret.author    = this.author_list[uta_no];
    ret.yauthor   = this.yauthor_list[uta_no];
    return ret;
  }
};


