const systemRequirements = [
    {
        os: "Windows XP / Vista / 7 (Только 64-разрядные) и выше",
        cpu: "Intel / AMD Dual Core 2.4 GHz или лучше",
        ram: "4 GB или больше",
        videoCard: "512 MB или лучше",
        hdd: "30 GB",
    },
    {
        os: "Windows 10",
        cpu: "Intel® Core™ i5-3570 | AMD FX-6350 или лучше",
        ram: "8 ГБ или больше",
        videoCard: "NVIDIA® GeForce® GTX 760 / NVIDIA® GeForce® GTX 1050 Ti / AMD Radeon 7970 / Radeon R9 280X или лучше",
        hdd: "50 GB",
    },
    {
        os: "Windows 7 (x64) и выше",
        cpu: "Intel Core i3-6300 3,8 ГГц или AMD FX-8150 3,6 ГГц или лучше",
        ram: "6 ГБ или больше",
        videoCard: "Nvidia GeForce GTX 750 Ti или AMD Radeon HD 7850 с 2 ГБ памяти или лучше",
        hdd: "30 GB",
    },
    {
        os: "Adroid",
        cpu: "",
        ram: "6 ГБ или больше",
        videoCard: "",
        hdd: "1,5 GB",
    },
    {
        os: "Windows XP и выше",
        cpu: "Pentium III или AMD Athlon 700 MHz или лучше",
        ram: "1 ГБ или больше",
        videoCard: "идеокарта с 32 MB памяти на шине AGP с чипсетом GeForce 2, ATI Radeon 7500, совместимыми с DirectX 9.0 памяти или лучше",
        hdd: "2 GB",
    },
    {
        os: "Windows XP и выше",
        cpu: "Pentium III или AMD Athlon 700 MHz или лучше",
        ram: "1 ГБ или больше",
        videoCard: "идеокарта с 32 MB памяти на шине AGP с чипсетом GeForce 2, ATI Radeon 7500, совместимыми с DirectX 9.0 памяти или лучше",
        hdd: "2 GB",
    },
];

