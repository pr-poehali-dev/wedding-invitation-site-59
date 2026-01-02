import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    guests: '',
    message: '',
  });

  const weddingDate = new Date('2026-07-29T16:00:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за ответ!",
      description: "Мы получили ваше подтверждение присутствия.",
    });
    setFormData({ name: '', guests: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-white to-secondary/30 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 opacity-30 animate-float">
          <img src="https://cdn.poehali.dev/projects/1b0d0f7d-fb40-4bd4-938e-0e09f700a7f2/files/98b2e516-ab53-4c2e-bd73-8aee3b6cec09.jpg" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-10 right-10 w-64 h-64 opacity-30 rotate-180 animate-float-reverse">
          <img src="https://cdn.poehali.dev/projects/1b0d0f7d-fb40-4bd4-938e-0e09f700a7f2/files/98b2e516-ab53-4c2e-bd73-8aee3b6cec09.jpg" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="max-w-4xl mx-auto text-center animate-fade-in relative z-10">
          <div className="mb-8">
            <Icon name="Heart" size={48} className="mx-auto text-primary" />
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-light mb-6 text-foreground">
            Иван & Ксения
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-8">
            Приглашаем вас разделить с нами радость нашего особенного дня
          </p>
          <div className="flex items-center justify-center gap-4 text-primary mb-12">
            <div className="h-px w-20 bg-primary"></div>
            <Icon name="Flower2" size={24} />
            <div className="h-px w-20 bg-primary"></div>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                {timeLeft.days}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Дней</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                {timeLeft.hours}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Часов</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                {timeLeft.minutes}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Минут</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                {timeLeft.seconds}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Секунд</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-20 right-0 w-48 h-48 opacity-20 animate-float">
          <img src="https://cdn.poehali.dev/projects/1b0d0f7d-fb40-4bd4-938e-0e09f700a7f2/files/a732dc7a-c56c-496e-93fe-1e2826baf8d3.jpg" alt="" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Icon name="Calendar" size={40} className="mx-auto text-primary mb-6" />
          <h2 className="text-5xl font-serif font-light mb-8 text-foreground">
            Дата и время
          </h2>
          <div className="space-y-4">
            <p className="text-3xl font-serif text-primary">29 июля 2026</p>
            <p className="text-xl text-muted-foreground">Суббота</p>
            <p className="text-2xl text-foreground mt-6">16:00</p>
            <p className="text-lg text-muted-foreground">Церемония начнется ровно в 16:00</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/20 relative overflow-hidden">
        <div className="absolute bottom-10 left-0 w-56 h-56 opacity-20 animate-float-reverse">
          <img src="https://cdn.poehali.dev/projects/1b0d0f7d-fb40-4bd4-938e-0e09f700a7f2/files/98b2e516-ab53-4c2e-bd73-8aee3b6cec09.jpg" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Icon name="MapPin" size={40} className="mx-auto text-primary mb-6" />
          <h2 className="text-5xl font-serif font-light mb-8 text-foreground">
            Место проведения
          </h2>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif mb-4 text-foreground">Усадьба «Зеленый Сад»</h3>
              <p className="text-muted-foreground mb-6">
                Московская область, д. Архангельское, ул. Парковая, 12
              </p>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-6">
                <Icon name="Map" size={48} className="text-muted-foreground" />
              </div>
              <Button variant="outline" className="gap-2">
                <Icon name="Navigation" size={18} />
                Построить маршрут
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Icon name="Clock" size={40} className="mx-auto text-primary mb-6" />
          <h2 className="text-5xl font-serif font-light mb-12 text-foreground">
            Программа мероприятия
          </h2>
          <div className="max-w-2xl mx-auto space-y-8">
            {[
              { time: '16:00', title: 'Церемония', desc: 'Торжественная регистрация брака' },
              { time: '18:00', title: 'Банкет', desc: 'Праздничный ужин' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start text-left p-6 rounded-lg hover:bg-secondary/20 transition-colors">
                <div className="text-2xl font-serif text-primary min-w-[80px]">{item.time}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <Icon name="Users" size={40} className="mx-auto text-primary mb-6" />
          <h2 className="text-5xl font-serif font-light mb-8 text-foreground">
            Подтверждение присутствия
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Будем рады видеть вас на нашем празднике! Пожалуйста, подтвердите своё присутствие до 15 июля 2026
          </p>
          <Card className="max-w-xl mx-auto">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Ваше имя и фамилия"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="text-center"
                  />
                </div>
                <div>
                  <Input
                    type="number"
                    placeholder="Количество гостей"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    required
                    min="1"
                    className="text-center"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Пожелания или комментарии (необязательно)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-[100px]"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Подтвердить присутствие
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <Icon name="Camera" size={40} className="mx-auto text-primary mb-6" />
          <h2 className="text-5xl font-serif font-light mb-12 text-foreground">
            Наша история
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((idx) => (
              <div key={idx} className="animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-muted">
                  <img
                    src="https://cdn.poehali.dev/projects/1b0d0f7d-fb40-4bd4-938e-0e09f700a7f2/files/e4582d97-896a-4a2c-9e53-a718480de17d.jpg"
                    alt={`Фото ${idx}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <Icon name="Phone" size={40} className="mx-auto text-primary mb-6" />
          <h2 className="text-5xl font-serif font-light mb-8 text-foreground">
            Контактная информация
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif mb-4 text-foreground">Невеста</h3>
                <p className="text-lg mb-2">Ксения Смирнова</p>
                <a href="tel:+79001234567" className="text-primary hover:underline flex items-center justify-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (900) 123-45-67
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif mb-4 text-foreground">Жених</h3>
                <p className="text-lg mb-2">Иван Петров</p>
                <a href="tel:+79007654321" className="text-primary hover:underline flex items-center justify-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (900) 765-43-21
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-primary text-primary-foreground text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-32 h-32">
            <Icon name="Flower" size={128} />
          </div>
          <div className="absolute bottom-0 right-1/4 w-32 h-32">
            <Icon name="Flower2" size={128} />
          </div>
        </div>
        <div className="relative z-10">
          <Icon name="Heart" size={32} className="mx-auto mb-4" />
          <p className="text-lg font-serif">
            С любовью, Иван и Ксения
          </p>
          <p className="text-sm mt-4 opacity-80">29 июля 2026</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;