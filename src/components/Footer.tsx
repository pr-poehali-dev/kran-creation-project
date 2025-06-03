import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Truck" size={24} className="text-primary" />
              <span className="text-xl font-montserrat font-bold">
                Kran-Russland
              </span>
            </div>
            <p className="font-opensans text-gray-400 mb-4">
              Ремонт и поставка деталей автокранов Terex-Demag и Liebherr
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <Icon name="Phone" size={16} />
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <Icon name="Mail" size={16} />
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <Icon name="MessageCircle" size={16} />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-montserrat font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 font-opensans text-gray-400">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Продажа кранов
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Ремонт и ТО
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Запчасти
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Лизинг
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-montserrat font-semibold mb-4">Бренды</h3>
            <ul className="space-y-2 font-opensans text-gray-400">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terex-Demag
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Liebherr
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Б/У техника
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Аренда
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-montserrat font-semibold mb-4">Контакты</h3>
            <div className="space-y-3 font-opensans text-gray-400">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} className="text-primary" />
                <span>+7 922 22 54 373</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} className="text-primary" />
                <span>info@kran-russland.ru</span>
              </div>
              <div className="flex items-start space-x-2">
                <Icon name="MapPin" size={16} className="text-primary mt-0.5" />
                <span>г. Екатеринбург, ул. Щорса, д. 7</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center font-opensans text-gray-400">
          <p>&copy; 2024 Kran-Russland. Все права защищены. С 2008 года.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
