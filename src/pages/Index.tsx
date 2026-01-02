import { useState } from 'react';
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
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-white to-secondary/30">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-8">
            <Icon name="Heart" size={48} className="mx-auto text-primary" />
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-light mb-6 text-foreground">
            Анна & Дмитрий
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-8">
            Приглашаем вас разделить с нами радость нашего особенного дня
          </p>
          <div className="flex items-center justify-center gap-4 text-primary">
            <div className="h-px w-20 bg-primary"></div>
            <Icon name="Flower2" size={24} />
            <div className="h-px w-20 bg-primary"></div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Icon name="Calendar" size={40} className="mx-auto text-primary mb-6" />
          <h2 className="text-5xl font-serif font-light mb-8 text-foreground">
            Дата и время
          </h2>
          <div className="space-y-4">
            <p className="text-3xl font-serif text-primary">15 августа 2026</p>
            <p className="text-xl text-muted-foreground">Суббота</p>
            <p className="text-2xl text-foreground mt-6">16:00</p>
            <p className="text-lg text-muted-foreground">Церемония начнется ровно в 16:00</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
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
              { time: '17:00', title: 'Коктейль', desc: 'Фуршет и фотосессия' },
              { time: '18:00', title: 'Банкет', desc: 'Праздничный ужин' },
              { time: '20:00', title: 'Первый танец', desc: 'Танцевальная программа' },
              { time: '22:00', title: 'Торт и фейерверк', desc: 'Сладкий стол и салют' },
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
            Будем рады видеть вас на нашем празднике! Пожалуйста, подтвердите своё присутствие до 1 августа 2026
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
                <p className="text-lg mb-2">Анна Петрова</p>
                <a href="tel:+79001234567" className="text-primary hover:underline flex items-center justify-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (900) 123-45-67
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif mb-4 text-foreground">Жених</h3>
                <p className="text-lg mb-2">Дмитрий Иванов</p>
                <a href="tel:+79007654321" className="text-primary hover:underline flex items-center justify-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (900) 765-43-21
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-primary text-primary-foreground text-center">
        <Icon name="Heart" size={32} className="mx-auto mb-4" />
        <p className="text-lg font-serif">
          С любовью, Анна и Дмитрий
        </p>
        <p className="text-sm mt-4 opacity-80">15 августа 2026</p>
      </footer>
    </div>
  );
};

export default Index;
