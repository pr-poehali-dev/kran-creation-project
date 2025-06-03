import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-montserrat font-bold mb-6">
              Готовы обсудить ваш проект?
            </h2>
            <p className="text-xl font-opensans mb-8 text-gray-300">
              Свяжитесь с нашими экспертами для получения консультации по выбору
              и обслуживанию автокранов
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={20} className="text-primary" />
                </div>
                <div>
                  <div className="font-opensans font-semibold">
                    +7 922 22 54 373
                  </div>
                  <div className="text-gray-400 text-sm">
                    Звонки принимаем 24/7
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Icon name="Mail" size={20} className="text-primary" />
                </div>
                <div>
                  <div className="font-opensans font-semibold">
                    info@kran-russland.ru
                  </div>
                  <div className="text-gray-400 text-sm">
                    Ответим в течение часа
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={20} className="text-primary" />
                </div>
                <div>
                  <div className="font-opensans font-semibold">
                    г. Екатеринбург, ул. Щорса, д. 7, оф. 216
                  </div>
                  <div className="text-gray-400 text-sm">Головной офис</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="font-opensans font-semibold">
                <Icon name="Phone" size={20} />
                Заказать звонок
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="font-opensans font-semibold bg-transparent border-white text-white hover:bg-white hover:text-secondary"
              >
                <Icon name="MessageCircle" size={20} />
                Написать в WhatsApp
              </Button>
            </div>
          </div>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-montserrat text-white">
                Быстрая консультация
              </CardTitle>
              <CardDescription className="text-gray-300">
                Оставьте заявку и получите персональное предложение
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 font-opensans focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 font-opensans focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <textarea
                  placeholder="Опишите ваши потребности"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 font-opensans focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
              <Button className="w-full font-opensans font-semibold">
                <Icon name="Send" size={16} />
                Отправить заявку
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
