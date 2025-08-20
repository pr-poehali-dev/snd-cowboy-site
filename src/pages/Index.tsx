import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const leaderboard = [
    { name: 'Billy the Kid', wins: 127, avatar: '/img/5d4b4f58-528c-47c9-8488-89aa02cf4efa.jpg' },
    { name: 'Calamity Jane', wins: 98, avatar: '/img/5d4b4f58-528c-47c9-8488-89aa02cf4efa.jpg' },
    { name: 'Wild Bill', wins: 87, avatar: '/img/5d4b4f58-528c-47c9-8488-89aa02cf4efa.jpg' },
    { name: 'Doc Holliday', wins: 76, avatar: '/img/5d4b4f58-528c-47c9-8488-89aa02cf4efa.jpg' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cowboy-sand via-cowboy-cream to-cowboy-tan font-roboto">
      {/* Navigation */}
      <nav className="bg-cowboy-dark/90 backdrop-blur-sm border-b-2 border-cowboy-brown">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-oswald font-bold text-cowboy-cream">
              SNUFF & DUST
            </h1>
            <div className="flex space-x-6">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'profile', label: 'Профиль', icon: 'User' },
                { id: 'rating', label: 'Рейтинг', icon: 'Trophy' },
                { id: 'game', label: 'Игра', icon: 'Target' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-cowboy-brown text-cowboy-cream'
                      : 'text-cowboy-cream/80 hover:bg-cowboy-brown/50'
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
            <div className="text-center py-16">
              <h2 className="text-6xl font-oswald font-bold text-cowboy-dark mb-4">
                🤠 ГОТОВ К ДУЭЛИ? 🔫
              </h2>
              <p className="text-xl text-cowboy-dark/80 mb-8 max-w-2xl mx-auto">
                Самая быстрая игра на Диком Западе. Докажи, что ты быстрее всех!
              </p>
              <Button 
                size="lg" 
                className="bg-cowboy-brown hover:bg-cowboy-dark text-cowboy-cream font-oswald text-lg px-8 py-4 animate-pulse-glow"
              >
                🎯 ВЫЗВАТЬ НА ДУЭЛЬ
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-cowboy-cream/80 border-cowboy-brown">
                <CardHeader className="text-center">
                  <CardTitle className="text-cowboy-dark font-oswald">Дуэлей сегодня</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-cowboy-brown text-center">1,247</div>
                </CardContent>
              </Card>
              <Card className="bg-cowboy-cream/80 border-cowboy-brown">
                <CardHeader className="text-center">
                  <CardTitle className="text-cowboy-dark font-oswald">Активных ковбоев</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-cowboy-brown text-center">342</div>
                </CardContent>
              </Card>
              <Card className="bg-cowboy-cream/80 border-cowboy-brown">
                <CardHeader className="text-center">
                  <CardTitle className="text-cowboy-dark font-oswald">Рекорд скорости</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-cowboy-brown text-center">0.12s</div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="max-w-2xl mx-auto animate-fade-in">
            <Card className="bg-cowboy-cream/80 border-cowboy-brown">
              <CardHeader className="text-center">
                <Avatar className="w-32 h-32 mx-auto mb-4">
                  <AvatarImage src="/img/5d4b4f58-528c-47c9-8488-89aa02cf4efa.jpg" />
                  <AvatarFallback>🤠</AvatarFallback>
                </Avatar>
                <CardTitle className="text-2xl font-oswald text-cowboy-dark">Незнакомец</CardTitle>
                <CardDescription className="text-cowboy-dark/70">Начинающий стрелок</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-cowboy-brown">12</div>
                    <div className="text-cowboy-dark/70">Побед</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-cowboy-brown">8</div>
                    <div className="text-cowboy-dark/70">Поражений</div>
                  </div>
                </div>
                <div className="text-center">
                  <Badge variant="secondary" className="bg-cowboy-tan text-cowboy-dark">
                    Точность: 67%
                  </Badge>
                </div>
                <Button className="w-full bg-cowboy-brown hover:bg-cowboy-dark text-cowboy-cream">
                  Редактировать профиль
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'rating' && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-oswald font-bold text-cowboy-dark text-center mb-8">
              🏆 ЛУЧШИЕ СТРЕЛКИ
            </h2>
            <div className="space-y-4">
              {leaderboard.map((player, index) => (
                <Card key={player.name} className="bg-cowboy-cream/80 border-cowboy-brown">
                  <CardContent className="flex items-center justify-between p-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl font-bold text-cowboy-brown">
                        #{index + 1}
                      </div>
                      <Avatar>
                        <AvatarImage src={player.avatar} />
                        <AvatarFallback>🤠</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-oswald font-bold text-cowboy-dark">
                          {player.name}
                        </div>
                        <div className="text-cowboy-dark/70">
                          {player.wins} побед
                        </div>
                      </div>
                    </div>
                    {index === 0 && <Icon name="Crown" className="text-yellow-500" size={24} />}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'game' && (
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-oswald font-bold text-cowboy-dark mb-8">
              ⚡ АРЕНА ДУЭЛЕЙ ⚡
            </h2>
            <Card className="bg-cowboy-cream/80 border-cowboy-brown">
              <CardContent className="p-16">
                <div className="space-y-8">
                  <div className="text-8xl">🤠</div>
                  <div className="space-y-4">
                    <p className="text-xl text-cowboy-dark">
                      Приготовься к самой быстрой дуэли на Диком Западе!
                    </p>
                    <p className="text-cowboy-dark/70">
                      Нажми на кнопку, когда увидишь сигнал
                    </p>
                  </div>
                  <Button 
                    size="lg" 
                    className="bg-cowboy-brown hover:bg-cowboy-dark text-cowboy-cream font-oswald text-xl px-12 py-6 animate-pulse-glow"
                  >
                    🔫 НАЧАТЬ ДУЭЛЬ
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <Card className="bg-cowboy-cream/60">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-cowboy-brown">0.45s</div>
                  <div className="text-cowboy-dark/70">Лучшее время</div>
                </CardContent>
              </Card>
              <Card className="bg-cowboy-cream/60">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-cowboy-brown">3</div>
                  <div className="text-cowboy-dark/70">Серия побед</div>
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