import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { getArticleDetailsData } from '@/entities/Article';
import { HStack } from '@/shared/ui/Stack';
import { getCanEditArticle } from '../../model/selectors/article';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
  const { className } = props;

  const { t } = useTranslation('article');
  const navigate = useNavigate();
  const article = useSelector(getArticleDetailsData);
  const canEdit = useSelector(getCanEditArticle);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.articles}/${article?.id}/edit`);
  }, [article?.id, navigate]);

  return (
    <HStack
      justify="between"
      fullWidth
      className={classNames('', {}, [className])}
    >
      <Button
        theme={ButtonTheme.Outline}
        onClick={onBackToList}
      >
        {t('Назад к списку', { ns: 'article' })}
      </Button>
      {canEdit && (
        <Button
          theme={ButtonTheme.Outline}
          onClick={onEditArticle}
        >
          {t('Редактировать', { ns: 'article' })}
        </Button>
      )}
    </HStack>
  );
});
