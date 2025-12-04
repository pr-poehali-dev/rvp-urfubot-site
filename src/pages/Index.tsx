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

        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Как работает бот
          </h2>
          <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
            <p>
              Представь, что у тебя в телефоне есть личный куратор по РВП, который всегда на связи. Эту роль выполняет RVP-Urfu.
            </p>
            <p>
              Сначала студент запускает бота в Telegram и выбирает язык.
            </p>
            <p>
              Затем он попадает в простое главное меню, где есть разделы: документы для РВП, сроки и подача, изменения в правилах, задать вопрос, напоминания и информация о боте.
            </p>
            <p>
              В разделах можно получить список документов, понять сроки, узнать общие правила подачи и увидеть возможные изменения.
            </p>
            <p>
              Если стандартного ответа не хватает, студент задает свой вопрос, и бот перенаправляет его модератору для персонального ответа.
            </p>
            <p>
              При необходимости студент может включить напоминания, чтобы не пропустить важные даты, связанные с РВП.
            </p>
          </div>
        </section>

        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Целевая аудитория
          </h2>
          <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
            <p>
              Бот создан для иностранных студентов УрФУ, которые подают на РВП впервые или продлевают его.
            </p>
            <p>
              Полезен студентам 1–4 курсов и магистрантуры, новичкам, недавно поступившим в университет, а также тем, кто вернулся с каникул и снова оформляет документы.
            </p>
            <p>
              Подходит тем, у кого есть базовые вопросы о документах, сроках, этапах подачи и типичных ошибках.
            </p>
            <p>
              Бот не ориентирован на граждан России, студентов других вузов и людей, не связанных с университетом.
            </p>
          </div>
        </section>

        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Формат использования
          </h2>
          <div className="space-y-8">
            <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                Базовый функционал бота доступен бесплатно.
              </p>
              <p>
                В бесплатной версии студент получает основную информацию о документах и сроках, узнает об изменениях в правилах, может включить базовые напоминания и задать вопрос модератору.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Премиум-сопровождение
              </h3>
              <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                <p>
                  Для студентов, которые хотят максимальной уверенности и контроля, предусмотрен формат премиум-сопровождения как концепция.
                </p>
                <p>
                  В него можно включить приоритетные ответы модераторов в рабочее время, персональный чек-лист с учетом конкретной ситуации студента, более детальные напоминания по шагам и возможность краткой консультации.
                </p>
                <p>
                  Стоимость и техническая реализация тарифа могут настраиваться отдельно, в зависимости от выбранной платформы.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Примеры использования
          </h2>
          <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
            <p>
              Первая подача: студент только поступил в УрФУ. Он открывает бота, изучает разделы с документами и сроками, получает четкое понимание процесса и чувствует себя увереннее.
            </p>
            <p>
              Возвращение с каникул: студент вернулся из дома и хочет убедиться, что ничего не изменилось. Он проверяет раздел с изменениями и при необходимости задает вопрос.
            </p>
            <p>
              Максимальный контроль: студент боится допустить ошибку и использует бота как проводника по шагам, опираясь на инструкции и напоминания.
            </p>
          </div>
        </section>

        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Как попробовать бота
          </h2>
          <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
            <p>
              Чтобы начать пользоваться, нужно найти бота RVP-Urfu в Telegram по названию или ссылке, нажать кнопку «Старт», выбрать язык и открыть главное меню.
            </p>
            <p>
              Дальше студент просто выбирает нужный раздел и получает информацию или задаёт свой вопрос.
            </p>
          </div>
        </section>

        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <Card className="p-8 md:p-12 bg-muted/50 border-0">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Почему это важно
            </h2>
            <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                RVP-Urfu — это больше, чем инструмент.
              </p>
              <p>
                Это помощник, который помогает иностранным студентам УрФУ проходить процесс РВП спокойнее, понятнее и без лишних ошибок.
              </p>
              <p>
                Бот объединяет актуальную информацию, поддержку и структуру в одном месте и становится надежной опорой в важном для студента процессе.
              </p>
            </div>
          </Card>
        </section>

        <footer className="text-center pt-8 animate-fade-in" style={{ animationDelay: '1s' }}>
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