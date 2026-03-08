const worksData = [
  {
    id: 'vr_ActthefakeKawaii',
    title: 'Act the fake "Kawaii"',
    category: 'VR / VR performance',
    image: 'img/ActthefakeKawaii.png',
    date: '2026.01',
    tools: 'Unity, Max/MSP, Blender, Python',
    video: 'https://www.youtube.com/embed/06tMIwSvEJs?si=PR_Noj2oQYQh8ROE',
    concept: '本作品は、2 台の VR ヘッドセットとリアルタイムの映像投影を用いて「Kawaii」という概念を批評的に再構築するパフォーマンスである。現代の「Kawaii」はアルゴリズムや演出によって緻密に計算された「結果」であり、実体を持たない虚像に過ぎない。一人の VR プレイヤーは Kawaii 世界の守護者として『Cutie pop in the simulation』へ没入するが、現実空間に残されたその身体は投影映像によって文脈を書き換えられ、本人の意図を離れて映像や音響と結びつき洗練されたパフォーマンスを成す「Kawaii 対象」として一方的に消費されていく。では、同じ空間に立つもう一人のプレイヤーには何が見えているのだろうか。両者の認 識のズレと鑑 賞者さえもシミュレーションの一部として取り込む入れ子構造により、見る者と見られる者の境界を無効化し、現代の「Kawaii」消費構造を批評的に提示する。',
    link: 'work_detail.html?id=vr_ActthefakeKawaii'
  },
  {
    id: 'movie_kr',
    title: '狂っていたい/菅谷諭杏 MV',
    category: 'Movie / MV',
    image: 'img/kr.jpeg',
    date: '2025.05',
    tools: 'Blender, Adobe After Effects, Final Cut Pro, Python',
    video: 'https://www.youtube.com/embed/YvZ1kfPnQ2E?si=PR_Noj2oQYQh8ROE',
    concept: '菅谷諭杏さんが2023年7月にリリースした「狂っていたい」のMVを制作した。<br><br>原曲の雰囲気をもとに、狂気的でかつ爽快な世界観を意識して制作を行なった。構成から最終的な編集まで、映像に関しては全てを担当している。<br><br>blenderで基本的なビジュアルを作成し、一部AfterEffectsのモーショングラフィクスやPythonの映像エフェクトを使用した。',
    link: 'work_detail.html?id=movie_kr'
  },
  {
    id: 'vr_simirage',
    title: 'SIMIRAGE',
    category: 'VR / VR installation',
    image: 'img/SIMIRAGE.png',
    date: '2025.07',
    tools: 'Unity, Max/MSP',
    video: 'https://www.youtube.com/embed/CQggg0APZGg?si=afJA0BMAe2Qc21E6',
    concept: '4年前期ゼミ試験での提出作品として、恋愛ゲームをテーマにVR体験型作品を制作した。<br><br>恋愛ゲーム限らず、近年のゲーム体験は以下の3つの視点に分解できると考える。<br>1：ゲーム中のキャラクター<br>2：ゲームをプレイする人間<br>3：1と2を配信した実況を俯瞰する人間<br><br>本作はこの構造全体をパフォーマンスとして捉える。VR内でプレイヤーが真剣に恋愛をしている動作は、VR外では文脈を失い、鑑賞者にはただの滑稽な動作として映る。本作で行うのは、その滑稽さに対して同期的な映像や音表現を用いて文脈を与え、パフォーマンスと昇華させていく試みである。',
    link: 'work_detail.html?id=vr_simirage'
  },
  {
    id: 'app_ontouch',
    title: '音たっちくん',
    category: 'Application / Web Application',
    image: 'img/Ontouch.png',
    date: '2024.02',
    tools: 'JavaScript(React)',
    externalLink: 'https://st.kcm-sd.ac.jp/public/ontouch/',
    externalImage: '../img/Ontouch.png',
    concept: '2023年夏に大学にて行われたワークショップにて高校生に音楽創作を楽しんでもらうことを目標にチームでの制作を行った。その後、2024年2月に愛知県立芸術大学にて行われた「インターカレッジソニックアーツフェスティバル」と「Sonic Interaction 2024 Vol.1」にて展示を行い、その展示に向けたアップデートも行った。<br><br>Tensorflow.jsにてカメラの映像から手の座標を取得、そこから人差し指の座標のみを使用し円を追従させ、円とパネルの座標が合った場合のみに音が鳴るようにしている。アップデート時にはFireBaseを使用し、Google認証とデータベース上にプリセットを保存してログイン時に読み出せるようにしていった。<br><br>チームでの開発を行い、初期はUI/UXを担当。チームメンバーが卒業してからは、システムのアップデートも担当している。',
    link: 'work_detail.html?id=app_ontouch'
  },
  {
    id: 'design_si',
    title: 'SonicInteraction 2025 Spring チラシ&パンフレットデザイン',
    category: 'Design',
    image: 'img/siNoTheme-1.png',
    date: '2025.03',
    tools: 'Adobe Illustrator, Adobe Photoshop',
    concept: '学科有志で行っているコンサート「SonicInteraction」のチラシ&パンフレットデザインを担当した。過去自分が制作した映像作品の断片を素材として利用し、コラージュ的に合成することでバックのビジュアルを制作した。',
    images: ['../img/siNoTheme-1.png', '../img/siNoTheme-2.png'],
    link: 'work_detail.html?id=design_si'
  },
  {
    id: 'movie_geru',
    title: 'ゲルマニウム監視官',
    category: 'Movie / audiovisual',
    image: 'img/Geru.png',
    date: '2023.05',
    tools: 'Blender, Adobe After Effects, Final Cut Pro, Unity, Logic Pro, Max/MSP',
    video: 'https://www.youtube.com/embed/QApFCW-53wA?si=ro-PUl-LYZzkob9a',
    concept: '友人による演奏会企画「FLUERE RESONATE」での上映のために、「現実と交差する連続的なカオス」をコンセプトに制作を行った。<br><br>blenderにて使うことのできる、実写映像と平面データを合成できる技術を多く使用して制作を行った。街へ出て、普通の風景にどう違和感があると面白いかを考えながら撮影を行い1つ1つに素材を合成した。',
    link: 'work_detail.html?id=movie_geru'
  },
  {
    id: 'vr_innerpapet',
    title: 'インナーパペットin the room',
    category: 'VR / VR performance',
    image: 'img/InnerPuppet.png',
    date: '2024.07',
    tools: 'Unity, Ableton live, Max/MSP',
    video: 'https://www.youtube.com/embed/d3Kjj6UgBag?si=LuELvt-wQHnt6Md3',
    concept: '3年前期ゼミ試験での提出作品として、VR体験者を外から見た滑稽さをテーマに制作を行った。<br><br>Quest3のMR機能を用いてスクリーンを元にしたヘッドセットやコントローラーの相対座標を取得、それをOSC通信を用いてPCへ送信。その座標を再マッピングし、映像や音声をコントロールしている。UnityはVR内のプロジェクトとプロジェクターでスクリーンに投影する映像のプロジェクトで2つ制作した。音に関してはM4Lを搭載したAbletonLiveのセッションビューで行い、トリガーや音量、Pan、グラニュラーエフェクトのパラメータなどをOSC通信で受け取った座標情報を元に変化させている。',
    link: 'work_detail.html?id=vr_innerpapet'
  },
  {
    id: 'movie_reality',
    title: 'リアリティ迷子感',
    category: 'Movie / audiovisual',
    image: 'img/RealityMaigokan.png',
    date: '2024.09',
    tools: 'Blender, Adobe After Effects, Final Cut Pro, Unity, Ableton live, Max/MSP',
    video: 'https://www.youtube.com/embed/ZrAxcUaSk8U?si=71J_Ue2gM61RZ_-8',
    concept: 'この作品は3DCGを用いた映像作品である。VR の仮想空間上の視覚で脳を騙し、聴覚や運動パ フォーマンスに影響を及ぼすという事例を着想 にした。自己身体が現実と非現実の間で変容し ていく中でともに変化する感覚や感情、また同じ 音であっても変容する自己をどう認識するかに よって変化する聴取体験を表現した。<br><br>実写で道を歩いている動画の撮影から始め、それをVFXを用いて3DCGと合成したり、実写に基づいた街のモデルを制作したりと実写と3DCGを行き来するような制作を行った。音に関しては、様々な素材にグラニュラーエフェクトをかけ身体の変容の効果がより良く伝わるように心がけた。',
    link: 'work_detail.html?id=movie_reality'
  },
  {
    id: 'app_spacedrifting',
    title: 'SpaceDrifting',
    category: 'Application / Web Application',
    image: 'img/SpaceDrifting.png',
    date: '2023.12',
    tools: 'JavaScript, Unity',
    externalLink: 'https://st.kcm-sd.ac.jp/public/SpaceDrifting/',
    externalImage: '../img/SpaceDrifting.png',
    concept: '2年後期プログラミング試験の提出作品として制作した。当時MetaQuest3を購入し、始めてVR空間を体験したことで「この没入空間をWebアプリに落とし込んで、手軽な環境で体験できるようにしたい」と考え、手軽に体験できる没入体験を目的に制作を行った。<br><br>UnityのWebGL書き出しとWeb上のJavaScriptを連携して実装を行った。',
    link: 'work_detail.html?id=app_spacedrifting'
  },
  {
    id: 'movie_subliminal',
    title: 'サブリミナル共破綻',
    category: 'Movie / audiovisual',
    image: 'img/Sub2.png',
    date: '2024.02',
    tools: 'Blender, Adobe After Effects, Final Cut Pro, Unity, Logic Pro, Max/MSP',
    video: 'https://www.youtube.com/embed/bgq1MbuYQzs?si=KeGrjio65R7mc2FG',
    concept: '大学の学科のコンサート「Sonic Interaction 2023 Vol1」での上映を目指して、「とにかくカオス、それでかつ1つの映像作品に落とし込まれている」をコンセプトに制作を行った。<br><br>映像に関しては、blenderにて制作した3DCGを使用した断片的な映像をFinalCutProに入れて編集するという流れで、音楽に関してはLogicProXで制作した音源をCubaseにてミックス、マスタリングをする流れで制作した。そして1部、映像も音もUnityでできているセクションがあり、そこではオーケストラを模した複数のオブジェクトそれぞれにスピーカーを割り当てその周りをリスナーが歩くことで立体的な音表現を行った。<br>カオスでかつ1つの映像作品に落とし込むため、1つ1つの世界観はカオスであってもその繋ぎ目はなめらかになるよう意識をした。',
    link: 'work_detail.html?id=movie_subliminal'
  },
  {
    id: 'vr_sinsideout',
    title: '(s)inside out',
    category: 'VR / VR installation',
    image: 'img/SinsideOut.png',
    date: '2025.02',
    tools: 'Unity, Blender, Max/MSP',
    video: 'https://www.youtube.com/embed/oR46PuyJ8u0?si=mQFeIDEiDCbzfMHY',
    concept: '3年後期ゼミ試験での提出作品として、VR体験者を外から見た滑稽さをテーマに制作を行った。<br><br>前作「インナーパペットin the room」での、Quest3のMR機能を用いて手や頭の位置をスクリーンへの投影映像と同期するシステムを使用し、体験型インスタレーション作品に落とし込んだ。VR内では全体をUnityで制作し、音関係はオーディオミドルウェアのWwiseを使用し、より詳細な音のプログラムを行った。<br>VR外では映像をUnity、音はMax/MSPを使用し、それぞれが手や足の座標をもとに描画や音の生成を行っている。',
    link: 'work_detail.html?id=vr_sinsideout'
  }
];
