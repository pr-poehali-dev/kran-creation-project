import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Wrench",
      title: "Ремонт и обслуживание",
      description:
        "Полный спектр ремонтных работ от планового ТО до капитального ремонта.",
      features: [
        "Плановое ТО",
        "Аварийный ремонт",
        "Модернизация",
        "Диагностика",
      ],
    },
    {
      icon: "Package",
      title: "Запчасти и расходники",
      description:
        "Оригинальные запчасти и качественные аналоги для всех моделей кранов.",
      features: [
        "Оригинальные запчасти",
        "Аналоги",
        "Быстрая доставка",
        "Гарантия качества",
      ],
    },
    {
      icon: "Headphones",
      title: "Сервисная поддержка",
      description:
        "24/7 техническая поддержка и выездное обслуживание по всей России.",
      features: [
        "Круглосуточно",
        "Выездной сервис",
        "Консультации",
        "Обучение операторов",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-secondary mb-4">
            Наши услуги
          </h2>
          <p className="text-xl font-opensans text-muted-foreground max-w-2xl mx-auto">
            Полный спектр услуг для работы с автокранами — от продажи до
            сервисного обслуживания
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md animate-fade-in"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-primary"
                  />
                </div>
                <CardTitle className="font-montserrat text-xl text-secondary">
                  {service.title}
                </CardTitle>
                <CardDescription className="font-opensans text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-2 font-opensans text-sm"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-primary flex-shrink-0"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
