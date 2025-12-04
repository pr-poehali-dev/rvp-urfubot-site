import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  const handleTelegramClick = () => {
    window.open('https://t.me/your_bot_username', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:py-20">
        
        <header className="text-center mb-20 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            RVP-Urfu — твой помощник по РВП в УрФУ
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
            Никакой паники, никаких сюрпризов — только понятные шаги и актуальная информация в твоем кармане
          </p>
          <Button 
            onClick={handleTelegramClick}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-7 text-lg"
          >
            <Icon name="MessageCircle" className="mr-2" size={24} />
            Открыть бота в Telegram
          </Button>
        </header>

        <ScrollReveal animation="fade-in-up">
          <section className="mb-20 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Что делает бот
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  RVP-Urfu помогает иностранным студентам УрФУ пройти оформление РВП спокойнее и понятнее.
                </p>
              </div>
              <div className="grid gap-4">
                <Card className="p-4 flex items-center gap-4 border-l-4 border-l-primary hover:bg-card/50 transition-colors">
                  <Icon name="HelpCircle" size={28} className="text-primary flex-shrink-0" />
                  <span className="text-base font-medium">Ответы на частые вопросы</span>
                </Card>
                <Card className="p-4 flex items-center gap-4 border-l-4 border-l-primary hover:bg-card/50 transition-colors">
                  <Icon name="Bell" size={28} className="text-primary flex-shrink-0" />
                  <span className="text-base font-medium">Информация об изменениях и требованиях</span>
                </Card>
                <Card className="p-4 flex items-center gap-4 border-l-4 border-l-primary hover:bg-card/50 transition-colors">
                  <Icon name="ListChecks" size={28} className="text-primary flex-shrink-0" />
                  <span className="text-base font-medium">Пошаговые инструкции по подаче</span>
                </Card>
                <Card className="p-4 flex items-center gap-4 border-l-4 border-l-primary hover:bg-card/50 transition-colors">
                  <Icon name="Clock" size={28} className="text-primary flex-shrink-0" />
                  <span className="text-base font-medium">Напоминания о важных сроках</span>
                </Card>
                <Card className="p-4 flex items-center gap-4 border-l-4 border-l-primary hover:bg-card/50 transition-colors">
                  <Icon name="MessageSquare" size={28} className="text-primary flex-shrink-0" />
                  <span className="text-base font-medium">Возможность задать свой вопрос</span>
                </Card>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal animation="slide-in-left" delay={100}>
          <section className="mb-20 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Проблема и решение
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-destructive/5 border-2 border-destructive/20">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Icon name="AlertCircle" size={28} className="text-destructive" />
                Проблема
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-destructive mt-1">•</span>
                  <span>Информация разбросана по чатам и постам</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive mt-1">•</span>
                  <span>Трудно понять, что актуально</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive mt-1">•</span>
                  <span>Страшно ошибиться в документах и сроках</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-primary/5 border-2 border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Icon name="CheckCircle2" size={28} className="text-primary" />
                Как помогает бот
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Всё собрано в одном месте</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Тексты можно легко обновлять</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Шаги расписаны понятным языком</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Можно задать вопрос и уточнить детали</span>
                </li>
              </ul>
            </Card>
          </div>
          </section>
        </ScrollReveal>

        <ScrollReveal animation="fade-in-up" delay={150}>
          <section className="mb-20 max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Как работает бот
            </h2>
          <div className="space-y-6">
            {[
              { num: 1, text: "Студент открывает бота в Telegram и нажимает «Старт»" },
              { num: 2, text: "Выбирает язык и видит главное меню: документы, сроки и подача, изменения, задать вопрос, напоминания" },
              { num: 3, text: "Открывает нужный раздел и получает короткий, структурированный ответ" },
              { num: 4, text: "При нестандартной ситуации пишет свой вопрос и получает ответ от модератора" },
              { num: 5, text: "При необходимости настраивает напоминания, чтобы ничего не пропустить" }
            ].map((step) => (
              <Card key={step.num} className="p-6 flex items-start gap-6 hover:shadow-lg hover:scale-[1.02] transition-all">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl flex-shrink-0">
                  {step.num}
                </div>
                <p className="text-lg text-muted-foreground pt-2">{step.text}</p>
              </Card>
            ))}
          </div>
          </section>
        </ScrollReveal>

        <ScrollReveal animation="slide-in-right" delay={200}>
          <section className="mb-20 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Для кого бот
            </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-primary/5 border-2 border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Кому подойдёт RVP-Urfu
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3 items-start">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Иностранным студентам 1–4 курсов УрФУ</span>
                </li>
                <li className="flex gap-3 items-start">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Магистрантам</span>
                </li>
                <li className="flex gap-3 items-start">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Тем, кто подаёт на РВП впервые</span>
                </li>
                <li className="flex gap-3 items-start">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Тем, кто вернулся с каникул и продлевает РВП</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-muted/30 border-2">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Кому не подойдёт
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3 items-start">
                  <Icon name="X" size={20} className="text-muted-foreground mt-1 flex-shrink-0" />
                  <span>Гражданам России</span>
                </li>
                <li className="flex gap-3 items-start">
                  <Icon name="X" size={20} className="text-muted-foreground mt-1 flex-shrink-0" />
                  <span>Студентам других вузов</span>
                </li>
                <li className="flex gap-3 items-start">
                  <Icon name="X" size={20} className="text-muted-foreground mt-1 flex-shrink-0" />
                  <span>Тем, кому не нужна информация по РВП</span>
                </li>
              </ul>
            </Card>
          </div>
          </section>
        </ScrollReveal>

        <ScrollReveal animation="fade-in-up" delay={250}>
          <section className="mb-20 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Тарифы
            </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Базовый</h3>
                <p className="text-3xl font-bold text-primary">Бесплатно</p>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3 items-start">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Основная информация о документах и сроках</span>
                </li>
                <li className="flex gap-3 items-start">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Раздел с изменениями</span>
                </li>
                <li className="flex gap-3 items-start">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Базовые напоминания</span>
                </li>
                <li className="flex gap-3 items-start">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Возможность задать вопрос</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-2 border-primary bg-primary/5">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-foreground">Премиум</h3>
                  <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">концепция</span>
                </div>
                <p className="text-lg text-muted-foreground">Максимальный контроль</p>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3 items-start">
                  <Icon name="Zap" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Более быстрые ответы модераторов</span>
                </li>
                <li className="flex gap-3 items-start">
                  <Icon name="Zap" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Персональный чек-лист под ситуацию студента</span>
                </li>
                <li className="flex gap-3 items-start">
                  <Icon name="Zap" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Более детальные напоминания по шагам</span>
                </li>
                <li className="flex gap-3 items-start">
                  <Icon name="Zap" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Подходит тем, кто хочет максимальный контроль</span>
                </li>
              </ul>
            </Card>
          </div>
          </section>
        </ScrollReveal>

        <ScrollReveal animation="slide-in-left" delay={300}>
          <section className="mb-20 max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Отзывы
            </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Бот спас меня: за пять минут разобрался, куда идти и во сколько. Не пришлось ездить зря",
              "Информации хватило, чтобы всё сделать с первой попытки",
              "Напоминания помогли не забыть про подачу и подготовку документов"
            ].map((review, idx) => (
              <Card key={idx} className="p-6 bg-muted/30 hover:bg-muted/40 transition-all hover:scale-105">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Icon key={star} name="Star" size={16} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">{review}</p>
              </Card>
            ))}
          </div>
          </section>
        </ScrollReveal>

        <ScrollReveal animation="fade-in-up" delay={350}>
          <section className="mb-20 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Как начать
            </h2>
          <Card className="p-8 bg-muted/30">
            <ol className="space-y-4">
              {[
                "Найди RVP-Urfu в Telegram",
                "Нажми «Старт»",
                "Выбери язык",
                "Открой нужный раздел и получи ответ"
              ].map((step, idx) => (
                <li key={idx} className="flex gap-4 items-start text-lg">
                  <span className="font-bold text-primary flex-shrink-0">{idx + 1}.</span>
                  <span className="text-muted-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </Card>
          </section>
        </ScrollReveal>

        <ScrollReveal animation="fade-in-up" delay={400}>
          <footer className="text-center max-w-4xl mx-auto">
            <Card className="p-10 bg-primary/5 border-2 border-primary/20 mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Почему это важно
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              RVP-Urfu помогает иностранным студентам УрФУ оформлять РВП без лишней паники и хаоса. Открой бота, задай свой вопрос и сделай следующий шаг уверенно
            </p>
            <Button 
              onClick={handleTelegramClick}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-7 text-lg"
            >
              <Icon name="MessageCircle" className="mr-2" size={24} />
              Попробовать бота сейчас
            </Button>
          </Card>
        </footer>
        </ScrollReveal>

      </div>
    </div>
  );
};

export default Index;