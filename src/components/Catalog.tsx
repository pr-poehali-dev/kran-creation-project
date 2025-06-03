import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Catalog = () => {
  const cranes = [
    {
      brand: "Terex-Demag",
      model: "AC 40-2",
      capacity: "40 тонн",
      image:
        "https://images.unsplash.com/photo-1583347612491-c4e7bbd9c8b0?w=400&h=300&fit=crop",
      features: ["Компактный размер", "Высокая мобильность", "Экономичный"],
      price: "от 8,500,000 ₽",
    },
    {
      brand: "Liebherr",
      model: "LTM 1050-3.1",
      capacity: "50 тонн",
      image:
        "https://images.unsplash.com/photo-1580674285675-1770b42c3bb1?w=400&h=300&fit=crop",
      features: [
        "Всеходная база",
        "Длинная стрела",
        "Высокая грузоподъемность",
      ],
      price: "от 12,800,000 ₽",
    },
    {
      brand: "Terex-Demag",
      model: "AC 100-4L",
      capacity: "100 тонн",
      image:
        "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=400&h=300&fit=crop",
      features: ["Мощный двигатель", "Увеличенный вылет", "Премиум класс"],
      price: "от 18,900,000 ₽",
    },
    {
      brand: "Liebherr",
      model: "LTM 1130-5.1",
      capacity: "130 тонн",
      image:
        "https://images.unsplash.com/photo-1559958297-0d5cc023a386?w=400&h=300&fit=crop",
      features: [
        "Максимальная мощность",
        "Профессиональный уровень",
        "Надежность",
      ],
      price: "от 25,500,000 ₽",
    },
  ];

  return (
    <section id="catalog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-secondary mb-4">
            Популярные модели
          </h2>
          <p className="text-xl font-opensans text-muted-foreground max-w-2xl mx-auto">
            Лучшие автокраны от ведущих мировых производителей в наличии и под
            заказ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cranes.map((crane, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in"
            >
              <div className="relative overflow-hidden">
                <img
                  src={crane.image}
                  alt={`${crane.brand} ${crane.model}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-opensans font-semibold">
                  {crane.capacity}
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="text-sm font-opensans font-semibold text-primary mb-1">
                  {crane.brand}
                </div>
                <CardTitle className="font-montserrat text-xl text-secondary">
                  {crane.model}
                </CardTitle>
                <CardDescription className="font-opensans text-2xl font-bold text-secondary">
                  {crane.price}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {crane.features.map((feature, idx) => (
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

                <div className="flex flex-col space-y-2">
                  <Button className="w-full font-opensans">
                    <Icon name="Eye" size={16} />
                    Подробнее
                  </Button>
                  <Button variant="outline" className="w-full font-opensans">
                    <Icon name="Calculator" size={16} />
                    Рассчитать
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="font-opensans font-semibold"
          >
            <Icon name="Grid3x3" size={20} />
            Посмотреть весь каталог
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
