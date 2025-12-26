import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const games = [
    {
      name: 'PUBG',
      icon: 'Target',
      color: 'from-orange-500 to-red-500',
      description: 'Тактика, позиционирование, стрельба',
      price: '5 000 ₽',
    },
    {
      name: 'CS 2',
      icon: 'Crosshair',
      color: 'from-blue-500 to-cyan-500',
      description: 'Прицеливание, экономика, координация',
      price: '5 000 ₽',
    },
    {
      name: 'Dota 2',
      icon: 'Gamepad2',
      color: 'from-purple-500 to-pink-500',
      description: 'Макро, микро, драфт и стратегия',
      price: '5 000 ₽',
    },
  ];

  const coaches = [
    {
      name: 'Алексей "Thunder" Волков',
      image: 'https://cdn.poehali.dev/projects/95998671-d623-46b7-8b16-7d8a76074890/files/0bcd3139-ce40-4c67-96bf-130d4153b307.jpg',
      game: 'PUBG',
      rating: 4.9,
      students: 127,
      experience: '5 лет в киберспорте',
    },
    {
      name: 'Мария "Phoenix" Петрова',
      image: 'https://cdn.poehali.dev/projects/95998671-d623-46b7-8b16-7d8a76074890/files/03853c66-8b01-42c6-b9f2-814adde26e9e.jpg',
      game: 'CS 2',
      rating: 5.0,
      students: 203,
      experience: '7 лет профессионального опыта',
    },
    {
      name: 'Дмитрий "Cyber" Соколов',
      image: 'https://cdn.poehali.dev/projects/95998671-d623-46b7-8b16-7d8a76074890/files/7755e423-baa7-446c-b7b9-3c59456a012e.jpg',
      game: 'Dota 2',
      rating: 4.8,
      students: 156,
      experience: '6 лет в профессиональных командах',
    },
  ];

  const reviews = [
    {
      name: 'Иван Смирнов',
      game: 'CS 2',
      rating: 5,
      text: 'За 2 месяца тренировок поднялся с Silver до Global Elite! Мария объясняет все максимально понятно.',
      avatar: '🎮',
    },
    {
      name: 'Анна Кузнецова',
      game: 'Dota 2',
      rating: 5,
      text: 'Дмитрий помог разобраться с механикой героев и улучшить макро-игру. Рекомендую!',
      avatar: '⚡',
    },
    {
      name: 'Петр Новиков',
      game: 'PUBG',
      rating: 4,
      text: 'Отличный коуч! Научился правильно выбирать позиции и читать зону.',
      avatar: '🔥',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="https://cdn.poehali.dev/files/logoza.ru.png" alt="CyberHero" className="h-10 w-10" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CyberHero
              </h1>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'about', 'services', 'coaches', 'reviews', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'О нас'}
                  {section === 'services' && 'Услуги'}
                  {section === 'coaches' && 'Тренеры'}
                  {section === 'reviews' && 'Отзывы'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Прокачай свой
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-glow">
                киберспорт скилл
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Профессиональные тренеры научат тебя побеждать в PUBG, CS 2 и Dota 2. 
              Анализ ошибок, персональные тренировки, путь в киберспорт.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8"
                onClick={() => scrollToSection('services')}
              >
                <Icon name="Rocket" size={20} className="mr-2" />
                Выбрать тренера
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 text-lg px-8"
                onClick={() => scrollToSection('about')}
              >
                Узнать больше
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {[
                { icon: 'Users', value: '500+', label: 'Довольных учеников' },
                { icon: 'Award', value: '50+', label: 'Про-игроков обучено' },
                { icon: 'TrendingUp', value: '95%', label: 'Прогресс гарантирован' },
              ].map((stat, idx) => (
                <Card key={idx} className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all">
                  <CardContent className="pt-6 text-center">
                    <Icon name={stat.icon as any} size={40} className="mx-auto mb-3 text-primary" />
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">О нас</Badge>
            <h3 className="text-4xl font-bold mb-4">Почему CyberHero?</h3>
            <p className="text-muted-foreground text-lg">
              Мы знаем, что нужно для победы в киберспорте
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: 'Target',
                title: 'Персональный подход',
                description: 'Индивидуальная программа для каждого ученика',
              },
              {
                icon: 'BarChart3',
                title: 'Анализ игр',
                description: 'Разбор твоих реплеев и поиск ошибок',
              },
              {
                icon: 'Zap',
                title: 'Быстрый прогресс',
                description: 'Заметные результаты уже через 2 недели',
              },
              {
                icon: 'Trophy',
                title: 'Профи-тренеры',
                description: 'Опыт в турнирах и профессиональных командах',
              },
            ].map((feature, idx) => (
              <Card
                key={idx}
                className="bg-card/50 backdrop-blur border-primary/20 hover:border-secondary/50 transition-all hover:scale-105"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-3">
                    <Icon name={feature.icon as any} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">Услуги</Badge>
            <h3 className="text-4xl font-bold mb-4">Выбери свою игру</h3>
            <p className="text-muted-foreground text-lg">
              Тренировки по самым популярным киберспортивным дисциплинам
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {games.map((game, idx) => (
              <Card
                key={idx}
                className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all group hover:scale-105 overflow-hidden relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <CardHeader className="text-center relative z-10">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${game.color} flex items-center justify-center mx-auto mb-4 group-hover:animate-glow`}>
                    <Icon name={game.icon as any} size={40} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{game.name}</CardTitle>
                  <CardDescription className="text-base">{game.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-2 mb-4">
                    {['Персональные тренировки', 'Анализ реплеев', 'Домашние задания', 'Поддержка 24/7'].map(
                      (item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      )
                    )}
                  </ul>
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-primary">{game.price}</div>
                    <div className="text-sm text-muted-foreground">за одну тренировку</div>
                  </div>
                  <Button className={`w-full bg-gradient-to-r ${game.color} hover:opacity-90`}>
                    Записаться на тренировку
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="coaches" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Тренеры</Badge>
            <h3 className="text-4xl font-bold mb-4">Наши профессионалы</h3>
            <p className="text-muted-foreground text-lg">
              Опытные игроки с проверенными результатами
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coaches.map((coach, idx) => (
              <Card
                key={idx}
                className="bg-card/50 backdrop-blur border-primary/20 hover:border-secondary/50 transition-all overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-white border-0">{coach.game}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{coach.name}</CardTitle>
                  <CardDescription>{coach.experience}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                      <span className="font-bold text-lg">{coach.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Icon name="Users" size={16} />
                      <span>{coach.students} учеников</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Выбрать тренера
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Отзывы</Badge>
            <h3 className="text-4xl font-bold mb-4">Что говорят ученики</h3>
            <p className="text-muted-foreground text-lg">
              Реальные результаты наших студентов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, idx) => (
              <Card
                key={idx}
                className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl">
                      {review.avatar}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {review.game}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">Контакты</Badge>
              <h3 className="text-4xl font-bold mb-4">Свяжись с нами</h3>
              <p className="text-muted-foreground text-lg">
                Готов начать свой путь в киберспорте?
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-card/50 backdrop-blur border-primary/20">
                <CardHeader>
                  <CardTitle>Отправь заявку</CardTitle>
                  <CardDescription>Мы свяжемся с тобой в течение 24 часов</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Твое имя" className="bg-background/50" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" className="bg-background/50" />
                    </div>
                    <div>
                      <Input placeholder="Telegram / Discord" className="bg-background/50" />
                    </div>
                    <div>
                      <Textarea placeholder="Расскажи о своем опыте в игре" className="bg-background/50 min-h-24" />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                      <Icon name="Send" size={18} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="bg-card/50 backdrop-blur border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="MapPin" size={20} className="text-primary" />
                      Адрес
                    </CardTitle>
                    <CardDescription>г. Москва, ул. Киберспортивная, д. 1</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Phone" size={20} className="text-secondary" />
                      Телефон
                    </CardTitle>
                    <CardDescription>+7 (999) 123-45-67</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Mail" size={20} className="text-accent" />
                      Email
                    </CardTitle>
                    <CardDescription>info@cyberhero.pro</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur border-primary/30">
                  <CardHeader>
                    <CardTitle className="text-center">Карта</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="w-full h-48 bg-background/50 rounded-lg flex items-center justify-center">
                      <Icon name="Map" size={48} className="text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img src="https://cdn.poehali.dev/files/logoza.ru.png" alt="CyberHero" className="h-10 w-10" />
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CyberHero
              </div>
            </div>
            <div className="flex gap-6">
              {['Discord', 'Youtube', 'Twitch'].map((social) => (
                <Button key={social} variant="ghost" size="icon" className="hover:text-primary">
                  <Icon name={social as any} size={20} />
                </Button>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">© 2024 CyberHero. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;