import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const handleTelegramClick = () => {
    window.open('https://t.me/your_bot_username', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        <header className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            RVP-Urfu: твой помощник по РВП
          </h1>
          <Button 
            onClick={handleTelegramClick}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 text-lg"
          >
            <Icon name="MessageCircle" className="mr-2" size={24} />
            Открыть бот в Telegram
          </Button>
        </header>

        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <Card className="p-8 md:p-12 bg-muted/50 border-0">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Девиз бота
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              «Никакой паники, никаких сюрпризов — только понятные шаги и актуальная информация в твоем кармане»
            </p>
          </Card>
        </section>

        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Что такое бот RVP-Urfu
          </h2>
          <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
            <p>
              RVP-Urfu — это личный помощник по оформлению РВП для иностранных студентов УрФУ, который работает прямо в Telegram круглосуточно.
            </p>
            <p>
              Бот собирает в одном месте ответы на частые вопросы, актуальную информацию об изменениях, живую поддержку от кураторов и студентов, уже прошедших оформление РВП, а также пошаговые инструкции и напоминания о важных сроках.
            </p>
            <p>
              Бот создан для того, чтобы процесс РВП был понятным, предсказуемым и максимально спокойным для студента.
            </p>
          </div>
        </section>

        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-destructive/20 bg-background">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Проблема
              </h2>
              <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                <p>
                  Иностранным студентам УрФУ часто не хватает понятной и свежей информации о подаче на РВП.
                </p>
                <p>
                  Многие узнают об изменениях уже в день подачи, полагаются на слухи, тратят время и деньги, рискуют не успеть вовремя и ищут ответы в разных чатах и группах.
                </p>
                <p>
                  Это создаёт стресс, неопределенность и повышает шанс ошибок.
                </p>
              </div>
            </Card>

            <Card className="p-8 border-2 border-primary/20 bg-background">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Как бот решает проблему
              </h2>
              <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                <p>
                  Бот делает RVP-Urfu единым источником информации по РВП для студентов УрФУ.
                </p>
                <p>
                  Вся информация находится в одном месте в формате простых объяснений.
                </p>
                <p>
                  Содержание легко обновляется, поэтому данные остаются актуальными.
                </p>
                <p>
                  Студент получает понятные шаги: что делать, когда и куда идти.
                </p>
                <p>
                  При нестандартной ситуации можно описать свою проблему и получить персональный ответ от модератора.
                </p>
                <p>
                  Напоминания помогают не забыть о важных сроках и подготовке документов.
                </p>
              </div>
            </Card>
          </div>
        </section>

        <footer className="text-center pt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            onClick={handleTelegramClick}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 text-lg"
          >
            <Icon name="MessageCircle" className="mr-2" size={24} />
            Перейти к боту
          </Button>
        </footer>
      </div>
    </div>
  );
};

export default Index;
