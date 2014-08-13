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
  }

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
  3: 'ひとりかもねむ',
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
 80: 'みたれてけさはものをこそおも',
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
};
