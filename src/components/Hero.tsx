import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-secondary via-secondary to-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-montserrat font-bold mb-6 leading-tight">
              Автокраны <span className="text-primary">Terex-Demag</span> и{" "}
              <span className="text-primary">Liebherr</span>
            </h1>
            <p className="text-xl font-opensans mb-8 text-gray-300 leading-relaxed">
              Профессиональная продажа, ремонт и техническое обслуживание
              автокранов ведущих мировых производителей по всей России
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                variant="outline"
                size="lg"
                className="font-opensans font-semibold bg-transparent border-white text-white hover:bg-white hover:text-secondary"
              >
                <Icon name="Wrench" size={20} />
                Заказать ремонт
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm font-opensans">
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle" size={16} className="text-primary" />
                <span>Гарантия качества</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-primary" />
                <span>Быстрый сервис</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} className="text-primary" />
                <span>По всей России</span>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl p-8">
              <img
                src="https://cdn.poehali.dev/files/48b5e689-ab9f-484a-982f-a141a28e3891.jpg"
                alt="Автокран Liebherr"
                className="w-full h-80 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-secondary text-center">
                  <div className="text-2xl font-montserrat font-bold">15+</div>
                  <div className="text-sm font-opensans">лет опыта</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
