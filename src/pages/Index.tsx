import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isFlickering, setIsFlickering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlickering(true);
      setTimeout(() => setIsFlickering(false), 200);
    }, Math.random() * 10000 + 8000);

    return () => clearInterval(interval);
  }, []);

  const leaderboard = [
    { name: 'Смертельный Джек', wins: 127, avatar: '/img/404016b3-5729-4e9c-8af7-788325fb91e0.jpg', status: 'Проклят' },
    { name: 'Кровавая Мэри', wins: 98, avatar: '/img/404016b3-5729-4e9c-8af7-788325fb91e0.jpg', status: 'Мертва' },
    { name: 'Череп Билл', wins: 87, avatar: '/img/404016b3-5729-4e9c-8af7-788325fb91e0.jpg', status: 'Призрак' },
    { name: 'Доктор Смерть', wins: 76, avatar: '/img/404016b3-5729-4e9c-8af7-788325fb91e0.jpg', status: 'Нежить' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-horror-black via-horror-shadow to-cowboy-dark font-roboto text-horror-bone">
      {/* Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-transparent via-horror-gray/5 to-transparent animate-pulse z-50" 
           style={{
             backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.02) 2px, rgba(255,255,255,0.02) 4px)',
           }}
      />

      {/* Navigation */}
      <nav className={`bg-horror-shadow/95 backdrop-blur-sm border-b-2 border-horror-blood relative ${isFlickering ? 'animate-flicker' : ''}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-oswald font-bold text-horror-red tracking-wider">
              💀 SNUFF & DUST 💀
              <div className="text-xs text-horror-bone/60 font-roboto tracking-normal">
                Мертвецкая Дуэль
              </div>
            </h1>
            <div className="flex space-x-6">
              {[
                { id: 'home', label: 'Морг', icon: 'Home' },
                { id: 'profile', label: 'Душа', icon: 'Skull' },
                { id: 'rating', label: 'Мертвецы', icon: 'Trophy' },
                { id: 'game', label: 'Дуэль', icon: 'Target' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 border ${
                    activeTab === tab.id
                      ? 'bg-horror-blood/20 text-horror-red border-horror-blood animate-pulse-glow'
                      : 'text-horror-bone/80 hover:bg-horror-gray/30 border-horror-gray hover:text-horror-red'
                  }`}
                >
                  <Icon name={tab.icon} size={20} />
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <div className="space-y-8 animate-fade-in">
            {/* Hero Section */}
            <div className="text-center py-16 relative">
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="/img/4675b505-89b5-4fe6-a429-31a3e7419aeb.jpg" 
                  alt="Салун" 
                  className="w-full h-full object-cover filter sepia contrast-125"
                />
              </div>
              <div className="relative z-10">
                <h2 className="text-6xl font-oswald font-bold text-horror-red mb-4 drop-shadow-2xl animate-shadow-dance">
                  ⚰️ ГОТОВ УМЕРЕТЬ? 🔫
                </h2>
                <p className="text-xl text-horror-bone/80 mb-8 max-w-2xl mx-auto filter contrast-125">
                  Последняя дуэль на Проклятом Западе. Здесь побеждает только смерть...
                </p>
                <Button 
                  size="lg" 
                  className="bg-horror-blood hover:bg-horror-red text-horror-skull font-oswald text-lg px-8 py-4 animate-pulse-glow border-2 border-horror-red shadow-2xl"
                >
                  💀 ПРИНЯТЬ СМЕРТЬ 💀
                </Button>
              </div>
            </div>

            {/* Church Image */}
            <div className="relative mb-12">
              <Card className="bg-horror-shadow/80 border-2 border-horror-blood backdrop-blur-sm overflow-hidden">
                <div className="relative">
                  <img 
                    src="/img/1f6763de-37c6-4179-9411-dfefa8d4e998.jpg" 
                    alt="Пустынная церковь" 
                    className="w-full h-80 object-cover filter sepia contrast-110 saturate-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-horror-shadow/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <h3 className="text-2xl font-oswald font-bold text-horror-bone drop-shadow-lg">
                      Последняя Молитва
                    </h3>
                    <p className="text-horror-bone/80 font-roboto">
                      Здесь погребены мечты о спасении...
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="bg-horror-shadow/80 border-2 border-horror-blood backdrop-blur-sm">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-horror-bone font-oswald text-sm">Душ забрано</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-3xl font-bold text-horror-red text-center">1,247</div>
                </CardContent>
              </Card>
              <Card className="bg-horror-shadow/80 border-2 border-horror-blood backdrop-blur-sm">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-horror-bone font-oswald text-sm">Мертвецов в игре</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-3xl font-bold text-horror-red text-center">342</div>
                </CardContent>
              </Card>
              <Card className="bg-horror-shadow/80 border-2 border-horror-blood backdrop-blur-sm">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-horror-bone font-oswald text-sm">Скорость смерти</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-3xl font-bold text-horror-red text-center">0.12s</div>
                </CardContent>
              </Card>
              <Card className="bg-horror-shadow/80 border-2 border-horror-blood backdrop-blur-sm">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-horror-bone font-oswald text-sm">Последние слова</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-3xl font-bold text-horror-red text-center">"...прости"</div>
                </CardContent>
              </Card>
            </div>

            {/* News/Events Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-oswald font-bold text-horror-red mb-6 text-center">
                📰 Мертвецкие Новости 📰
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-horror-shadow/80 border-2 border-horror-blood backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-horror-bone font-oswald flex items-center gap-2">
                      🤠 Новые проклятия
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-horror-bone/80">
                      На кладбище обнаружены новые магические пули. 
                      Они позволяют убивать даже призраков...
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-horror-shadow/80 border-2 border-horror-blood backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-horror-bone font-oswald flex items-center gap-2">
                      ⚰️ Ночной турнир
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-horror-bone/80">
                      Каждую полночь на кладбище проходит 
                      специальный турнир для проклятых стрелков.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Weapons Arsenal */}
            <div className="mt-12">
              <h3 className="text-2xl font-oswald font-bold text-horror-red mb-6 text-center">
                🔫 Арсенал Смерти 🔫
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-horror-shadow/80 border-2 border-horror-blood backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-2">🔫</div>
                    <CardTitle className="text-horror-bone font-oswald">Проклятый Кольт</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-horror-bone/80 text-sm">Огнестрел с проклятыми пулями</p>
                    <div className="text-horror-red font-bold">Урон: 666</div>
                  </CardContent>
                </Card>
                <Card className="bg-horror-shadow/80 border-2 border-horror-blood backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-2">🗡️</div>
                    <CardTitle className="text-horror-bone font-oswald">Кинжал Мертвеца</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-horror-bone/80 text-sm">Клинок, форгованный из слез душ</p>
                    <div className="text-horror-red font-bold">Крит: 100%</div>
                  </CardContent>
                </Card>
                <Card className="bg-horror-shadow/80 border-2 border-horror-blood backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-2">🧨</div>
                    <CardTitle className="text-horror-bone font-oswald">Мина Покоя</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-horror-bone/80 text-sm">Взрывчатка, которая отправляет в ад</p>
                    <div className="text-horror-red font-bold">Массовый урон</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="max-w-2xl mx-auto animate-fade-in">
            <Card className="bg-horror-shadow/80 border-2 border-horror-blood backdrop-blur-sm">
              <CardHeader className="text-center">
                <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-horror-blood animate-pulse-glow">
                  <AvatarImage src="/img/404016b3-5729-4e9c-8af7-788325fb91e0.jpg" />
                  <AvatarFallback className="bg-horror-black text-horror-red">💀</AvatarFallback>
                </Avatar>
                <CardTitle className="text-2xl font-oswald text-horror-red">Потерянная Душа</CardTitle>
                <CardDescription className="text-horror-bone/70">Новобранец в аду</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-horror-black/50 p-4 rounded border border-horror-blood">
                    <div className="text-2xl font-bold text-horror-red animate-flicker">12</div>
                    <div className="text-horror-bone/70">Убийств</div>
                  </div>
                  <div className="bg-horror-black/50 p-4 rounded border border-horror-blood">
                    <div className="text-2xl font-bold text-horror-red">8</div>
                    <div className="text-horror-bone/70">Смертей</div>
                  </div>
                </div>
                <div className="text-center">
                  <Badge variant="secondary" className="bg-horror-blood/20 text-horror-red border border-horror-blood">
                    💀 Проклятие: 67% 💀
                  </Badge>
                </div>
                <Button className="w-full bg-horror-blood hover:bg-horror-red text-horror-skull border-2 border-horror-red animate-pulse-glow">
                  Проклясть душу
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'rating' && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-oswald font-bold text-horror-red text-center mb-8">
              ⚰️ МЕРТВЕЦКИЙ РЕЙТИНГ ⚰️
            </h2>
            <div className="space-y-4">
              {leaderboard.map((player, index) => (
                <Card key={player.name} className="bg-horror-shadow/80 border-2 border-horror-blood backdrop-blur-sm hover:border-horror-red transition-colors">
                  <CardContent className="flex items-center justify-between p-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl font-bold text-horror-red">
                        #{index + 1}
                      </div>
                      <Avatar className="border-2 border-horror-blood">
                        <AvatarImage src={player.avatar} />
                        <AvatarFallback className="bg-horror-black text-horror-red">💀</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-oswald font-bold text-horror-bone">
                          {player.name}
                        </div>
                        <div className="text-horror-bone/70">
                          {player.wins} убийств • {player.status}
                        </div>
                      </div>
                    </div>
                    {index === 0 && <Icon name="Crown" className="text-horror-red animate-pulse-glow" size={24} />}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'game' && (
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-oswald font-bold text-horror-red mb-8">
              ⚡ АРЕНА СМЕРТИ ⚡
            </h2>
            <Card className="bg-horror-shadow/80 border-2 border-horror-blood backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <img 
                  src="/img/4675b505-89b5-4fe6-a429-31a3e7419aeb.jpg" 
                  alt="Арена" 
                  className="w-full h-full object-cover filter sepia contrast-125"
                />
              </div>
              <CardContent className="p-16 relative z-10">
                <div className="space-y-8">
                  <div className="text-8xl animate-float">💀</div>
                  <div className="space-y-4">
                    <p className="text-xl text-horror-bone">
                      Приготовься к последней дуэли своей жизни...
                    </p>
                    <p className="text-horror-bone/70">
                      Стреляй или умри. Третьего не дано.
                    </p>
                  </div>
                  <Button 
                    size="lg" 
                    className="bg-horror-blood hover:bg-horror-red text-horror-skull font-oswald text-xl px-12 py-6 animate-pulse-glow border-2 border-horror-red shadow-2xl"
                  >
                    🔫 УМЕРЕТЬ С ЧЕСТЬЮ 💀
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <Card className="bg-horror-shadow/60 border border-horror-blood">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-horror-red">0.45s</div>
                  <div className="text-horror-bone/70">Лучшая смерть</div>
                </CardContent>
              </Card>
              <Card className="bg-horror-shadow/60 border border-horror-blood">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-horror-red">3</div>
                  <div className="text-horror-bone/70">Череда убийств</div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;