const catalogProducts = [
    {
        id: "id0",
        quantity: 1,
        name: "Need for Speed: Rivals",
        image: "./images/img_1.jpg",
        price: 200,
        sale: "-45%",
        timeSale: "8/17/2020 00:00:00 PM",
        imageSlider: ["./images/sliderProducts/NeedForSpeedRivals/img0.jpeg",
            "./images/sliderProducts/NeedForSpeedRivals/img1.jpg",
            "./images/sliderProducts/NeedForSpeedRivals/img2.jpg",
            "./images/sliderProducts/NeedForSpeedRivals/img3.jpg",
            "./images/sliderProducts/NeedForSpeedRivals/img4.jpg",
            "./images/sliderProducts/NeedForSpeedRivals/img5.jpg",],
        description: "Добро пожаловать на залитые солнцем улицы Майами Палме! Здесь асфальт плавится не только от знойной жары, но и от покрышек отчаянных гонщиков, которые практикуются днём и ночью! Купить Need for Speed: Heat – это отличный способ присоединиться к ним! Днём они собирают толпы зевак у заграждений, состязаясь в официальных дисциплинах, до которых полиции нет дела, но ночью у полиции прибавляется работёнки, когда гонщики решаются развлечься в уличных гонках, где за ними не могут наблюдать спонсоры. Станьте королём обоих гоночных миров!",
        platformOS: "Windows",
        genre: "Гонки",
        publisher: "Electronic Arts",
        releaseDate: "19 ноября 2013",
        systemRequirements: systemRequirements[0],
    },
    {
        id: "id1",
        quantity: 1,
        name: "Need for Speed: Heat",
        image: "./images/img_2.jpg",
        price: 100,
        sale: "-50%",
        timeSale: "8/20/2020 00:00:00 AM",
        imageSlider: ["./images/sliderProducts/NeedForSpeedHeat/img0.jpg",
            "./images/sliderProducts/NeedForSpeedHeat/img1.png",
            "./images/sliderProducts/NeedForSpeedHeat/img2.jpg",
            "./images/sliderProducts/NeedForSpeedHeat/img3.jpg",
            "./images/sliderProducts/NeedForSpeedHeat/img4.jpg",
            "./images/sliderProducts/NeedForSpeedHeat/img5.jpg",],
        description: "Need for Speed: Heat - это новая часть гоночной серии Need for Speed, в которой игроки отправляются в срисованный с Майями город, чтобы попытать счастья в безумных уличных гонках, как дневных, так и ночных. Игроков ждут несколько разнообразных режимов, гонки с простыми гонщиками и погони с полицейскими, огромное количество автомобилей и широчайшие возможности для их кастомизации.",
        platformOS: "Windows",
        genre: "Гонки",
        publisher: "Electronic Arts",
        releaseDate: "8 ноября 2019",
        systemRequirements: systemRequirements[1],
    },
    {
        id: "id2",
        quantity: 1,
        name: "Need for Speed: PayBack",
        image: "./images/img_3.jpeg",
        price: 150,
        sale: "",
        timeSale: "",
        imageSlider: ["./images/sliderProducts/NeedForSpeedPayBack/img0.jpg",
            "./images/sliderProducts/NeedForSpeedPayBack/img1.jpg",
            "./images/sliderProducts/NeedForSpeedPayBack/img2.jpg",
            "./images/sliderProducts/NeedForSpeedPayBack/img3.jpg",
            "./images/sliderProducts/NeedForSpeedPayBack/img4.jpg",
            "./images/sliderProducts/NeedForSpeedPayBack/img5.jpg",],
        description: "Need for Speed: Payback - это очередная часть гоночного симулятора серии Need for Speed, которая переносит игрока в Фортуна-Вэли, аналог Лас-Вегаса. Игрокам предстоит вмешаться в нелегальную деятельность огромного Картеля Дом, который подмял под себя весь город, и отомстить за нанесенную главному герою обиду. Игровой процесс в NfS: Payback вращается вокруг уличных гонок, криминальных заданий и погонь с полицией. Проходя различные испытания, трассы и гонки игроки могут открывать новые автомобили, детали тюнинга, а также продвигаются по карьерной лестницы, повышая свой рейтинг. Payback дает игроку возможность кататься по большому открытому миру, открывая новые трассы для гонок, отыскивать редкие старинные автомобили и многое другое.",
        platformOS: "Windows",
        genre: "Гонки, Экшен",
        publisher: "Electronic Arts",
        releaseDate: "10 ноября 2017",
        systemRequirements: systemRequirements[2],
    },
    {
        id: "id3",
        quantity: 1,
        name: "Need for Speed: NoLimits",
        image: "./images/img_4.jpg",
        price: 300,
        sale: "-15%",
        timeSale: "7/20/2020 00:00:00 AM",
        imageSlider: ["./images/sliderProducts/NeedForSpeedNoLimits/img0.jpg",
            "./images/sliderProducts/NeedForSpeedNoLimits/img1.jpg",
            "./images/sliderProducts/NeedForSpeedNoLimits/img2.jpg",
            "./images/sliderProducts/NeedForSpeedNoLimits/img3.jpg",
            "./images/sliderProducts/NeedForSpeedNoLimits/img4.jpg",
            "./images/sliderProducts/NeedForSpeedNoLimits/img5.jpg",],
        description: "Need for Speed No Limits - это гоночный проект из серии Need for Speed для смартфонов и планшетов. Игроков ждёт привычный для серии Need for Speed набор развлечений: гонки, тюнинг, разнообразные режимы, коллекционирование автомобилей.",
        platformOS: "Android",
        genre: "Гонки",
        publisher: "Electronic Arts",
        releaseDate: "30 сентября 2015",
        systemRequirements: systemRequirements[3],
    },
    {
        id: "id4",
        quantity: 1,
        name: "Need for Speed: Underground2",
        image: "./images/img_5.jpg",
        price: 50,
        sale: "",
        timeSale: "",
        imageSlider: ["./images/sliderProducts/NeedForSpeedUnderground2/img0.jpg",
            "./images/sliderProducts/NeedForSpeedUnderground2/img1.jpg",
            "./images/sliderProducts/NeedForSpeedUnderground2/img2.jpg",
            "./images/sliderProducts/NeedForSpeedUnderground2/img3.jpg",
            "./images/sliderProducts/NeedForSpeedUnderground2/img4.jpg",
            "./images/sliderProducts/NeedForSpeedUnderground2/img5.jpg",],
        description: "Need for Speed: Underground 2 - это восьмая часть сериала Need for Speed. После событий NFS Underground, когда главный герой стал самым уважаемым уличным гонщиком в Олимпик Сити, проходит шесть месяцев. Один из друзей протагониста погибает в аварии, а он сам только недавно отошел от столкновения. Прибыв в Бэйвью, герой осваивается на новом месте и начинает вновь идти вверх по карьерной лестнице, сражаясь с другими гонщиками и добиваясь уважения. Калеб Рейс, главный антагонист серии, из-за которого случились две аварии в начале игры, в конце концов оказывается вынужден бросить вызов протагонисту лично. В Underground 2 у игроков есть возможность свободного перемещения по городу, вызова случайно подвернувшихся гонщиков на дуэль и съемок для обложек журналов и DVD. Список автомобилей расширен - теперь игрок волен выбрать себе один из тридцати автомобилей. Так же расширен и список игровых режимов - отныне игроки могут принять участие в любом из восьми уникальных режимов, каждый из которых имеет свои правила. В Бэйвью, как и в Олимпик-Сити, не существует полиции.",
        platformOS: "Windows",
        genre: "Гонки",
        publisher: "Electronic Arts",
        releaseDate: "9 ноября 2004",
        systemRequirements: systemRequirements[4],
    },
    {
        id: "id5",
        quantity: 1,
        name: "Need for Speed: Underground1",
        image: "./images/img_6.jpg",
        price: 20,
        sale: "-20%",
        timeSale: "8/1/2020 10:00:00 AM",
        imageSlider: ["./images/sliderProducts/NeedForSpeedUnderground1/img0.jpg",
            "./images/sliderProducts/NeedForSpeedUnderground1/img1.jpg",
            "./images/sliderProducts/NeedForSpeedUnderground1/img2.jpg",
            "./images/sliderProducts/NeedForSpeedUnderground1/img3.jpg",
            "./images/sliderProducts/NeedForSpeedUnderground1/img4.jpg",
            "./images/sliderProducts/NeedForSpeedUnderground1/img5.jpg",],
        description: "Need for Speed: Underground - седьмая часть гоночной аркады Need for Speed. В Underground была добавлена возможность тюнинга автомобиля и возвращен режим карьеры. Сюжет рассказывает о Райне Купере, гонщике, мечтающем стать лучшим в городе и, с помощью игрока, достигающем свою цель. В Underground все события происходят под покровом ночи. Вместо привычных по предыдущим выпускам серии игр пейзажей игрокам приходится смотреть на вымышленные города, что отразилось и на будущих частях серии. Игрок обязан выиграть то или иное количество гонок, чтобы подняться вверх по 'городского рейтинга', дабы завоевать первое место, и стать лучшим в городе. За победы игроки получают запчасти тюнинга и стайлинга. Всего в Underground присутствует шесть режимов езды, двадцать автомобилей и множество разных трасс.",
        platformOS: "Windows",
        genre: "Гонки",
        publisher: "Electronic Arts",
        releaseDate: "17 ноября 2003",
        systemRequirements: systemRequirements[5],
    },
];

